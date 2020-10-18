import React, {Component} from 'react';
import Reminder from './Reminder';
import PropTypes from 'prop-types';
import moment from 'moment';

class ListReminders extends Component {

    
    state = {  }

    deleteAllReminder = (rems) =>{
        console.log('click');
        this.props.deleteAllReminder(rems)
    }
    render() { 
        //const reminders = this.props.reminders;

        const value = this.props.value;

       

        const reminders = this.props.reminders.filter(reminder => moment(reminder.datetime).isSame(value,'day')).sort(compare);

        function compare (a,b){
            if(moment(a.datetime) < moment(b.datetime)){
                return -1
            }
            if(moment(a.datetime) > moment(b.datetime)){
                return 1
            }
            return 0
        }

        const btn =  Object.keys(reminders).length === 0 ?'':<button className="btn btn-danger" onClick={this.deleteAllReminder}>Delete All </button>;

        const mensaje = Object.keys(reminders).length === 0 ? 'There are no reminders':'Reminders of '+ value.format("D - M - Y").toString()    ;
        return ( 
            <div className="card mt-5">
                <div className="card-body">
        <h3 className="card-title text-center">{mensaje} {btn}</h3>
                    <div className="lista-citas">
                        {Object.keys(reminders).map(reminder => (
                            <Reminder
                                key={reminder}
                                info={reminders[reminder]}
                                deleteReminder= {this.props.deleteReminder}
                                modifyReminder= {this.props.modifyReminder}
                            />
                        ))}
                    
                    </div>
                    
                </div>
            </div>
         );
    }
}

ListReminders.propTypes ={
    reminders : PropTypes.array.isRequired,
    deleteReminder : PropTypes.func.isRequired

}
 
export default ListReminders;