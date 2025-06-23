import React from "react";
import { useParams } from "react-router";
import { products } from "../data";

function DetailPage() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug == slug);
  return <>
  <div className="product-image">
      <img src={product.image} alt="image" />
      </div>  
      <div className="detail-product">
        <h2>{product.title}</h2>
        <br />  
        <u>
          <p>{product.description}</p>
        </u>
        </div>
        <button
        style={{
          display: 'block', // Centers the button horizontally
          width: '800px', // Increases the button width
          padding: '15px 30px', // Adds padding inside the button
          margin: '100px auto', // Centers the button vertically and horizontally
          backgroundColor: '#61dafb', // Button background color
          color: 'white', // Button text color
          border: 'none', // No border
          borderRadius: '25px', // Rounded corners
          fontSize: '16px', // Text size
          fontWeight: 'bold', // Bold text
          cursor: 'pointer', // Pointer cursor on hover
          boxShadow: '0 4px 6px rgba(3, 3, 3, 0.1)', // Subtle shadow for 3D effect
          transition: 'all 0.3s ease', // Smooth transition for hover effects
        }}
        >ADD TO CART</button>
        </>
 ;
}

export default DetailPage;