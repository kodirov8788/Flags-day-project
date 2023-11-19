import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';

// import MovieList from './MovieList';
function App() {



  return (
    <div className="App">
      <h1>Hello</h1>
      <ul>
        <li><a href="home">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="contact">contact</a></li>
      </ul>
      <Outlet />

      <h1>Yangi Malumot Jonatish</h1>
    </div>
  );
}

export default App;
