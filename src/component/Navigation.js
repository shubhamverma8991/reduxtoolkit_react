import React from "react";
import { useSelector } from "react-redux";

export default function Navigation() {
  const count = useSelector((state) => state.counter.value);
  return (
    <div style={{ border: "1px solid white", padding: "10px", borderRadius: "10px" }}>
      Redux Toolkit
      <br />
      Count : {count}
    </div>
  );
}
