import React from "react";
import s from "./Header.module.sass";
import header from "../../assets/header.jpg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={s.header}>
      <NavLink to={"/"}><img src={header} /></NavLink>
      
    </div>
  );
};

export default Header;
