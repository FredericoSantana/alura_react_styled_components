import styled from "styled-components";
import search from './search.png'

const StyledContainer = styled.div({
  position: "relative",
  display: "inline-block",
});

const StyledInputText = styled.input({
  height: "56px",
  padding: "12px 16px",
  borderRadius: "10px",
  border: "2px solid",
  borderColor: "#C98CF1",
  background: "transparent",
  boxSizing: "border-box",
  width: "566px",
  color: "#D9D9D9",
  fontWeight: "400",
  fontSize: "20px",
  lineHeight: "20px",
});

const MagnifierIcon = styled.img({
  position: "absolute",
  top: "10px",
  right: "10px",
  width: "38px",
  height: "38px",
});

import React from 'react';

const InputText = ({setFilter}) => {
  return (
    <StyledContainer>
      <StyledInputText
        onChange={(event) => { setFilter(event.target.value) }}
        type="text"
        placeholder="O que você procura?"/>
      <MagnifierIcon src={search} alt="ícone de lupa"/>
    </StyledContainer>
  );
};

export default InputText;