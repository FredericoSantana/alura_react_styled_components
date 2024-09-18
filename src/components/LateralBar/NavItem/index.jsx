import React from 'react';
import styled from "styled-components";

const StyledListItem = styled.li(props => ({
  fontSize: "24px",
  lineHeight: "29px",
  marginBottom: "30px",
  cursor: "pointer",
  color: props.active ? '#7B78E5' : '#D9D9D9',
  fontFamily: props.active ? 'GandhiSansBold' : 'GandhiSansRegular',
  display: "flex",
  alignItems: "center",
  gap: "22px"
}));

const NavItem = ({children, activeIcon, inactiveIcon, active = false}) => {
  return (
    <StyledListItem active={active}>
      <img src={active ? activeIcon : inactiveIcon} alt=""/>
      {children}
    </StyledListItem>
  );
};

export default NavItem;