import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons from react-icons

import Logo from "@img/logo.png";
import s from "./header.module.scss";

export const Header = () => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <header className={s.header}>
      <a href="#">
        <img src={Logo} alt="Logo Apeperia" />
      </a>
      <div className={s.hamburger} onClick={toggleMenu}>
        {showMenu ? <FaTimes /> : <FaBars />}
      </div>
      <nav className={`${s.menu} ${showMenu ? s.show : ""}`}>
        <ul className={s.menu__list}>
          <li>
            <a href="#">sobre</a>
          </li>
          <li>
            <a href="#">planos</a>
          </li>
          <li>
            <a href="#">blog</a>
          </li>
          <li>
            <a href="#">contato</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}