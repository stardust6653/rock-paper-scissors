import React from "react";
import styled from "styled-components";

const PopUp = styled.div`
  background-color: whitesmoke;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30rem;
  height: 20rem;
  border: 2px solid black;
  font-size: 2.5rem;
`;

const ExitBtn = styled.button`
  background-color: transparent;
  position: absolute;
  width: 2rem;
  height: 2rem;
  font-size: 1.5rem;
  top: 1rem;
  left: 1rem;
  &:active {
    background-color: #999;
  }
`;

function Conditions({ conditions, clickExitBtn }) {
  return (
    <>
      <PopUp>
        <ExitBtn onClick={clickExitBtn}>X</ExitBtn>
        <div>{conditions}</div>
      </PopUp>
    </>
  );
}

export default Conditions;
