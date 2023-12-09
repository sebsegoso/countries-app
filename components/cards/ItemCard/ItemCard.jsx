import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import "./ItemCard.scss";
const ItemCard = ({ item }) => {
  return item ? (
    <Link
      href={{
        pathname: `/countries/${item.cca2}`,
      }}
      className="item-card"
    >
      <article className="item-card__container">
        <Image
          src={item.flags?.svg}
          width={120}
          height={80}
          alt={item.flags?.alt || item.name?.common}
          className="item-card__image"
        />
        <h3 className="item-card__name">{item.name?.common}</h3>
      </article>
    </Link>
  ) : null;
};

import React from "react";

ItemCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ItemCard;
