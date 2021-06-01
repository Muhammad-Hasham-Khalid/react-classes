import { useState, useEffect } from "react";

function Child() {
  // useState
  const [timer, setTimer] = useState(0);
  const [effective, setEffective] = useState(0)

  // first render (must)
  
  useEffect(() => {
  // if dependency is given then only runs when dependency changes
    // console.log("Effect happened");
  }, [effective]); // -> dependency array

  useEffect(() => {
  // if no dependency is given then on every render
    console.log('Will run on every render')

    return () => {
      // clean up
      console.log('cleanup function')
    }
  })

  useEffect(() => {
  // if empty dependency array is provided it will only run once (on first render i.e. mount)
    // console.log('only run once');

    // return () => {
    //   console.log('component unmounted');
    // }
  }, [])

  return (
    <>
      <h1>timer: {timer}</h1>
      <h1>effective: {effective}</h1>
      <button onClick={() => setTimer(timer + 1)}>Change Timer</button>
      <br />
      <button onClick={() => setEffective(effective + 1)}>Run Effect</button>
    </>
  );
}

export default Child;
