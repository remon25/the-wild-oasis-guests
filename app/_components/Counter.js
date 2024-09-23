"use client";

import { useState } from "react";

export default function Counter({users}) {
  const [count, setCount] = useState(0);
  console.log(users)

  return (
    <div>
      <p>There are {users.length} users</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount((c) => c + 1)}>Click me</button>
    </div>
  );
}
