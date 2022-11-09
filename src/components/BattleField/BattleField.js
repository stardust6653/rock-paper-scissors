import React, { useEffect, useState } from "react";
import styled from "styled-components";
import EnemyField from "./EnemyField";
import SelectButton from "./SelectButton";
import UserField from "./UserField";
import { ROCK_IMG, PAPER_IMG, SCISSORS_IMG, DEFAULT_IMG } from "../../constants/constants";
import Result from "./Result";
import ScoreBoard from "./ScoreBoard";
import Conditions from "./Conditions";

const BattleField = () => {
  // styled-components

  const BattleFieldComponent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 5px solid black;
    width: 100rem;
    height: 50rem;
  `;

  const HeadComponent = styled.div`
    display: flex;
  `;

  const Title = styled.h1`
    margin: 0 2rem 1rem;
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

  const [selectCase, setSelectCase] = useState(3);
  const [randomNumber, setRandomNumber] = useState(3);
  const [result, setResult] = useState("안내면 진다!");
  const [playerScore, setPlayerScore] = useState(0);
  const [enemyScore, setEnemyScore] = useState(0);
  const [conditions, setConditions] = useState("");
  const [popUp, setPopUp] = useState(false);

  // 이벤트 설정

  useEffect(() => {
    if (selectCase !== 3 && selectCase === randomNumber) {
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
    } else if (selectCase === 3 && randomNumber === 3) {
      setResult("안내면 진다!");
    }
  }, [selectCase, randomNumber]);

  // score 함수

  function increasePlayerScore() {
    if (result === "플레이어 승!") {
      setPlayerScore(playerScore + 1);
    }
  }

  function increaseEnemyScore() {
    if (result === "컴퓨터 승!") {
      setEnemyScore(enemyScore + 1);
    }
  }

  // 승리 조건 함수

  function victoryConditions() {
    if (playerScore === 3) {
      console.log("Player가 승리했습니다.");
      setConditions("Player가 승리했습니다.");
      setPopUp(true);
    }
  }

  function loseConditions() {
    if (enemyScore === 3) {
      console.log("Player가 패배했습니다.");
      setConditions("Player가 패배했습니다.");
      setPopUp(true);
    }
  }

  // 이벤트 핸들러

  function clickScissors() {
    setSelectCase(0);
    setRandomNumber(parseInt(Math.random() * 1000) % 3);
  }
  function clickRock() {
    setSelectCase(1);
    setRandomNumber(parseInt(Math.random() * 1000) % 3);
  }

  function clickPaper() {
    setSelectCase(2);
    setRandomNumber(parseInt(Math.random() * 1000) % 3);
  }

  function clickExitBtn() {
    setSelectCase(3);
    setRandomNumber(3);
    setPopUp(false);
    setPlayerScore(0);
    setEnemyScore(0);
  }

  // useEffect

  useEffect(() => {
    increasePlayerScore();
  }, [result]);

  useEffect(() => {
    increaseEnemyScore();
  }, [result]);

  useEffect(() => {
    victoryConditions();
  }, [playerScore]);

  useEffect(() => {
    loseConditions();
  }, [enemyScore]);

  return (
    <>
      <BattleFieldComponent>
        <HeadComponent>
          <ScoreBoard result={playerScore} />
          <Title>가위바위보</Title>
          <ScoreBoard result={enemyScore} />
        </HeadComponent>

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
        {popUp ? <Conditions conditions={conditions} clickExitBtn={clickExitBtn} /> : null}
      </BattleFieldComponent>
    </>
  );
};

export default BattleField;
