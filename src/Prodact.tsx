/** @format */

import { FC } from "react";
import useSWR from "swr";
import { useEffect, useState } from "react";

const Prodact: FC = () => {
  const { data } = useSWR(`https://fakestoreapi.com/products/`);

  return (
    <>
      {(data as []).map((item) => (
        <div className="user" key={item.id}>
          <figure className="user__figure">
            <img src={item.image} alt={item.title} className="user--img" />
            <figcaption className="user--title">{item.title}</figcaption>
          </figure>
        </div>
      ))}
    </>
  );
};

export default Prodact;
