import React from 'react';
import styels from './header.module.css';
import logoImg from '../img/logo.png';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header>
        <div className={styels.inner}>
            <h1 className={styels.logo}>
            <Link to="/">
            <img src={logoImg} alt="로고" />
            </Link>
            </h1>
            <Navbar />
        </div>
    </header>
  )
}

export default Header