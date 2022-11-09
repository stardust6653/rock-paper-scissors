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

  const AllScreen = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.01);
    position: absolute;
  `;

  // state

  const [playerSelect, setPlayerSelect] = useState(3);
  const [enemySelect, setEnemySelect] = useState(3);
  const [result, setResult] = useState("안내면 진다!");
  const [playerScore, setPlayerScore] = useState(0);
  const [enemyScore, setEnemyScore] = useState(0);
  const [conditions, setConditions] = useState("");
  const [popUp, setPopUp] = useState(false);

  // 이벤트 설정

  useEffect(() => {
    if (playerSelect !== 3 && playerSelect === enemySelect) {
      setResult("무승부!");
    } else if (playerSelect === 0 && enemySelect === 2) {
      setResult("플레이어 승!");
    } else if (playerSelect === 0 && enemySelect === 1) {
      setResult("컴퓨터 승!");
    } else if (playerSelect === 1 && enemySelect === 0) {
      setResult("플레이어 승!");
    } else if (playerSelect === 1 && enemySelect === 2) {
      setResult("컴퓨터 승!");
    } else if (playerSelect === 2 && enemySelect === 1) {
      setResult("플레이어 승!");
    } else if (playerSelect === 2 && enemySelect === 0) {
      setResult("컴퓨터 승!");
    } else if (playerSelect === 3 && enemySelect === 3) {
      setResult("안내면 진다!");
    }
  }, [playerSelect, enemySelect]);

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
    setPlayerSelect(0);
    setEnemySelect(parseInt(Math.random() * 1000) % 3);
  }
  function clickRock() {
    setPlayerSelect(1);
    setEnemySelect(parseInt(Math.random() * 1000) % 3);
  }

  function clickPaper() {
    setPlayerSelect(2);
    setEnemySelect(parseInt(Math.random() * 1000) % 3);
  }

  function clickExitBtn() {
    setPlayerSelect(3);
    setEnemySelect(3);
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
          <UserField playerSelect={playerSelect} />
          <VS>VS</VS>
          <EnemyField enemySelect={enemySelect} />
        </BattleArea>
        <SelectArea>
          <SelectButton onClick={clickScissors} img={SCISSORS_IMG} />
          <SelectButton onClick={clickRock} img={ROCK_IMG} />
          <SelectButton onClick={clickPaper} img={PAPER_IMG} />
        </SelectArea>
        {popUp ? <AllScreen /> : null}
        {popUp ? <Conditions conditions={conditions} clickExitBtn={clickExitBtn} /> : null}
      </BattleFieldComponent>
    </>
  );
};

export default BattleField;
