"use client";
import Link from "next/link";
import React, { useState } from "react";
import "./Navbar.scss";
import { NavLink } from "../../links/NavLink";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import Image from "next/image";

const Navbar = () => {
  const items = [
    { label: "🔎 Search", href: "/search" },
    { label: "About us", href: "/about" },
    { label: "Contact us", href: "/contact" },
  ];

  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className={`navbar ${openMenu ? "navbar--open" : ""}`}>
      <div className={"navbar__wrapper wrapper"}>
        <Link href={"/"}>🌎CountriesApp</Link>

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
        <Image
          src="/burger.svg"
          width={24}
          height={24}
          alt="Burger menu"
          className="navbar__burger"
          onClick={() => setOpenMenu(true)}
        />
      </div>
      <NavbarMenu
        open={openMenu}
        items={items}
        onClose={() => setOpenMenu(false)}
      />
    </nav>
  );
};

export default Navbar;
