import styled from "styled-components";

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
  }))
;

const Image = ({photo}) => {
  return (
    <Figure>
      <img src={photo.path} alt={photo.title}/>
      <figcaption>
        <h3>{photo.title}</h3>
        <footer>
          <h4>{photo.source}</h4>
          <button>favorito</button>
          <button>maximizar</button>
        </footer>
      </figcaption>
    </Figure>
  );
};

export default Image;