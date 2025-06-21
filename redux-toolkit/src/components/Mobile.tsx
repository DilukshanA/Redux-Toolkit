import { useDispatch, useSelector } from "react-redux"
import { addMobile, mobileSliceSelector } from "../redux/reducers/mobileSlice"
import { useRef } from "react";

const Mobile = () => {

    const nameRef = useRef<HTMLInputElement>(null);
    const priceRef = useRef<HTMLInputElement>(null);
    const storageRef = useRef<HTMLInputElement>(null);
    const ramRef = useRef<HTMLInputElement>(null);

    const name = nameRef.current?.value || "";
    const price = parseFloat(priceRef.current?.value || "0");
    const storage = storageRef.current?.value || "";
    const ram = ramRef.current?.value || "";

    const mobile = useSelector(mobileSliceSelector);
    const dispatch = useDispatch();
    console.log(mobile);

    const handleClick = () => {
        dispatch(
            addMobile(name, price, storage, ram)
        )
    }
  return (
    <div>
        <h1>Add Mobile</h1>
        <input ref={nameRef} type="text" placeholder="Mobile Name" />
        <input ref={priceRef} type="number" placeholder="price" />
        <input ref={storageRef} type="text" placeholder="storage" />
        <input ref={ramRef} type="text" placeholder="ram" />
        <button
            onClick={handleClick}
        >
            Add Mobile
        </button>

        <h2>Mobile List</h2>
        {mobile.map((item : any) => (
            <div key={item.id}>
                <h4>Mobile: {item.name}</h4>
                <p>Price: ${item.price}</p>
                <p>Storage: {item.spec.storage}</p>
                <p>RAM: {item.spec.ram}</p>
            </div>
        ))}
    </div>
  )
}

export default Mobile