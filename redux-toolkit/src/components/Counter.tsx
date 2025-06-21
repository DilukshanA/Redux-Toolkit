import { useDispatch, useSelector } from "react-redux"
import { addLaptop, removeLaptop } from "../redux/reducers/laptopSlice";

const Counter = () => {

    const laptopCount = useSelector((store: any) => store.laptopSlice);
    const computerCount = useSelector((store: any) => store.computerSlice);
    const dispatch = useDispatch();
    console.log("laptop :", laptopCount)
    console.log("comput :", computerCount)
  return (
    <div>
        <h1>Laptop Count : {laptopCount.count}</h1>
        <button
            onClick={() => dispatch(addLaptop(1))}
        >
            Increment
        </button>
        <button
            onClick={()=> dispatch(removeLaptop(1))}
        >
            Decrement
        </button>
    </div>
  )
}

export default Counter