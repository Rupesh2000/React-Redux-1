import React from "react";
import { useSelector } from "react-redux";

function Counter() {
  const count = useSelector((state) => state);
  return <div>{count}</div>;
}
export default Counter;
