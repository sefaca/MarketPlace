// components/NavBar/NavBar.tsx
import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

const NavBar = () => {

  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">MarketPlace</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" href="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/cart">Carrito</Link> {/* Enlace al carrito */}
            </li>
            <li className="nav-item">
              <Link href="/order-history" className="nav-link">Historial de Pedidos</Link>
            </li>
            {user ? (
        <button onClick={logout}>Cerrar sesión</button>
      ) : (
        <Link href="/login">Iniciar sesión</Link>
      )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
