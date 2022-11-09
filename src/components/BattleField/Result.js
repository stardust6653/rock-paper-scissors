import React from "react";
import styled from "styled-components";

const ResultComponent = styled.div`
  width: 12rem;
  height: 3rem;
  border: 1px solid black;
  border-radius: 8%;
  font-size: 2rem;
  text-align: center;
  line-height: 3rem;
`;

function Result({ result }) {
  return <ResultComponent>{result}</ResultComponent>;
}

export default Result;
