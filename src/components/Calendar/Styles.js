
function isSelected(day,value){
    return value.isSame(day,"day");
}

export function beforeToday(day){
    return day.isBefore(new Date(),"day");
}

export function isToday(day){
    return day.isSame(new Date(),"day");
}

function isWeekend(day){
    return (day.day() === 6) || (day.day() === 0);
}
function isSameMonth(day,value){
    return day.month() === value.month();
}

export const numberdayStyles = (day,value) => {
    if (isSameMonth(day,value) && isWeekend(day)) return "activeWeekend";
    if (isSameMonth(day,value) && !isWeekend(day)) return "activeWeekday";
    if (!isSameMonth(day,value) && isWeekend(day)) return "inactiveWeekend";
    if (!isSameMonth(day,value) && !isWeekend(day)) return "inactiveWeekday";
    
    return ""
    
}

const dayStyles = (day,value) => {
    if (isSelected(day,value)) return "selected";
    if (isWeekend(day)) return "weekend";
    if (beforeToday(day)) return "before";
    
    if (isToday(day)) return "today";
    
    return ""
    
}
 
export default dayStyles;