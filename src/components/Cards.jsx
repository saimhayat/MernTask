import { useState } from "react";
import { Link } from "react-router-dom"; // Note: Changed 'react-router' to 'react-router-dom'
import { Rating } from "react-simple-star-rating";
import Products from "../pages/Products";

export default function Cards(props) {
  function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  }

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={props.product.image} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src={props.product.image} alt="Placeholder image" />
            </figure>
          </div>
          <div className="media-content">
            <Link to={`/product/${props.product.slug}`}>
              <p className="title is-4">{props.product.title}</p>
            </Link>
            <p className="subtitle is-6"></p>
            <br />
            <h4>
              <b>PKr. </b>
              <b>{props.product.price}</b>
            </h4>
            <br />
            <button className="button">Add To Cart</button>
          </div>
        </div>

        <div className="content">
          {truncateText(props.product.description, 100)}
          <br />
          <br />
          <h4>
            <b>Rating</b>
          </h4>
          <Rating
            readonly={true}
            allowFraction={true}
            initialValue={props.product.rating.rate}
          />
        </div>
      </div>
    </div>
  );
}