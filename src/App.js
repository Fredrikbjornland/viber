import React from 'react';
import { Main } from './components/Main';
import { Header } from './components/Header'

//Run: auth-server: node authorization_code/app.js
//client: npm start

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Main />
      </div>

    </div>
  );
}

export default App;
