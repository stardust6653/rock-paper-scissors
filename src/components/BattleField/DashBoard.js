import styled from "styled-components";

const DashBoardComponent = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 20rem;
  height: 48rem;
  border: 3px solid black;
  display: flex;
  flex-direction: column;

  align-items: center;
  overflow: scroll;
`;

const ResultList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  width: 18rem;
  height: 4.5rem;
  border: 2px solid black;
`;

function DashBoard({ playerPosition, enemyPosition, result }) {
  return (
    <DashBoardComponent>
      <ResultList>
        <span>플레이어 : {playerPosition} </span>
        <span>컴퓨터 : {enemyPosition} </span>
        <span>결과 : {result}</span>
      </ResultList>
    </DashBoardComponent>
  );
}

export default DashBoard;
