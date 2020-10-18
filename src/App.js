import React, { useState, useEffect } from "react";
import moment from "moment";
//import "./App.css";
import Calendar from "./components/Calendar/Calendar";
import ReminderPage from "./components/Reminder/ReminderPage";
import WeatherPage from "./components/Weather/WeatherPage";
import Header from "./components/shared/Header";

function App() {
  const [value, setValue] = useState(moment());
  const [reminder, setReminder] = useState();

  useEffect(() => {
    setValue(moment());
  }, [reminder]);

  return (
    <div>
      <Header title="Calendar"/>
      <Calendar value={value} onChange={setValue}  key={value}/>
      <WeatherPage />
      <ReminderPage
        setReminder={setReminder}
        setValue={setValue}
        value={value}
      />
    </div>
  );
}

export default App;
