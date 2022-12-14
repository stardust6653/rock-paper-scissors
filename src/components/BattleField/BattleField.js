import React, { useEffect, useState } from "react";
import styled from "styled-components";
import EnemyField from "./EnemyField";
import SelectButton from "./SelectButton";
import UserField from "./UserField";
import { ROCK_IMG, PAPER_IMG, SCISSORS_IMG, VICTORY_CONDITIONS } from "../../constants/constants";
import Result from "./Result";
import ScoreBoard from "./ScoreBoard";
import Conditions from "./Conditions";
import DashBoard from "./DashBoard";
import Alarm from "./Alarm";

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

  const HideAllScreen = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.01);
    position: absolute;
  `;

  const Button = styled.button`
    height: 2rem;
    background-color: transparent;
    position: absolute;
    border: 1px solid black;
    &:hover {
      background-color: #111;
      color: tomato;
      cursor: pointer;
    }
    &:active {
      background-color: #777;
      color: white;
    }
  `;

  const SaveButton = styled(Button)`
    top: 1rem;
    right: 6.5rem;
    width: 3rem;
  `;

  const LoadButton = styled(Button)`
    top: 1rem;
    right: 1rem;
    width: 5rem;
  `;

  // state

  const [playerSelect, setPlayerSelect] = useState(3);
  const [enemySelect, setEnemySelect] = useState(3);
  const [result, setResult] = useState("????????? ??????!");
  const [playerScore, setPlayerScore] = useState(0);
  const [enemyScore, setEnemyScore] = useState(0);
  const [conditions, setConditions] = useState("");
  const [popUp, setPopUp] = useState(false);
  const [round, setRound] = useState(0);
  const [playerPosition, setPlayerPosition] = useState("");
  const [enemyPosition, setEnemyPosition] = useState("");
  const [savePopUp, setSavePopUp] = useState(false);
  const [loadPopUp, setLoadPopUp] = useState(false);
  const [count, setCount] = useState(0);

  // score ??????

  function increasePlayerScore() {
    setPlayerScore(playerScore + 1);
  }

  function increaseEnemyScore() {
    setEnemyScore(enemyScore + 1);
  }

  // ???????????? ??????

  function printPlayerPositionForResultDashBoard() {
    if (playerSelect === 0) {
      setPlayerPosition("??????");
    }
    if (playerSelect === 1) {
      setPlayerPosition("??????");
    }
    if (playerSelect === 2) {
      setPlayerPosition("???");
    }
  }

  function printEnemyPositionForResultDashBoard() {
    if (enemySelect === 0) {
      setEnemyPosition("??????");
    }
    if (enemySelect === 1) {
      setEnemyPosition("??????");
    }
    if (enemySelect === 2) {
      setEnemyPosition("???");
    }
  }

  // ?????? ??? ?????? ??????

  function victoryConditions() {
    if (playerScore === VICTORY_CONDITIONS) {
      setConditions("Player??? ??????????????????.");
      setPopUp(true);
    }
  }

  function loseConditions() {
    if (enemyScore === VICTORY_CONDITIONS) {
      setConditions("Player??? ??????????????????.");
      setPopUp(true);
    }
  }

  // ????????? ?????????

  function clickHandler(type) {
    setPlayerSelect(type);
    setEnemySelect(parseInt(Math.random() * 1000) % 3);
    setRound(round + 1);
    setCount(count + 1);
  }

  function clickExitBtn() {
    setPlayerSelect(3);
    setEnemySelect(3);
    setPopUp(false);
    setPlayerScore(0);
    setEnemyScore(0);
    setRound(0);
    localStorage.clear();
  }

  function clickExitAlarmBtn() {
    setLoadPopUp(false);
    setSavePopUp(false);
  }

  // ?????? ??????

  function playerVictoryConditions() {
    if (
      (playerSelect === 0 && enemySelect === 2) ||
      (playerSelect === 1 && enemySelect === 0) ||
      (playerSelect === 2 && enemySelect === 1)
    ) {
      setResult("???????????? ???!!");
      increasePlayerScore();
    }
  }

  function enemyVictoryConditions() {
    if (
      (playerSelect === 0 && enemySelect === 1) ||
      (playerSelect === 1 && enemySelect === 2) ||
      (playerSelect === 2 && enemySelect === 0)
    ) {
      setResult("????????? ???!");
      increaseEnemyScore();
    }
  }

  function drawConditions() {
    if (playerSelect !== 3 && playerSelect === enemySelect) {
      setResult("?????????!");
    } else if (playerSelect === 3 && enemySelect === 3) {
      setResult("????????? ??????!");
    }
  }

  // localStorage ??????

  function saveData() {
    const resultSave = {
      round: round,
      playerScore: playerScore,
      enemyScore: enemyScore,
      result: result,
      playerPosition: playerPosition,
      enemyPosition: enemyPosition,
    };

    localStorage.setItem("save", JSON.stringify(resultSave));
    setSavePopUp(true);
  }

  function loadData() {
    const localData = JSON.parse(localStorage.getItem("save"));
    setRound(localData["round"]);
    setResult(localData["result"]);
    setPlayerScore(localData["playerScore"]);
    setEnemyScore(localData["enemyScore"]);
    setLoadPopUp(true);
  }

  // useEffect

  useEffect(() => {
    playerVictoryConditions();
    enemyVictoryConditions();
    drawConditions();
  }, [count]);

  useEffect(() => {
    victoryConditions();
  }, [playerScore]);

  useEffect(() => {
    loseConditions();
  }, [enemyScore]);

  return (
    <>
      <BattleFieldComponent>
        <DashBoard playerPosition={playerPosition} enemyPosition={enemyPosition} result={result} />
        {round === 0 ? <span>?????? ??????!</span> : <span>round {round}</span>}
        <HeadComponent>
          <ScoreBoard result={playerScore} />
          <Title>???????????????</Title>
          <ScoreBoard result={enemyScore} />
        </HeadComponent>

        <Result result={result} />
        <BattleArea>
          <UserField playerSelect={playerSelect} />
          <VS>VS</VS>
          <EnemyField enemySelect={enemySelect} />
        </BattleArea>
        <SelectArea>
          <SelectButton onClick={() => clickHandler(0)} img={SCISSORS_IMG} />
          <SelectButton onClick={() => clickHandler(1)} img={ROCK_IMG} />
          <SelectButton onClick={() => clickHandler(2)} img={PAPER_IMG} />
        </SelectArea>
        {popUp || savePopUp || loadPopUp ? <HideAllScreen /> : null}
        {popUp ? <Conditions conditions={conditions} clickExitBtn={clickExitBtn} /> : null}
        {savePopUp ? (
          <Alarm comment={"????????? ?????????????????????."} clickExitAlarmBtn={clickExitAlarmBtn} />
        ) : null}
        {loadPopUp ? (
          <Alarm comment={"????????? ?????????????????????."} clickExitAlarmBtn={clickExitAlarmBtn} />
        ) : null}
        <SaveButton onClick={saveData}>??????</SaveButton>
        <LoadButton onClick={loadData}>????????????</LoadButton>
      </BattleFieldComponent>
    </>
  );
};

export default BattleField;
