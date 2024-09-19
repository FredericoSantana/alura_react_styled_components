import styled from 'styled-components';
import facebook from '/public/images/sociais/facebook.svg'
import instagram from '/public/images/sociais/instagram.svg'
import twitter from '/public/images/sociais/twitter.svg'

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

const containerIcon = styled.ul({
  margin: "0",
  padding: "0",
  listStyle: "none",
  li: {
    display: "inline-block",
    marginRight: "32px",
  }
});

const footerText = styled.p({
  fontSize: "16px",
  color: "white",
  margin: 0,
});

function Footer() {
  return (
    <StyledFooter>
      <containerIcon>
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
      </containerIcon>
      <footerText>Desenvolvido por Alura.</footerText>
    </StyledFooter>
  );
}

export default Footer;