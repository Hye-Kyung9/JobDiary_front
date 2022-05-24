import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./TodoTemplate";
import TodoHead from "./TodoHead";
import TodoLi from "./TodoLi";
import TodoCreate from "./TodoCreate";
import { TodoProvider } from "./TodoContext";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function TodoMain() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoLi />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default TodoMain;

// TodoTemplate
// 이 컴포넌트는 우리가 만들 투두리스트의 레이아웃을 설정하는 컴포넌트입니다. 페이지의 중앙에 그림자가 적용된 흰색 박스를 보여줍니다.

// TodoHead
// 이 컴포넌트는 오늘의 날짜와 요일을 보여주고, 앞으로 해야 할 일이 몇개 남았는지 보여줍니다.

// TodoList
// 이 컴포넌트는 할 일에 대한 정보가 들어있는 todos 배열을 내장함수 map 을 사용하여 여러개의 TodoItem 컴포넌트를 렌더링해줍니다.

// TodoItem
// 각 할 일에 대한 정보를 렌더링해주는 컴포넌트입니다. 좌측에 있는 원을 누르면 할 일의 완료 여부를 toggle 할 수 있습니다. 할 일이 완료됐을 땐 좌측에 체크가 나타나고 텍스트의 색상이 연해집니다. 그리고, 마우스를 올리면 휴지통 아이콘이 나타나고 이를 누르면 항목이 삭제됩니다.

// TodoCreate
// 새로운 할 일을 등록할 수 있게 해주는 컴포넌트입니다. TodoTemplate 의 하단부에 초록색 원 버튼을 렌더링해주고, 이를 클릭하면 할 일을 입력 할 수 있는 폼이 나타납니다. 버튼을 다시 누르면 폼이 사라집니다.

// 페이지에 회색 배경색상 적용
// 먼저 페이지에 회색 (#e9ecef) 배경색상을 적용해보겠습니다. 페이지의 배경 색상을 설정하려면 body 태그에 CSS 를 적용해주면 되는데요, 이를 하기 위해서는 index.css 에서 해도 무방하지만, 만약에 styled-components 를 사용해서 적용을 하고 싶을땐 어떻게 할 수 있는지 알아봅시다.

// styled-components 에서 특정 컴포넌트를 만들어서 스타일링 하는게 아니라 글로벌 스타일을 추가하고 싶을 땐 createGlobalStyle 이라는 것을 사용합니다. 이 함수를 사용하면 컴포넌트가 만들어지는데, 이 컴포넌트를 렌더링하면 됩니다.
