"use client";
import { NavLink } from "@/components/links/NavLink";
import "./NavbarMenu.scss";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: "100%" },
  enter: { opacity: 1, x: 0 },
};
const NavbarMenu = ({ items = [], open = false, onClose = () => {} }) => {
  return (
    <AnimatePresence mode="wait">
      {open ? (
        <motion.div
          key={"menu"}
          variants={variants}
          initial="hidden"
          exit="hidden"
          animate="enter"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="navbar-menu"
        >
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
              <motion.div
                variants={{ initial: { opacity: 0 }, animate: { opacity: 1 } }}
                animate="animate"
                initial="initial"
                exit="initial"
                key={i}
                transition={{ delay: i / 10 }}
              >
                <NavLink
                  href={item.href}
                  activeClassName="navbar__items__item--active"
                  className="navbar__items__item"
                  onClick={() => onClose()}
                >
                  {item.label}
                </NavLink>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default NavbarMenu;
