import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header/index";
import LateralBar from "./components/LateralBar";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import photos from "./photos.json";
import {useState} from "react";
import ModalZoom from "./components/ModalZoom";
import Footer from "./components/Footer";

const GradientBackground = styled.div({
  background: "linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%)",
  width: "100%",
  minHeight: "100vh"
});

const AppContainer = styled.div({
  width: "1440px",
  margin: "0 auto",
  maxWidth: "100%"
});

const MainContainer = styled.main({
  display: "flex",
  gap: "24px"
});

const GalleryContent = styled.section({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1
});

function App() {
  const [galleryPhotos, setGalleryPhotos] = useState(photos);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const onChangeFavourite = (photo) => {
    if (photo.id === selectedPhoto?.id) {
      setSelectedPhoto({
        ...selectedPhoto,
        favourite: !selectedPhoto.favourite
      })
    }
    setGalleryPhotos(galleryPhotos.map(galleryPhoto => {
      return {
        ...galleryPhoto,
        favourite: galleryPhoto.id === photo.id ? !photo.favourite : galleryPhoto.favourite
      }
    }));
  }

  return (
    <GradientBackground>
      <GlobalStyles/>
      <AppContainer>
        <Header/>
        <MainContainer>
          <LateralBar/>
          <GalleryContent>
            <Banner
              bgImage="/images/banner.png"
              text="A galeria mais completa de fotos no espaço!"
            />
            <Gallery
              onSelectedPhoto={photo => setSelectedPhoto(photo)}
              onChangeFavourite={onChangeFavourite}
              photos={galleryPhotos}
            />
          </GalleryContent>
        </MainContainer>
      </AppContainer>
      <Footer/>
      <ModalZoom
        photo={selectedPhoto}
        aoFechar={() => setSelectedPhoto(null)}
        onChangeFavourite={onChangeFavourite}
      />
    </GradientBackground>
  )
}

export default App
