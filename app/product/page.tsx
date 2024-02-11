import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

import { fetchProduct } from "@/lib/fetchProduct";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Props = {
  searchParams: {
    url: string;
  };
};

const Product = async ({ searchParams: { url } }: Props) => {
  const product = await fetchProduct(url);

  if (!product) return notFound();

  const {
    title,
    images,
    breadcrumbs,
    description,
    rating,
    currency,
    price,
    specifications,
  } = product;

  return (
    <div className="p-4 lg:p-10 flex flex-col lg:flex-row w-full ">
      <div className="hidden lg:inline space-y-4">
        {images.map((image, i) => (
          <Image
            key={i}
            src={image}
            alt={`${product.title}${i}`}
            width={90}
            height={90}
            className="border rounded-sm"
          />
        ))}
      </div>

      <Carousel
        opts={{
          loop: true,
        }}
        className="w-3/5 mb-10 lg:mb-0 lg:w-full self-start flex items-center max-w-xl mx-auto lg:mx-20"
      >
        <CarouselContent>
          {images.map((image, i) => (
            <CarouselItem key={i}>
              <div className="p-1">
                <div className="flex aspect-square items-center justify-center p-2 relative">
                  <Image
                    src={image}
                    alt={`${title}${i}`}
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="flex-1 border rounded-md w-full p-5 space-y-5">
        <h1 className="text-3xl font-bold">{title}</h1>

        <div className="space-x-2">
          {breadcrumbs.map((breadcrumb, i) => (
            <Badge
              key={breadcrumb + i}
              className={breadcrumb}
              variant="outline"
            >
              {breadcrumb}
            </Badge>
          ))}
        </div>

        <div
          className="py-5"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        {rating && (
          <p className="text-yellow-500 text-sm">
            {rating.rating}★
            <span className="text-gray-400 ml-2">({rating.count})</span>
          </p>
        )}

        <p className="text-2xl font-bold mt-2">
          {currency}{" "}
          {price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>

        {/* add to cart */}

        <hr />

        <h2 className="text-xl font-bold pt10">Specifications</h2>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">Specification</TableHead>
              <TableHead className="">Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {specifications.map(({ key, value }) => (
              <TableRow key={key}>
                <TableCell className="font-medium">{key}</TableCell>
                <TableCell className="">{value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Product;
