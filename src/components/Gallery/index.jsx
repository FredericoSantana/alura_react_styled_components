import React from 'react';
import Title from "../Title";
import Tags from "./Tags";
import styled from "styled-components";
import Popular from "./Popular";
import Image from "./Image";

const GalleryContainer = styled.div({
  display: "flex",
})

const FluidSection = styled.section({
  flexGrow: 1
})

const Gallery = ({photos = []}) => {
  return (
    <>
      <Tags/>
      <GalleryContainer>
        <FluidSection>
          <Title>Navegue pela galeria</Title>
          {photos.map(photo => <Image key={photo.id} photo={photo}/>)}
        </FluidSection>
        <Popular/>
      </GalleryContainer>

    </>
  );
};

export default Gallery;