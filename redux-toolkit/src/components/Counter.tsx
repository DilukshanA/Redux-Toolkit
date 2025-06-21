import { useDispatch, useSelector } from "react-redux"

const Counter = () => {

    const count = useSelector((state: number) => state);
    const dispatch = useDispatch();
  return (
    <div>
        <h1>Count</h1>
        <button
        onClick={()=> dispatch(
            {
                type: "INCREMENT"
            }
        )}
        >
            Increment
        </button>
        <button>
            Decrement
        </button>
    </div>
  )
}

export default Counter