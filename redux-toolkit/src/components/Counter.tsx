import { useDispatch, useSelector } from "react-redux"
import { addLaptop, laptopSliceSelector, removeLaptop } from "../redux/reducers/laptopSlice";
import { addComputer, computerSliceSelector, removeComputer } from "../redux/reducers/computerSlice";

const Counter = () => {

    const laptopCount = useSelector(laptopSliceSelector);
    const computerCount = useSelector(computerSliceSelector);
    const dispatch = useDispatch();

  return (
    <div>
        <div>
            <h1>Laptop Count : {laptopCount}</h1>
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
        <div>
            <h1>Computer Count : {computerCount}</h1>
            <button
                onClick={() => dispatch(addComputer(1))}
            >
                Increment
            </button>
            <button
                onClick={()=> dispatch(removeComputer(1))}
            >
                Decrement
            </button>
        </div>
    </div>
  )
}

export default Counter