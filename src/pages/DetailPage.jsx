import React, { useContext } from "react";
import { useParams } from "react-router-dom"; // Corrected this import in previous steps
import { products } from "../data";
import { CartContext } from "../App";

function DetailPage() {
  const { slug } = useParams();
  const { cart, setCart } = useContext(CartContext);

  const product = products.find((item) => item.slug === slug);

  // Add the product not found check back for robustness
  if (!product) {
    return <div>Product not found!</div>;
  }

  const handleAddToCart = () => {
    const itemExists = cart.find((item) => item.id === product.id);

    if (itemExists) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, qty: (item.qty || 1) + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart((prev) => [...prev, { ...product, qty: 1 }]);
    }
  };

  // Re-added the renderStars function, as you'll likely want it back
  const renderStars = (ratingValue) => {
    const fullStars = Math.floor(ratingValue);
    const halfStar = ratingValue % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} style={{ color: 'gold' }}>★</span>);
    }

    if (halfStar) {
      stars.push(<span key="half" style={{ color: 'gold' }}>★</span>); // Compromise for half-star visual
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} style={{ color: 'lightgray' }}>☆</span>);
    }

    return (
      <span className="star-rating">
        {stars}
      </span>
    );
  };

  return (
    <>
      <div className="product-image">
        <img src={product.image} alt={product.title} /> {/* Added alt attribute */}
      </div>
      <div className="detail-product">
        <h2>{product.title}</h2>
        <p style={{ fontSize: "1.2rem", margin: "10px 0" }}>
          Rating: {renderStars(product.rating.rate)} ({product.rating.rate})
          <span style={{ marginLeft: "5px", fontSize: "0.9em", color: "#666" }}>
            ({product.rating.count} reviews)
          </span>
        </p>
        <u>
          <p>{product.description}</p>
        </u>
      </div>
      <button
        onClick={handleAddToCart}
        className="add-to-cart-btn"
      >
        ADD TO CART
      </button>
    </>
  );
}

export default DetailPage; // <--- THIS IS THE MISSING LINE!