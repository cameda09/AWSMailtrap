import logo from './logo.svg';
import React from 'react';
import './App.css';
import axios from 'axios';
function App() {
  fetch("https://mailtrap.io/api/v1/inboxes/653043/messages", {
    "method": "GET",
    "headers": {
        "Authorization": "Bearer a7281cf0ba20007ecf510de136c28c82",
        "Access-Control-Allow-Origin": "http://localhost:3000"
    }
});
// axios.get('https://mailtrap.io/api/v1/inboxes/653043/messages', {
//   headers: {
//     'Authorization': "Bearer a7281cf0ba20007ecf510de136c28c82"
//   }
// })
// .then((res) => {
//   console.log(res.data)
// })
// .catch((error) => {
//   console.error(error)
// })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React from scratch
        </a>
      </header>
    </div>
  );
}

export default App;
