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

  console.log("Cart: ", cart);

  const howManyInCart = cart.filter(
    (item: Product) => item.meta.sku === product.meta.sku
  ).length;

  console.log("How many in cart: ", howManyInCart);

  const handleAdd = () => {
    console.log("Adding to cart", product);
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
  return <Button onClick={handleAdd}>AddToCart</Button>;
};

export default AddToCart;
