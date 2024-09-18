import styled from "styled-components";
import InputText from "../InputText";

const StyledHeader = styled.header({
  padding: '60px 0',
  display: "flex",
  justifyContent: "space-between",
  img: {
    maxWidth: "212px"
  }
});

const Header = () => {
  return (
    <StyledHeader>
      <img src="/images/logo.png" alt="logo"/>
      <InputText />
    </StyledHeader>
  )
}

export default Header;