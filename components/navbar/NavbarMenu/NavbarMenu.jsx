"use client";
import { NavLink } from "@/components/links/NavLink";
import "./NavbarMenu.scss";
import Image from "next/image";

const NavbarMenu = ({ items = [], open = false, onClose = () => {} }) => {
  return open ? (
    <div className="navbar-menu">
      <div className="navbar-menu__close wrapper">
        <Image
          src="/close.svg"
          alt="close"
          width={24}
          height={24}
          onClick={() => onClose()}
        />
      </div>
      <div className="navbar-menu__items wrapper">
        {items?.map((item, i) => (
          <NavLink
            key={i}
            href={item.href}
            activeClassName="navbar__items__item--active"
            className="navbar__items__item"
            onClick={() => onClose()}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  ) : null;
};

export default NavbarMenu;
