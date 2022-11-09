import React, { useState } from "react";
import styled from "styled-components";

const Board = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  border-radius: 10%;
  width: 5rem;
  height: 5rem;
  border: 1px solid black;
`;

function ScoreBoard({ result }) {
  return <Board>{result}</Board>;
}

export default ScoreBoard;
