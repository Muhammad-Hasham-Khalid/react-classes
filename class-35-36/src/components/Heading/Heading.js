// import React from 'react' // Needed for older versions of react
import './Heading.css';

// functional component
// props: properties
export function Heading({ name, isOlder, handleClick, someData }) {
  // !PROPS are immutable, you should not change them directly
  // you can give default values to props ({ isOlder = false }) (Javascript way)
  // destructuring the props: ({ name })
  // use curly braces to use javascript expressions/variables inside jsx

  // name = name.toUpperCase(); // !This is wrong
  const uppercaseName = name.toUpperCase(); // way 1

  return (
    <>
      <h1>Hello {name.toUpperCase()}</h1>
      {/* Conditional rendering jsx (if else) */}
      <p>{isOlder ? 'YES' : 'NO'}</p>
      {/* Conditional rendering jsx (if) */}
      {isOlder && <p>IS OLDER</p>}
    </>
  ); // jsx
}

// providing default props for a component (React way)
Heading.defaultProps = {
  name: 'John Doe',
  isOlder: false,
  handleClick: () => {
    console.log('Hello world');
  },
  someData: {
    name: 'Hello',
    date: new Date(),
  },
};
