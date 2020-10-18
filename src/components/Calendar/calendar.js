import React,{useState,useEffect} from 'react';
import moment from 'moment';
import "../../style.css";
import buildCalendar from "./build";
import dayStyles,{beforeToday,numberdayStyles,isToday} from "./styles";
import Header from "./header"
import ListRemindersResume from "./ListRemindersResume";

const Calendar = ({value,onChange}) => {
    const [calendar,setCalendar] = useState([]);

    const [icon,setIcon] = useState([]);

    const [reminders,setReminders] = useState([]);

    const filterRemainders = (day) =>{
      
        const remindersD = reminders.filter(reminder => moment(reminder.datetime).isSame(day,'day'))
        //console.log(remindersD);
        return remindersD;
    }


    
    useEffect(()=>{
        setCalendar(buildCalendar(value));
        setIcon(consultApi());
        const remindersS = localStorage.getItem('reminders');
        console.log(remindersS);
        if(remindersS){
            setReminders(JSON.parse(remindersS)
          )
        }
    },[value])




    
    const consultApi = async (city='Quito',country='EC') =>{
        
        const appId='40823c644eafed4a6c502b7b934a10e7';
        const url= `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`
      
        const response = await fetch(url);
        const result = await response.json();
      
       
        const {icon,main} = result.weather[0];
        
        const ricon = `<img src='http://openweathermap.org/img/wn/${icon}@2x.png' />`;
       console.log(ricon);
        return ricon;
      
      }

      const verifyWheather = function (day){
          if (isToday(day)){
             return consultApi();
          }
          //return '';
      }

    
    return (<div className="calendar">

        <Header 
        value={value} 
        setValue={onChange}/>
        <div className="body">
            <div className="day-names">
{["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].map(d=><div className="week">{d}</div>)}
            </div>
       {calendar.map(week=>(
           <div>
               {week.map(day=>(
                   <div className="day"
                   onClick={()=>!beforeToday(day) && onChange(day)}>
                       <div
                       className={dayStyles(day,value)}>
                        <div className={numberdayStyles(day,value)}>
                        {day.format("D").toString()}
                        <ListRemindersResume
                            reminders = {filterRemainders(day)}
                            //deleteReminder={this.deleteReminder}
                            />
                      
                       </div>
                            
                        </div>
                       
                   </div>
               ))}
           </div>
       ))}
       </div>
    </div>  );
}
 
export default Calendar;