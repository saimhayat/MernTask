import React from "react";
import Navbar from "../components/Navbar";
import { products } from "../data";
import Cubes from "../components/Cubes";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          {products.map((products) => (
            <div className="col-md-4">
              <Cubes product={products} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
