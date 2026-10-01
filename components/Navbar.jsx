import React from 'react';

export default function Navbar({ onOpenModal }) {
  return (
    <header className="navbar">
      <a href="#top" className="logo">Солнышко<span className="logo-sun" /></a>
      <nav className="nav-links" aria-label="Основная навигация">
        <a href="#about">О саде</a>
        <a href="#day">Распорядок</a>
        <a href="#groups">Группы</a>
        <a href="#contacts">Контакты</a>
      </nav>
      <button className="btn btn-dark" onClick={onOpenModal}>Записаться на экскурсию</button>
    </header>
  );
}
