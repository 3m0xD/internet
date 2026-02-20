import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav>
      <Link to="/">Главная</Link> | <Link to="/about">О нас</Link> |{" "}
      <Link to="/gallery">Галерея</Link> | <Link to="/registr">Войти</Link>
    </nav>
  );
};
