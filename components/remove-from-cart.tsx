"use client";

import { useCartStore } from "@/store";
import { Product } from "@/types/productTypes";
import { Button } from "./ui/button";

const RemoveFromCart = ({ product }: { product: Product }) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const handleRemove = () => {
    console.log("Removing from cart: ", product);
    removeFromCart(product);
  };
  console.log("Product from remove:", product);
  return (
    <Button onClick={handleRemove} className="bg-walmart bg-walmart/50">
      -
    </Button>
  );
};

export default RemoveFromCart;
