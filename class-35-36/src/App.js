import { Heading } from './components/Heading/Heading';

// ? single page applications
// ? component based library

/**
 * React fragment:
 * <></>
 * or
 * <React.Fragment></React.Fragment>
 */

export const App = () => {
  const names = ['John', 'Jay', 'Hasham', 'Shahzaib', 'Abdul Rafay'];

  // <>
  //   <Heading name="Abdul Rafay" isOlder={true} />
  //   <Heading name="Shahzaib" />
  //   <Heading />
  //   <Heading />
  //   <Heading name="Maaz" />
  // </>

  return (
    <>
      {/* Looping in jsx */}
      {names.map((name, idx) => {
        return (
          <Heading
            name={name}
            isOlder={idx % 2 === 0}
            handleClick={() => {
              console.log('nice');
            }}
          />
        );
      })}
    </>
  );
};
