import React, {Component} from 'react';
import Reminder from './Reminder';
import PropTypes from 'prop-types';


class ListReminders extends Component {
    state = {  }
    render() { 
        const reminders = this.props.reminders;

        const mensaje = Object.keys(reminders).length === 0 ? 'there are no reminders':'Reminders Here';
        return ( 
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center">{mensaje}</h2>
                    <div className="lista-citas">
                        {Object.keys(this.props.reminders).map(reminder => (
                            <Reminder
                                key={reminder}
                                info={this.props.reminders[reminder]}
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