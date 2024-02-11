"use client";

import { useCartStore } from "@/store";
import { Product } from "@/types/productTypes";
import { Button } from "./ui/button";
import RemoveFromCart from "./remove-from-cart";

const AddToCart = ({ product }: { product: Product }) => {
  const [cart, addToCart] = useCartStore((state) => [
    state.cart,
    state.addToCart,
  ]);

  const howManyInCart = cart.filter(
    (item: Product) => item.meta.sku === product.meta.sku
  ).length;

  const handleAdd = () => {
    addToCart(product);
  };

  if (howManyInCart > 0) {
    return (
      <div className="flex items-center space-x-5">
        <RemoveFromCart product={product} />
        <span>{howManyInCart}</span>

        <Button className="bg-walmart hover:bg-walmart/50" onClick={handleAdd}>
          +
        </Button>
      </div>
    );
  }
  return (
    <Button onClick={handleAdd} className="bg-walmart hover:bg-walmart/50">
      AddToCart
    </Button>
  );
};

export default AddToCart;
