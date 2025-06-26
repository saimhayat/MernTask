import React from "react";
import { CartContext} from "../App";
import { useContext } from "react";

function Cart() {
  const {cart, setCart} = useContext(CartContext)
  const handleClearCart = ()=>{
    setCart([])
  }

  const handleDelete = (id)=>{
    const updatedCart = cart.filter(c=>c.id != id)
    setCart(updatedCart)
  }
  return (
    <div className="container">



      <table class="table">
  <thead>
    <tr>
      <th scope="col">image</th>
      <th scope="col">title</th>
      <th scope="col">Price</th>
      <th scope="col">Remove</th>
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
      <td>
        <button className="btn btn-danger" onClick={()=>handleDelete(item.id)}><i class="bi bi-trash3"></i></button>
        </td>
    </tr>
        )
      }
    
    
  </tbody>
</table>
<button className="btn btn-danger" onClick={handleClearCart}>Clear Cart</button>
      
    </div>
  );
}

export default Cart;
