import { useSelector } from "react-redux"
import { selectLaptop, type laptopTypes } from "../redux/reducers/laptopSlice"

const Laptops = () => {

    const laptops = useSelector(selectLaptop);

  return (
    <div>
        <h1>Laptops</h1>
        {laptops?.map((laptop : laptopTypes) => (
            <div key={laptop.id}>
                <h3>Price: {laptop.price}</h3>
                <p>CPU: {laptop.cpu}</p>
                <p>RAM: {laptop.ram}</p>
                <hr />
            </div>
        ))}
    </div>
  )
}

export default Laptops