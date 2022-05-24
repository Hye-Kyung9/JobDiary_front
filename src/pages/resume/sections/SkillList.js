import React, { useState } from "react";

const DetailList = (props) => {
  const [inputs, setInputs] = useState({
    skill: "",
    skill_detail: "",
  });
  const { skill, skill_detail } = inputs;
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
      {props.countList &&
        props.countList.map((item, i) => (
          <div key={i} className="skills_list_container">
            <div>
              <ul>
                <li>
                  <form>
                    <input
                      className="skill_name_title"
                      id="skill"
                      name="skill"
                      placeholder="기술"
                      onChange={onChange}
                      value={skill} //가져온 타겟의 벨류값을 변경할때 사용한다.
                    />
                    <input
                      className="skill_name_subtitle"
                      id="skill_detail"
                      name="skill_detail"
                      placeholder="기술 명과 기술에 대한 상세 설명을 기재해주세요"
                      onChange={onChange}
                      value={skill_detail}
                    />
                  </form>
                </li>
              </ul>
            </div>
          </div>
        ))}
    </>
  );
};
export default DetailList;
