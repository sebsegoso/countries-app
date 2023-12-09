"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export const NavLink = ({
  href,
  exact,
  children,
  className = "",
  activeClassName = "active",
  ...props
}) => {
  const pathname = usePathname();
  const isActive = useMemo(
    () => (exact ? pathname === href : pathname.startsWith(href)),
    [exact, href, pathname]
  );

  return (
    <Link
      href={href}
      className={`${className} ${isActive ? activeClassName : ""}`}
      {...props}
    >
      {children}
    </Link>
  );
};
