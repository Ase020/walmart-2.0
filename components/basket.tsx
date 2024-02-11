"use client";

import React from "react";

import { useCartStore } from "@/store";
import { getCartTotal } from "@/lib/getCartTotal";
import { groupBySKU } from "@/lib/groupBySKU";
import Image from "next/image";
import AddToCart from "./add-to-cart";
import { Button } from "./ui/button";

const Basket = () => {
  const cart = useCartStore((state) => state.cart);
  const basketTotal = getCartTotal(cart);
  const grouped = groupBySKU(cart);

  return (
    <div className="max-w-7xl mx-auto">
      <ul className="space-y-2 divide-y-2">
        {Object.keys(grouped).map((sku) => {
          const item = grouped[sku][0];
          const total = getCartTotal(grouped[sku]);

          const { images, title, description } = item;

          return (
            <li
              className="p-5 my-2 flex items-center justify-between"
              key={sku}
            >
              {images[0] && (
                <Image src={images[0]} alt={title} width={100} height={100} />
              )}

              <div className="flex space-x-4 pl-4">
                <div>
                  <p className="line-clamp-2 font-bold">{title}</p>

                  <div
                    dangerouslySetInnerHTML={{ __html: description }}
                    className="line-clamp-2 font-light text-sm mt-2"
                  />
                </div>

                <div className="flex flex-col border rounded-md p-5">
                  <AddToCart product={item} />

                  <p className="mt-4 font-bold text-right">{total}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="flex flex-col justify-end p-5">
        <p className="font-bold text-2xl text-right text-walmart mb-5">
          Total: {basketTotal}
        </p>

        <Button className="mt-5 h-20 bg-walmart hover:bg-walmart/50">
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default Basket;
