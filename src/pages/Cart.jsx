import React from "react";
import { CartContext} from "../App";
import { useContext } from "react";

function Cart() {
  const {cart, setCart} = useContext(CartContext)
  return (
    <div className="container">



      <table class="table">
  <thead>
    <tr>
      <th scope="col">image</th>
      <th scope="col">title</th>
      <th scope="col">Price</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
      {
        cart.map(item=>
          <tr key={item.id}>
      <td>
        <img width={50} src={item.image} alt="" />
      </td>
      <td>{item.title}</td>
      <td>{item.price}</td>
      <td>123</td>
    </tr>
        )
      }
    
    
  </tbody>
</table>
      
    </div>
  );
}

export default Cart;
