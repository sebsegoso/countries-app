import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import "./ItemCard.scss";
const ItemCard = ({ item }) => {
  return item ? (
    <Link
      href={{
        pathname: `/countries/${item.cca2}`,
        query: { from: "/" },
      }}
      className="item-card"
    >
      <article className="item-card__container">
        <Image
          src={item.flags?.svg}
          width={150}
          height={100}
          alt={item.flags?.alt}
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
