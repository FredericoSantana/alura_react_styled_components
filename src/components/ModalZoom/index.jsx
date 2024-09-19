import React from 'react';
import Image from "../Gallery/Image";
import styled from "styled-components";
import IconButton from "../IconButton";

const Overlay = styled.div({
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});

const StyledDialog = styled.dialog({
  position: "absolute",
  top: "294px",
  background: "transparent",
  padding: 0,
  border: 0,
  width: "1156px",
  display: "flex",
  justifyContent: "center",
  form: {
    button: {
      position: "relative",
      top: "20px",
      right: "60px",
    }
  }
})

const ModalZoom = ({photo, aoFechar, onChangeFavourite}) => {
  return (
    <>
      {photo && <>
        <Overlay/>
        <StyledDialog open={!!photo} onClose={aoFechar}>
          <Image photo={photo} expanded={true} onChangeFavourite={onChangeFavourite}/>
          <form method="dialog">
            <IconButton formMethod="dialog">
              <img src="/icons/fechar.png" alt="Icone de fechar" />
            </IconButton>
          </form>
        </StyledDialog>
      </>}
    </>
  );
};

export default ModalZoom;