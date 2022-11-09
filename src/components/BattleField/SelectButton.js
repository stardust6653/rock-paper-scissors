import React from "react";
import styled from "styled-components";

const SelectButton = ({ img, onClick }) => {
  const SelectButtonComponent = styled.div`
    width: 5rem;
    height: 5rem;
    border: 2px solid black;
    transition: all 0.3s ease-in-out;
    margin-right: 2rem;
    &:hover {
      border: 2px solid tomato;
      border-radius: 8%;
      cursor: pointer;
    }
    &:last-child {
      margin-right: 0;
    }
    background: center/5rem url("${img}");
  `;

  return <SelectButtonComponent onClick={onClick} />;
};

export default SelectButton;
