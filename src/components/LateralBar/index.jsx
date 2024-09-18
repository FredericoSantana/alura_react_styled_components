import styled from "styled-components";
import NavItem from "./NavItem";

const StyledList = styled.ul({
  listStyle: "none",
  padding: 0,
  margin: 0,
  width: "212px"
});
const LateralBar = () => {
  return (
    <aside>
      <nav>
        <StyledList>
          <NavItem
            activeIcon="/icons/home-ativo.png"
            inactiveIcon="/icons/home-inativo.png"
            active
          >
            Home
          </NavItem>
        </StyledList>
      </nav>
    </aside>
  );
};

export default LateralBar;