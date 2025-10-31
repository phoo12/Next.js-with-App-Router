"use client";
import { useState } from "react";

export default function Counter({ users }) {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <p className="text-lg mb-4">There are {users.length} users</p>
      <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>
    </div>
  );
}
