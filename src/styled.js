import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "active";

export const NavStyled = styled.nav`
  position: absolute;
  height: 60px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const UlStyled = styled.ul`
  height: 30px;
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: center;
  gap: 40px;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink).attrs((props) => ({
  activeClassName,
}))`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.NavTextColor};

  &.${activeClassName} {
    font-weight: bold;
  }
`;
