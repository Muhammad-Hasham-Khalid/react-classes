import { useState } from "react";
import Child from "./Child";
import Time from './Time'
import Todos from './Todos'

function App () {
  // const [show, setShow] = useState(false);

  return (
    <>
    <Todos />
    {/* <Time /> */}
    {/* <button onClick={() => setShow(!show)}>Toggle</button>
    <div>
      {show ? <Child /> : null}
    </div> */}
    </>
  )
}

export default App;