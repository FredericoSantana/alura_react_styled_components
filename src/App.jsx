import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header/index";
import LateralBar from "./components/LateralBar";
import Banner from "./components/Banner";

const GradientBackground = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh
`

function App() {

  return (
    <GradientBackground>
      <GlobalStyles/>
      <Header/>
      <LateralBar />
      <Banner
        bgImage="/images/banner.png"
        text="A galeria mais completa de fotos no espaço!"
      />
    </GradientBackground>
  )
}

export default App
