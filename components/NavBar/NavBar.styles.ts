import styled from 'styled-components';

export const ContainerFluid = styled.div `
    display: flex;
    flex-wrap: inherit;
    align-items: center;
    width: 80%;
    justify-content: space-between;
`;

export const Nav = styled.nav`
  background-color: #1B6392;
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const NavContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarBrand = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`;

export const NavbarToggler = styled.button`
  border: none;
  background-color: white;

  @media (min-width: 768px) {
    display: none;
  }

  &:focus {
    outline: none;
  }
`;

export const NavbarText = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  color: white;

  span {
    margin-right: 1rem;
    font-size: 1.1rem;
    font-weight: bold;
    color: white;
  }

  button {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
    color: white;
    border-color: black;
  }
`;

export const NavLink = styled.a`
  font-size: 1rem;
  color: #000;
  margin-right: 1rem;
  margin-left: 2.5rem;
  text-decoration: none;
  color: white;

  &:hover {
    color: white;
  }
`;
