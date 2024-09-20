import styled from 'styled-components';
import facebook from '/images/sociais/facebook.svg'
import instagram from '/images/sociais/instagram.svg'
import twitter from '/images/sociais/twitter.svg'

const StyledFooter = styled.footer({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  marginTop: "100px",
  backgroundColor: "#04244F",
  padding: "22px",
  boxSizing: "border-box",
});

const ContainerIcon = styled.ul({
  margin: "0",
  padding: "0",
  listStyle: "none",
  li: {
    display: "inline-block",
    marginRight: "32px",
  }
});

const FooterText = styled.p({
  fontSize: "16px",
  color: "white",
  margin: 0,
});

function Footer() {
  return (
    <StyledFooter>
      <ContainerIcon>
        <li>
          <a href="#">
            <img src={facebook} alt="Facebook"/>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={twitter} alt="Twitter"/>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={instagram} alt="Instagram"/>
          </a>
        </li>
      </ContainerIcon>
      <FooterText>Desenvolvido por Alura.</FooterText>
    </StyledFooter>
  );
}

export default Footer;