import React,{useState} from 'react';
import moment from "moment";
import logo from './logo.svg';
import './App.css';
import Calendar from "./components/Calendar/calendar";
import ModalBox from './components/Modal';

   
function App() {
  const [value,setValue] = useState(moment());
  return (<div>
    <Calendar value={value} onChange={setValue}  />
    <ModalBox content='hola este es el contenido' header='titulo'/>
    </div>
  );
}

export default App;
