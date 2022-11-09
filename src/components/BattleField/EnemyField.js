import React, { useEffect } from "react";
import styled from "styled-components";
import { ROCK_IMG, PAPER_IMG, SCISSORS_IMG, DEFAULT_IMG } from "../../constants/constants";

const EnemyField = ({ randomNumber }) => {
  // styled-components

  const EnemyFieldComponent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid red;
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    background: no-repeat center/20rem url(${setPhoto});
  `;

  // event

  function setPhoto() {
    switch (randomNumber) {
      case 0:
        return SCISSORS_IMG;
        break;
      case 1:
        return ROCK_IMG;
        break;
      case 2:
        return PAPER_IMG;
        break;
      default:
        return DEFAULT_IMG;
    }
  }

  return <EnemyFieldComponent />;
};

export default EnemyField;
