import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { Nav, NavbarBrand, NavbarToggler, NavbarText, NavLink, NavContainer } from './NavBar.styles'; // Importa los estilos

const NavBar = () => {
  const { currentUser, userData, logout } = useAuth(); // Obtén currentUser y userData

  return (
    <Nav className="navbar navbar-expand-lg">
      <NavContainer>
        <Link href="/" passHref>
          <NavbarBrand>MarketPlace</NavbarBrand>
        </Link>
        <NavbarToggler
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/" passHref>
                <NavLink>Inicio</NavLink>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/cart" passHref>
                <NavLink>Carrito</NavLink>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/order-history" passHref>
                <NavLink>Historial de Pedidos</NavLink>
              </Link>
            </li>
          </ul>
          <NavbarText>
            {currentUser ? (
              <>
                <span>Bienvenid@, {userData?.firstName}!</span>
                <button onClick={logout} className="btn btn-outline-danger">Cerrar sesión</button>
              </>
            ) : (
              <Link href="/login" passHref>
                <button className="btn btn-outline-primary">Iniciar sesión</button>
              </Link>
            )}
          </NavbarText>
        </div>
      </NavContainer>
    </Nav>
  );
};

export default NavBar;
