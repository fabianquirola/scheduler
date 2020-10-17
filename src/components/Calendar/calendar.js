import React,{useState,useEffect} from 'react';
import moment from 'moment';
import "../../style.css";
import buildCalendar from "./build";
import dayStyles,{beforeToday,numberdayStyles} from "./styles";
import Header from "./header"

const Calendar = ({value,onChange}) => {
    const [calendar,setCalendar] = useState([]);


    
    useEffect(()=>{
        setCalendar(buildCalendar(value));
    },[value])

    
    

    
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