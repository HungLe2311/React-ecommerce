import React, { useEffect, useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log('effect')
  }, [count, count2])
  
  return (
    <div>
      <p>You clicked {count} - {count2} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setCount2(count2 + 1)}>
        Click me 2
      </button>
    </div>
  );
}

export default Example;