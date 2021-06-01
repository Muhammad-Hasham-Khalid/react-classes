import { useContext } from 'react';
import { GlobalContext } from './context/GlobalContext';

function Child() {
  const { theme, setTheme } = useContext(GlobalContext);

  return (
    <div>
      <button
        onClick={() => {
          if (theme === 'dark') {
            setTheme('light');
          } else {
            setTheme('dark');
          }
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

function App() {
  const { theme } = useContext(GlobalContext);
  return (
    <>
      {theme}
      <Child />
    </>
  );
}

export default App;
