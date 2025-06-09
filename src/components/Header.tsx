// src/components/Header.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Brechuff Logo" className={styles.logo} />
      <nav className={styles.navLinks}>
        <NavLink to="/" end className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink}>
          Início
        </NavLink>
        <NavLink to="/bazar" className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink}>
          Bazar
        </NavLink>
        <NavLink to="/forum" className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink}>
          Fórum
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink}>
          Sobre Nós
        </NavLink>
        <NavLink to="/login" className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink}>
          Login
        </NavLink>
        <NavLink to="/register" className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink}>
          Criar Conta
        </NavLink>
      </nav>
    </header>
  );
}
