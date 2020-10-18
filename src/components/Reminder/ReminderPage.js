import React, {Component} from 'react';
import Header from './Header'
import AddReminder from './AddReminder'
import ListReminders from './ListReminders';

class ReminderPage extends Component {

  state = {
    reminders : [],
    reminder : {
        id:0,
        title : '',
        date :'',
        time :'',
        city:'',
        country:'',
        color:''
  
    }
  }

  componentDidMount(){
    const remindersS = localStorage.getItem('reminders');
    if(remindersS){
      this.setState({
        reminders: JSON.parse(remindersS)
      })
    }
    
  }

  componentDidUpdate(){
    localStorage.setItem(
      'reminders',
      JSON.stringify(this.state.reminders)
    )
  }

  createReminder = (newReminder) =>{
   
    const reminders = [...this.state.reminders,newReminder]
    this.setState({
      reminders
    })
    this.props.setReminder(reminders);
  }
  updateReminder = (newReminder,id) =>{
    const actualReminders = [...this.state.reminders]

    let reminders = actualReminders.filter(reminder => reminder.id !== id)
   
    reminders = [...reminders,newReminder]
    this.setState({
      reminders
    })

    this.props.setReminder(reminders);
  }

  deleteReminder =id =>{

    const actualReminders = [...this.state.reminders]

    const reminders = actualReminders.filter(reminder => reminder.id !== id)
  
    this.setState({
      reminders
    })

    this.props.setReminder(reminders);
  }

  modifyReminder = id =>{

    const actualReminders = [...this.state.reminders]

    const reminderM = actualReminders.filter(reminder => reminder.id === id)
  
    console.log(reminderM[0]);

    this.reminder = reminderM;
    this.setState({
        reminder : reminderM[0]
      })
  }

  



render(){
  return (
    <div className="container">
      <Header
        title = {'Reminder'}
      />

      <div className="row">
        <div className="col-md-6">
          <AddReminder
            createReminder = {this.createReminder}
            reminder= {this.state.reminder}
            deleteReminder={this.deleteReminder}
            updateReminder={this.updateReminder}
          />
        </div>
        <div className="col-md-6">
            <ListReminders
              reminders = {this.state.reminders}
              deleteReminder={this.deleteReminder}
              modifyReminder={this.modifyReminder}
            />
        </div>
      </div>

    </div>
  );
}
  
}

export default ReminderPage;
