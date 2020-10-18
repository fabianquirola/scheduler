import React,{useState,useEffect} from 'react';
import moment from "moment";
import logo from './logo.svg';
import './App.css';
import Calendar from "./components/Calendar/calendar";
import ModalBox from './components/Modal';
import ReminderPage from "./components/Reminder/ReminderPage";
   
function App() {
  const [value,setValue] = useState(moment());
  const [reminder,setReminder] = useState();
  
  useEffect(()=>{
    setValue(moment());
},[reminder])

  
  return (<div>
    <Calendar value={value} onChange={setValue}  />
<ReminderPage setReminder={setReminder}/>
    </div>
  );
}

export default App;
