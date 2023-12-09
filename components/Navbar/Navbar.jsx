import Link from "next/link";
import React from "react";
import "./Navbar.scss";
import { NavLink } from "../links/NavLink";

const Navbar = () => {
  const items = [
    { label: "🔎 Search", href: "/search" },
    { label: "About us", href: "/about" },
    { label: "Contact us", href: "/contact" },
  ];
  return (
    <nav className={"navbar"}>
      <div className={"navbar__wrapper wrapper"}>
        <Link href={"/"}>🌎WorldApp</Link>

        <div className="navbar__items">
          {items?.map((item, i) => (
            <NavLink
              key={i}
              href={item.href}
              activeClassName="navbar__items__item--active"
              className="navbar__items__item"
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
