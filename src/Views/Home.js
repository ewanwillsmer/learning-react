import React from "react";
import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";
import { useAxiosGet } from "../Hooks/HttpRequest";

export default function Home() {
  const url = `https://61ee53dfd593d20017dbad68.mockapi.io/api/v1/products?page=1&limit=10`;

  let products = useAxiosGet(url);
  let content = null;

  if (products.error) {
    content = <p>There was an error. Please refresh or try again later.</p>;
  }

  if (products.loading) {
    content = <Loader />;
  }

  if (products.data) {
    content = products.data.map((product) => (
      <div>
        <ProductCard key={product.id} product={product} />
      </div>
    ));
  }
  return (
    <div>
      <h1 className="font-bold text-2xl py-2">Best Sellers</h1>
      {content}
    </div>
  );
}
