import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../features/todo/todoSlice";

export default function Todo() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todo);
  console.log("state ", data);

  const fetch = async () => {
    dispatch(fetchTodos());
  };

  if (data.isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <button onClick={fetch}>Fetch Data</button>
      {data.data && data.data.map((item) => <div key={item.id}>{item.title}</div>)}
    </div>
  );
}
