// components/NavBar/NavBar.tsx
import React from 'react';
import Link from 'next/link';

const NavBar = () => {
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
