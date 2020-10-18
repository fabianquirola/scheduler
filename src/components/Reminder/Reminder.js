import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

class Reminder extends Component {
    state = {  }

    deleteReminder = () =>{
        this.props.deleteReminder(this.props.info.id)
    }
    modifyReminder = () =>{
        this.props.modifyReminder(this.props.info.id)
    }
    render() { 
        const {date, time,title,city,color}= this.props.info;
        return ( 
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="mt-0"><FiberManualRecordIcon style={{ color: color}} />{title}</h3>
                    <p className="card-text"><span>City:</span> {city}</p>
                    <p className="card-text"><span>Date:</span> {date}</p>
                    <p className="card-text"><span>Time:</span> {time}</p>
                    <button className="btn btn-primary" onClick={this.modifyReminder}>
                        Modificar
                    </button>
                    <button className="btn btn-danger" onClick={this.deleteReminder}>
                        Delete x
                    </button>

                </div>
            </div>
         );
    }
}

Reminder.propTypes = {
    info : PropTypes.shape({
        date : PropTypes.string.isRequired,
        time : PropTypes.string.isRequired,
        title : PropTypes.string.isRequired,
        color : PropTypes.string.isRequired,
        city : PropTypes.string.isRequired
    }),
    deleteReminder : PropTypes.func.isRequired
}
 
export default Reminder;