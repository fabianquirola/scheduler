import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


class ReminderResume extends Component {
    state = {  }

    deleteReminder = () =>{
        this.props.deleteReminder(this.props.info.id)
    }
    render() { 
        const {date, time,title,city,color,country}= this.props.info;
        return ( 
            <div className="lst-rmsm">
               
                    <p className="t"><FiberManualRecordIcon style={{ color: color}} />{title}</p>
                    <p className="d">{city} {date} {time}
                    
                    <DeleteForeverIcon style={{ color: 'red',float:'right'}} onClick={this.deleteReminder} />
                    
                    </p>
            </div>
         );
    }
}

ReminderResume.propTypes = {
    info : PropTypes.shape({
        date : PropTypes.string.isRequired,
        time : PropTypes.string.isRequired,
        title : PropTypes.string.isRequired,
        color : PropTypes.string.isRequired,
        city : PropTypes.string.isRequired
    }),
    deleteReminder : PropTypes.func.isRequired
}
 
export default ReminderResume;