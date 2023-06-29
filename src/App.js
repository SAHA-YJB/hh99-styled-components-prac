import "./App.css";
import styled from "styled-components";
import TestPage from "./components/TestPage";
import GlobalStyle from "./GlobalStyle";

const StContainer = styled.div`
  display: flex;
`;

const StDiv = styled.div`
  width: 100px;
  height: 100px;
  border: 5px solid ${(props) => props.bodercolor};
  margin: 20px;
`;

function App() {
  const boxColor = ["red", "blue", "green", "black"];

  //색을 넣으면 이름 변환
  const getBoxName = (color) => {
    switch (color) {
      case "red":
        return "빨간박스";
      case "green":
        return "초록박스";
      case "blue":
        return "파란박스";
      default:
        return "검정박스";
    }
  };
  return (
    // <StContainer>
    //   {/* <StDiv bodercolor="red">빨박스</StDiv> */}
    //   {boxColor.map((box) => {
    //     return <StDiv bodercolor={box}>{getBoxName(box)}</StDiv>;
    //   })}
    // </StContainer>
    <>
    <GlobalStyle/>
    <TestPage title="제목입니다" contents="내용입니다." />
    </>
  );
}

export default App;
