import { NavLink } from "react-router-dom";
import { Search } from "../search/Search";
import style from "./NavBar.module.css";
export const NavBar = () => {
  return (
    <div className={style.header}>
      <NavLink className={style.headerLink} to="/">
        Киносправочник
      </NavLink>
      <NavLink className={style.headerLink} to="/favorites">
        Избранное
      </NavLink>
      <Search />
    </div>
  );
};
