import Title from "../../Title";
import styled from "styled-components";
import photos from "./fotos-populares.json";

const PhotosColumn = styled.section({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

const Image = styled.img({
  maxWidth: "212px",
  borderRadius: "20px",
});

const Button = styled.button({
  backgroundColor: "transparent",
  color: "#fff",
  border: "2px solid",
  borderColor: "#C98CF1",
  padding: "12px 20px",
  fontSize: "20px",
  borderRadius: "10px",
  cursor: "pointer",
  width: "100%",
  marginTop: "16px",
});

const Popular = () => {
  return (
    <section>
      <Title alignment="center">Populares</Title>
      <PhotosColumn>
        {photos.map(photo => <Image key={photo.id} src={photo.path} alt={photo.alt}/>)}
      </PhotosColumn>
      <Button>Ver mais</Button>
    </section>

  );
};

export default Popular;