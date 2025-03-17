import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment, incrementByAmount, reset } from "./features/counter/counterSlice";
import { useState } from "react";
import Navigation from "./component/Navigation";
import UserDetails from "./component/UserDetail";
import Todo from "./component/Todo";

function App() {
  const count = useSelector((state) => state.counter.value);
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  function handleIncrement() {
    console.log("Increment");
    dispatch(increment());
  }

  function handleDecrement() {
    console.log("Decrement");
    dispatch(decrement());
  }

  function handleReset() {
    console.log("Reset");
    dispatch(reset());
  }

  function handleIncrementBy() {
    dispatch(incrementByAmount(amount));
  }

  return (
    <>
      <Navigation />
      <div className="container">
        <button onClick={handleIncrement}>+</button>
        <div className="display">Count : {count}</div>
        <button onClick={handleDecrement}>-</button>
        <br />
        <br />
        <button onClick={handleReset}>Reset</button>
        <br />
        <br />
        <input type="text" name="count" id="count" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <button onClick={handleIncrementBy}>Increment By </button>

        <br />
        <br />
        <UserDetails />

        <br />
        <br />
        <Todo />
      </div>
    </>
  );
}

export default App;
