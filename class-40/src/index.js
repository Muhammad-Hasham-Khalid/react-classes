import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalContextProvider } from './context/GlobalContext';
import { UserDisplay } from './UserDisplay';

const Application = () => {
  return (
    <GlobalContextProvider>
      <UserDisplay />
      {/* <App /> */}
    </GlobalContextProvider>
  );
};

ReactDOM.render(<Application />, document.getElementById('root'));

reportWebVitals();
