import tags from "./tags.json";
import styled from "styled-components";

const TagTitle = styled.h3({
  color: "#D9D9D9",
  fontSize: "24px",
  margin: 0
});

const Tag = styled.button({
  fontSize: "24px",
  color: "#FFFFFF",
  background: "rgba(217, 217, 217, 0.3)",
  borderRadius: "10px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  padding: "12px",
  boxSizing: "border-box",
  border: "2px solid transparent",
  "&:hover": {
    borderColor: "#C98CF1",
  }
});

const Tags = () => {
  return (
    <>
      <TagTitle>Busque por tags:</TagTitle>
      {tags.map(tag => <Tag key={tag.id}>{tag.titulo}</Tag>)}
    </>
  );
};

export default Tags;