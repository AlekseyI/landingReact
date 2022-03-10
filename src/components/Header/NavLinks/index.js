import styled from "styled-components";

export const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLinksLogoContainer = styled.div`
  flex-grow: 1;
`;

export const NavLink = styled.a`
  background: transparent;
  text-decoration: unset;
  color: black;
  font-weight: 400;
  font-size: 22px;
  line-height: 33px;
  
  :hover {
    color: initial;
  }
`;
