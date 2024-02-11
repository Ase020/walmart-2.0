import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Organic } from "@/types/searchTypes";
import { Badge } from "./ui/badge";

const ProductCard = ({ product }: { product: Organic }) => {
  const { url, image, title, price, badge, rating } = product;
  return (
    <Link
      href={{
        pathname: "/product",
        query: { url: url },
      }}
      className="flex flex-col relative border rounded-md h-full p-5"
    >
      <Image
        src={image}
        alt={title}
        height={200}
        width={200}
        className="mx-auto"
      />

      <p className="text-xl font-bold">
        {price?.currency}
        {price?.price}
      </p>

      {badge && <Badge className="w-fit absolute top-2 right-2">{badge}</Badge>}

      <p className="font-light">{title}</p>

      {rating && (
        <p className="text-yellow-500 text-sm">
          {rating.rating}★
          <span className="text-gray-400 ml-2">({rating.count})</span>
        </p>
      )}
    </Link>
  );
};

export default ProductCard;
