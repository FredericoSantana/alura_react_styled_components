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

const ImagesContainer = styled.section({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "24px",
})

const Gallery = ({photos = []}) => {
  return (
    <>
      <Tags/>
      <GalleryContainer>
        <FluidSection>
          <Title>Navegue pela galeria</Title>
          <ImagesContainer>
            {photos.map(photo => <Image
                key={photo.id}
                photo={photo}
              />
            )}
          </ImagesContainer>
        </FluidSection>
        <Popular/>
      </GalleryContainer>

    </>
  );
};

export default Gallery;