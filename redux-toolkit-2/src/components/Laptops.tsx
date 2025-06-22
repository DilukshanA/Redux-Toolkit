import { useDispatch, useSelector } from "react-redux"
import { selectLaptop, type laptopTypes } from "../redux/reducers/laptopSlice"
import { addItemToCart } from "../redux/reducers/cartSlice";

const Laptops = () => {

    const laptops = useSelector(selectLaptop);

    const dispatch = useDispatch();

  return (
    <div>
        <h1>Laptops</h1>
        {laptops?.map((laptop : laptopTypes) => (
            <div key={laptop.id}>
                <h3>Price: {laptop.price}</h3>
                <p>CPU: {laptop.cpu}</p>
                <p>RAM: {laptop.ram}</p>
                <button
                    onClick={() => dispatch(addItemToCart({
                        id: laptop.id,
                        price: laptop.price,
                        cpu: laptop.cpu,
                        ram: laptop.ram
                    }
                    ))}
                >
                    Add to Cart
                </button>
                <hr />
            </div>
        ))}
    </div>
  )
}

export default Laptops