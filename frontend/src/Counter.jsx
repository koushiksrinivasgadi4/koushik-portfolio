import React, { useState } from 'react';

function Counter() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>My Counter</h1>

      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default Counter;