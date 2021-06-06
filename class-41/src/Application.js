import { useRef, useState } from 'react';
import { MyForm } from './components/MyForm';

export const Application = () => {
  const [name, setName] = useState('Test');
  let data = 'Software Engineer';

  // ref
  // no rerender occurs on changing the value
  // and values dont reset on rerender

  const inputRef = useRef(null);

  return (
    <div
      style={{
        fontFamily: 'sans-serif',
      }}
    >
      {/* <input type="text" id="test" ref={inputRef} />
      <h2>Name : {name}</h2>
      <h2>Data : {data}</h2>
      <button
        onClick={() => {
          data = 'Electrical Engineer';
          setName('something');
          // console.log(inputRef.current);
        }}
      >
        UPDATE
      </button> */}
      <MyForm />
    </div>
  );
};

// useRef
// form handling in react
// custom hooks
// class based components
