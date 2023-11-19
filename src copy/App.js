import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
function App() {
  const [data, setData] = useState([])
  const [inputName, setInputName] = useState("")
  const [sensor, setSensor] = useState(false)
  // console.log(inputName)
  useEffect(() => {

    const getApi = async () => {
      await axios.get("http://localhost:5001/olish")
        .then(res => setData(res.data))
        .catch(error => console.log(error))
    }
    getApi()
  }, [sensor])



  const formFunction = async (e) => {
    e.preventDefault()
    let obj = {
      id: uuidv4(),
      name: inputName
    }
    await axios.post("http://localhost:5001/post", obj)
      .then(res => {
        console.log(res)
        setSensor(true)
        setTimeout(() => {
          setSensor(false)
        }, 1000);
      })
      .catch(error => console.log(error))

  }


  return (
    <div className="App">
      <h1>Hello</h1>

      <h1>Yangi Malumot Jonatish</h1>
      <form action="" onSubmit={formFunction}>
        <input type="text" placeholder='name...' onChange={(e) => setInputName(e.target.value)} />

        <button>Jonatish</button>

      </form>

      <ul>
        {data.map(el => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
