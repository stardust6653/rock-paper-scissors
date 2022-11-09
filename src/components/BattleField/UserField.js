import React, { useState } from "react";
import styled from "styled-components";
import { ROCK_IMG, PAPER_IMG, SCISSORS_IMG, DEFAULT_IMG } from "../../constants/constants";

const UserField = ({ playerSelect }) => {
  // styled-components

  const UserFieldComponent = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid green;
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    background: no-repeat center/20rem url(${setPhoto});
  `;

  // event

  function setPhoto() {
    switch (playerSelect) {
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

  return <UserFieldComponent />;
};

export default UserField;
