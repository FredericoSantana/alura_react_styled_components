import styled from "styled-components";
import IconButton from "../../IconButton";

const Figure = styled.figure(props => ({
  width: props.expanded ? "90%" : "460px",
  maxWidth: "100%",
  margin: 0,
  display: "flex",
  flexDirection: "column",
  "& > img": {
    maxWidth: "100%",
    borderRadius: "20px 20px 0 0"
  },
  figcaption: {
    backgroundColor: "#001634",
    borderRadius: "0px 0px 20px 20px",
    color: "white",
    boxSizing: "border-box",
    padding: "12px",
    h3: {
      fontFamily: 'GandhiSansBold',
    },
    h4: {
      flexGrow: 1,
    },
    "h3, h4": {
      margin: 0,
      fontSize: "16px",
    }
  }
}));

const Footer = styled.footer({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
})

const Image = ({photo, expanded = false}) => {

  // const favoriteIcon = foto.favorite ? '/icons/favorito-ativo.png' : '/icons/favorito.png'
  let favoriteIcon = '/icons/favorito.png';
  if (photo.favorite) {
    favoriteIcon = '/icons/favorito-ativo.png'
  }

  return (
    <Figure expanded={expanded} id={`foto-${photo.id}`}>
      <img src={photo.path} alt={photo.title}/>
      <figcaption>
        <h3>{photo.title}</h3>
        <Footer>
          <h4>{photo.source}</h4>
          <IconButton>
            <img src={favoriteIcon} alt="Icone de favorito"/>
          </IconButton>
          <IconButton>
            <img src="/icons/expandir.png" alt="Icone de expandir" />
          </IconButton>
        </Footer>
      </figcaption>
    </Figure>
  );
};

export default Image;