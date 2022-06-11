import React, { useState, useEffect } from "react";
import axios from "axios";
import XMLParser from "react-xml-parser";
import CommonTable from "../../components/boardtable/CommonTable";
import CommonTableColumn from "../../components/boardtable/CommonTableColumn";
import CommonTableRow from "../../components/boardtable/CommonTableRow";
import "../../index.css";
import SelectPosition from "./SelectPosition.js";

const JobPosting = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setUsers(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        //
        const response = await axios.get(
          "https://cors-anywhere.herokuapp.com/https://openapi.work.go.kr/opi/opi/opia/wantedApi.do?authKey=WNL1TYI6B8EEDV4BS5BZ92VR1HK&callTp=L&returnType=XML&startPage=1&display=50&occupation=024"
          // "http://localhost:4000/routes/openapi/worknet"
        );
        const xml = new XMLParser().parseFromString(response.data); // Assume xmlText contains the example XML
        const parsingData = xml.getElementsByTagName("wanted");
        console.log(parsingData);
        setUsers(parsingData); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);
  if (loading)
    return (
      <div class="loading dot">
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;
  return (
    <>
      <SelectPosition />
      <CommonTable
        headersName={[
          "회사명",
          "채용제목/임금/근무지역/근무형태",
          "학력/경력",
          "등록일",
          "마감일",
        ]}
      >
        {users.map((user) => (
          <CommonTableRow>
            <CommonTableColumn>
              {user.getElementsByTagName("company")[0].value}
            </CommonTableColumn>
            <CommonTableColumn>
              <a href={user.getElementsByTagName("wantedInfoUrl")[0].value}>
                {user.getElementsByTagName("title")[0].value}
              </a>
            </CommonTableColumn>
            <CommonTableColumn>
              {user.getElementsByTagName("career")[0].value}
            </CommonTableColumn>
            <CommonTableColumn>
              {user.getElementsByTagName("regDt")[0].value}
            </CommonTableColumn>
            <CommonTableColumn>
              {user.getElementsByTagName("closeDt")[0].value}
            </CommonTableColumn>
          </CommonTableRow>
        ))}
      </CommonTable>
    </>
  );
};
export default JobPosting;
