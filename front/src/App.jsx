import "./style.css";
import logo from "./assets/logo.svg";

import React, { useEffect, useState } from 'react';

const App = () => {
   const [message, setMessage] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/');
      const data = await response.json();
      setMessage(data.message);
    }
    fetchData();
  }, []);

  return (
    <div className='container'>
      <h1>{message}</h1>
      <img src={logo} alt="Smartmake Logo" id="logo"/>
    </div>
  );
};
export default App;
