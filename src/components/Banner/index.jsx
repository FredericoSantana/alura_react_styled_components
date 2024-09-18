import styled from "styled-components"

const StyledFigure = styled.figure(props => ({
  backgroundImage: `url(${props.$bgImage})`,
  flexGrow: 1,
  backgroundRepeat: "no-repeat",
  display: "flex",
  alignItems: "center",
  minHeight: "328px",
  margin: 0,
  borderRadius: "20px",
  maxWidth: "100%",
  backgroundSize: "cover",
}));

const StyledTitle = styled.h1({
  fontWeight: 400,
  fontSize: "40px",
  lineHeight: "48px",
  color: "#FFFFFF",
  maxWidth: "300px",
  padding: "0 64px",
});

const Banner = ({text, bgImage}) => {
  return (
    <StyledFigure $bgImage={bgImage}>
      <StyledTitle>
        {text}
      </StyledTitle>
    </StyledFigure>
  );
};

export default Banner;