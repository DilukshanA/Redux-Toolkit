import { useSelector } from "react-redux"
import { selectCart } from "../redux/reducers/cartSlice"
import type { laptopTypes } from "../redux/reducers/laptopSlice";

const Cart = () => {

    const cartItems = useSelector(selectCart);
    console.log(cartItems ? cartItems : "No items in cart");
  return (
    <div>
        <h1>Cart</h1>
        {cartItems.map((item : laptopTypes) => (
            <div key={item.id}>
                <h3>Price: {item.price}</h3>
                <p>CPU: {item.cpu}</p>
                <p>RAM: {item.ram}</p>
                <hr />
            </div>
        ))}
    </div>
  )
}

export default Cart