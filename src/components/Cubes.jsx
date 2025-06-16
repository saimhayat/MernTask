import { useState } from "react";
import { Rating } from 'react-simple-star-rating'
export default function Cubes(props) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src={props.product.image}
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                src={props.product.image}
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{props.product.title}</p>
            <p className="subtitle is-6">@IOS</p>
            <br />
            <h4>
              <b>Price=</b>
              <u>{props.product.price}</u>
            </h4>
            <br />
            <button className="button">Add To Cart</button>
          </div>
        </div>

        <div className="content">
          {props.product.description}<a>@IOS</a>
          <br />
          <br />
          <h4>
            <b>Rating</b>
          </h4>
         <Rating readonly={true} allowFraction={true} initialValue={props.product.rating.rate} />
          </div>
        </div>
      </div>
  );
}
