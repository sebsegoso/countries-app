import Link from "next/link";
import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  const items = [
    { label: "About us", href: "/about" },
    { label: "Contact us", href: "/contact" },
  ];
  return (
    <nav className={"navbar"}>
      <div className={"navbar__wrapper wrapper"}>
        <Link href={"/"}>🌎WorldApp</Link>
        <div className="navbar__items">
          {items?.map((item, i) => (
            <Link key={i} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
