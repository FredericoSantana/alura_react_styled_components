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
            active={true}
          >
            Home
          </NavItem>
          <NavItem
            activeIcon="/icons/mais-vistas-ativo.png"
            inactiveIcon="/icons/mais-vistas-inativo.png"
          >
            Mais vistas
          </NavItem>
          <NavItem
            activeIcon="/icons/mais-curtidas-ativo.png"
            inactiveIcon="/icons/mais-curtidas-inativo.png"
          >
            Mais curtidas
          </NavItem>
          <NavItem
            activeIcon="/icons/novas-ativo.png"
            inactiveIcon="/icons/novas-inativo.png"
          >
            Novas
          </NavItem>
          <NavItem
            activeIcon="/icons/surpreenda-me-ativo.png"
            inactiveIcon="/icons/surpreenda-me-inativo.png"
          >
            Surpreenda-me
          </NavItem>
        </StyledList>
      </nav>
    </aside>
  );
};

export default LateralBar;