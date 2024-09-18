import styled from "styled-components";

const Title = styled.h2(props => ({
  color: "#7B78E6",
  fontSize: "32px",
  textAlign: props.alignment ? props.alignment : "left"
}));

export default Title;