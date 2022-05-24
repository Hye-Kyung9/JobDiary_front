import React, { useState, useRef } from "react"; //useRef : 특정 DOM선택
import Footer from "../../layouts/Footer";
import SkillList from "./sections/SkillList";
import SaveBtn from "./SaveBtn";
import PrintBtn from "./PrintBtn";
import { useReactToPrint } from "react-to-print";

const WriteResume = () => {
  //갹채를 업데이트하기위해 useState안에 객체를 사용
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    profile: "",
    skill: "",
    skill_detail: "",
  });

  const [countList, setCountList] = useState([0]); //기술 추가 시 사용
  // const [show, setShow] = useState(false); // close_btn

  const onAddDetailDiv = () => {
    let countArr = [...countList];
    let counter = countArr.slice(-1)[0];
    counter += 1;
    countArr.push(counter); // index 사용 X
    // countArr[counter] = counter	// index 사용 시 윗줄 대신 사용
    setCountList(countArr);
  };

  //값을 가져오기 위해 inputs에 name으로 가져왔다
  const { name, email, address, phone, profile, skill, skill_detail } = inputs;

  const onChange = (e) => {
    //input에 name을 가진 요소의 value에 이벤트를 걸었다
    const { name, value } = e.target;

    // 변수를 만들어 이벤트가 발생했을때의 value를 넣어줬다
    const nextInputs = {
      //스프레드 문법으로 기존의 객체를 복사한다.
      ...inputs,
      [name]: value,
    };
    //만든 변수를 seInput으로 변경해준다.
    setInputs(nextInputs);
  };

  return (
    <>
      <div className="write_resume">
        {/* 왼쪽 전체 블록 */}
        <div className="writeblock">
          {/* 사용자 정보 */}

          <div className="userinfo_title">인적사항</div>
          <div className="userinfo_subtitle">
            이름과 주소 연락처 등과 같은 인적사항을 입력해주세요
          </div>
          <div className="userinfo_container">
            <div className="imgUpload">
              <button className="imgUpload_btn"></button>
              <button className="sub_imgUpload_btn">사진 업로드</button>
            </div>
            <br />
            <div className="userinfo_form_item">
              <label for="name">이름</label>
              <input
                id="name"
                name="name" //위에서 name의 값을 가져와 타겟을 가져온다.
                placeholder="이름을 입력해주세요"
                onChange={onChange}
                value={name} //가져온 타겟의 벨류값을 변경할때 사용한다.
              />
            </div>

            <div className="userinfo_form_item">
              <label for="email">이메일</label>
              <input
                id="email"
                name="email" //위에서 email의 값을 가져와 타겟을 가져온다.
                placeholder="이메일을 입력해주세요"
                onChange={onChange}
                value={email} //가져온 타겟의 벨류값을 변경할때 사용한다.
              />
            </div>
            <div className="userinfo_form_item">
              <label for="address">주소</label>
              <input
                id="address"
                name="address"
                placeholder="주소를 입력해주세요"
                onChange={onChange}
                value={address} //가져온 타겟의 벨류값을 변경할때 사용한다.
              />
            </div>
            <div className="userinfo_form_item">
              <label for="phone">연락처</label>
              <input
                id="phone"
                name="phone"
                placeholder="ex) xxxx-xxxx-xxxx"
                onChange={onChange}
                value={phone} //가져온 타겟의 벨류값을 변경할때 사용한다.
              />
            </div>
          </div>
          {/* 간단자기소개 */}
          <div className="Write_profile_container">
            <div className="Write_profile_title">간단 소개글</div>
            <div className="Write_profile_subtitle">
              간단한 자기소개를 통해 이력서를 돋보이게 만들어보세요!
            </div>
            <textarea
              className="Write_profile_textarea"
              id="profile"
              name="profile"
              onChange={onChange}
              value={profile}
            />
          </div>
          {/* 기술추가 */}
          <div className="Write_skills">
            <div className="Write_skills_title">기술</div>
            <div className="Write_skills_subtitle">
              기술명과 해당 기술에 대한 상세 설명을 기재해주세요 :)
            </div>
            <button className="skills_list_add_btn" onClick={onAddDetailDiv}>
              + 추가
            </button>
            <SkillList countList={countList} />
          </div>
          <SaveBtn />
          <PrintBtn />
        </div>

        {/* 여기서부터 오른쪽 렌더링 해주는 곳  */}
        <RightPreview userInfo={inputs} />
      </div>
      <Footer />
    </>
  );
};

const RightPreview = (props) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <div ref={componentRef} className="sheet RightPreview">
        <h1 className="preview_name">{props.userInfo.name}</h1>
        <ul>
          <li>이메일 : {props.userInfo.email}</li>
          <li>주소 : {props.userInfo.address}</li>
          <li>연락처 : {props.userInfo.phone}</li>
        </ul>
        <div className="preview_profile">{props.userInfo.profile}</div>
        <ul>
          <li>{props.userInfo.skill}</li>
          <li>{props.userInfo.skill_detail}</li>
        </ul>
      </div>
      <button onClick={handlePrint}>Print</button>
    </>
  );
};

export default WriteResume;
