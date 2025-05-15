import { useDispatch, useSelector } from 'react-redux';
import './App.css'

function App() {

  const number = useSelector((store) => store.number);
  const dispatch = useDispatch();
  console.log(number);

  return (
    <>
    <div>
      <h1>Redux State</h1>
      <div>
        <button onClick={() => {
          dispatch({
            type: 'increment',
            payload: 5,
          });
        }}>
          Increment
        </button>

        <button onClick={() => {
          dispatch({
            type: 'decrement',
            payload: 2,
          })
        }}>
          Decrement
        </button>
      </div>
      <div>
        <h2>Number : {number}</h2>
      </div>
      {/* Readme */}
      <div>
        <span>* Redux</span>
        <br/>
        <span>*store</span>
        <br/>
        <span>*Reducer</span>
        <br/>
        <span>*useSelector</span>
        <br/>
        <span>*useDispatch</span>
      </div>
    </div>
    </>
  )
}

export default App
