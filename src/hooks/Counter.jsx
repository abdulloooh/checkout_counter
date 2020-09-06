import React, { Fragment, useState, useEffect } from "react";
import useDocumentTitle from "./useDocumentTitle";
import "../App.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useDocumentTitle(`${name} has clicked ${count} times`);

  // useEffect(() => {
  //   document.title = `${name} has clicked ${count} times`;
  //   return () => {
  //     //cleanup;
  //   };
  // }, [name]);

  return (
    <main role="main" className="container">
      <br />
      <br />
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <h5>Counter with React Hooks</h5>
      <div>
        {name} has clicked {count} times
      </div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </main>
  );
};

export default Counter;

/*
We do not have "this.setState" in react functional components cos no inheritance from base Component class
useState returns two variables which can be get by array destructuring

Hooks can't be called in a conditional statement because hooks calling works with
the order of rendering in the component. 
THE ERROR statement === React Hooks must be called in the exact same order in every component render
because at every render/re-render, the order matters. Conditional statement will break this cos
Js is async and if twp conditions are true to gether or a condition true with another statement not
conditioned at all, ORDER will collapse

===
componentDidMount    ----------- after first render
componentDidUpdate   ----------- after every re-render due to state or props changes
componentWillUnmount ----------- clean up

useEffect hook replaced all of them

useEffect has two properties
1. A lambda function (nameless function to perform a task) that runs every time
2. (optional) dependency array that tells if a particular useEffect hook should be rendered or not
dependecy array does not take literal but actual changing variable

with no dependecy array, useEffect is always invoked on every render

For multiple useEffect, use dependency array to condition them bearing in mind that they are run orderly

for cleanup, you can assign a special useEffect at the end with a clean up related variable
*/
