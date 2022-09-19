import { useState, useEffect } from 'react';
import axios from 'axios'

import logo from './logo.svg';
import './App.css';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers(){
      const res = await axios.get('http://localhost:7000');
      setUsers(res.data.data);
    }

    fetchUsers();
  },[]);

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
          Learn React JS
        </a>
      </header>
      <div>
        {users.length > 0 ? users.map((d) => {
          return <p>{d.name} - {d.phone}</p>
        }) : 'No users...'}
      </div>
    </div>
  );
}

export default App;
