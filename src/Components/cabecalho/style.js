import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0 0 12px 12px;
  backdrop-filter: blur(7px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const Logo = styled.img`
  width: 60px;
  cursor: pointer;
`;

export const NavMenu = styled.nav`
  display: flex;
  gap: 24px;
`;

export const NavItem = styled.a`
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  color: #fff;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const SearchBar = styled.div`
  background: #000;
  display: flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 20px;

  input {
    border: none;
    background: transparent;
    outline: none;
    margin-left: 8px;
    font-size: 14px;
    color: #fff;
    width: 120px;
  }
  svg {
    color: #fff;
  }
`;

export const Icons = styled.div`
  display: flex;
  gap: 16px;
  svg {
    font-size: 20px;
    color: #000;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }
`;
