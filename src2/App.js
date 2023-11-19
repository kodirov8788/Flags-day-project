import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { setAuthToken } from './state';
function App() {
  const [data, setData] = useState([])
  const [inputName, setInputName] = useState("")

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Assuming you make an API call to authenticate the user
    // and receive a token in response
    const authToken = 'your_received_token';

    // Set the authentication token in the cookie
    setAuthToken(authToken);

    // Optionally, you might want to redirect the user after login
    // history.push('/dashboard');
  };


  return (
    <div className="App">
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;
