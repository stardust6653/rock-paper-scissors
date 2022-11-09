import React, { useEffect, useState } from "react";
import styled from "styled-components";
import EnemyField from "./EnemyField";
import SelectButton from "./SelectButton";
import UserField from "./UserField";
import { ROCK_IMG, PAPER_IMG, SCISSORS_IMG, DEFAULT_IMG } from "../../constants/constants";
import Result from "./Result";

const BattleField = () => {
  // styled-components

  const BattleFieldComponent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 5px solid black;
    width: 100rem;
    height: 50rem;
  `;

  const Title = styled.h1`
    margin: 0 0 1rem;
    font-size: 4rem;
  `;

  const VS = styled.span`
    margin: 4rem;
    font-size: 5rem;
  `;

  const BattleArea = styled.div`
    width: 80rem;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const SelectArea = styled.div`
    width: 45rem;
    height: 10rem;
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
  `;

  // state

  const [selectCase, setSelectCase] = useState();
  const [randomNumber, setRandomNumber] = useState();
  const [result, setResult] = useState("안내면 진다!");

  // 이벤트 설정

  useEffect(() => {
    if (selectCase === randomNumber) {
      setResult("무승부!");
    } else if (selectCase === 0 && randomNumber === 2) {
      setResult("플레이어 승!");
    } else if (selectCase === 0 && randomNumber === 1) {
      setResult("컴퓨터 승!");
    } else if (selectCase === 1 && randomNumber === 0) {
      setResult("플레이어 승!");
    } else if (selectCase === 1 && randomNumber === 2) {
      setResult("컴퓨터 승!");
    } else if (selectCase === 2 && randomNumber === 1) {
      setResult("플레이어 승!");
    } else if (selectCase === 2 && randomNumber === 0) {
      setResult("컴퓨터 승!");
    }
  }, [selectCase, randomNumber]);

  function clickScissors() {
    setSelectCase(0);
    setRandomNumber(parseInt(Math.random() * 1000) % 3);
    console.log("select :", selectCase);
    console.log("random :", randomNumber);
    console.log(selectCase === randomNumber);
  }
  function clickRock() {
    setSelectCase(1);
    setRandomNumber(parseInt(Math.random() * 1000) % 3);
  }

  function clickPaper() {
    setSelectCase(2);
    setRandomNumber(parseInt(Math.random() * 1000) % 3);
  }

  return (
    <BattleFieldComponent>
      <Title>가위바위보</Title>
      <Result result={result} />
      <BattleArea>
        <UserField selectCase={selectCase} />
        <VS>VS</VS>
        <EnemyField randomNumber={randomNumber} />
      </BattleArea>
      <SelectArea>
        <SelectButton onClick={clickScissors} img={SCISSORS_IMG} />
        <SelectButton onClick={clickRock} img={ROCK_IMG} />
        <SelectButton onClick={clickPaper} img={PAPER_IMG} />
      </SelectArea>
    </BattleFieldComponent>
  );
};

export default BattleField;
