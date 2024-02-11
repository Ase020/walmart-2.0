import { Product } from "@/types/productTypes";

export const getCartTotal = (products: Product[]): string => {
  const total = products.reduce(
    (accumulator: number, currentProduct: Product) =>
      accumulator + currentProduct.price,
    0
  );

  return `
  ${
    //  total > 0
    //    ?
    total.toLocaleString("en-US", { style: "currency", currency: "USD" })
    //    :
    // total.toFixed(2)
  }`;
};

// ${products[0]?.currency}
