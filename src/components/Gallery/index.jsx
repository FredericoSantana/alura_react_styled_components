import React from 'react';
import Title from "../Title";
import Tags from "./Tags";
import styled from "styled-components";
import Popular from "./Popular";

const GalleryContainer = styled.div({
  display: "flex",
})

const FluidSection = styled.section({
  flexGrow: 1
})

const Gallery = () => {
  return (
    <>
      <Tags/>
      <GalleryContainer>
        <FluidSection>
          <Title>Navegue pela galeria</Title>
        </FluidSection>
        <Popular/>
      </GalleryContainer>

    </>
  );
};

export default Gallery;