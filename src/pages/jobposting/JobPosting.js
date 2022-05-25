import React, { useState, useEffect } from "react";
import axios from "axios";
import XMLParser from "react-xml-parser";

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
          "https://cors-anywhere.herokuapp.com/http://openapi.work.go.kr/opi/opi/opia/wantedApi.do?authKey=WNL1TYI6B8EEDV4BS5BZ92VR1HK&callTp=L&returnType=XML&startPage=1&display=10&occupation=024"
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
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;
  return (
    <ul>
      {users.map((user) => (
        <li key={user.getElementsByTagName("wantedAuthNo")[0].value}>
          {user.getElementsByTagName("title")[0].value}{" "}
          {user.getElementsByTagName("company")[0].value}
        </li>
      ))}
    </ul>
  );
};
export default JobPosting;
