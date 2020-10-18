import React, {Component} from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import moment from 'moment';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

class AddReminder extends Component {

    state = {
        error: false,
        id: this.props.reminder.od,
                    title:this.props.reminder.title,
                    date:this.props.reminder.date,
                    time:this.props.reminder.time,
                    datetime:this.props.reminder.datetime,
                    city:this.props.reminder.city,
                    country:this.props.reminder.country,
                    color:this.props.reminder.color
      }

    red='red';
    blue='blue';
    yellow='yellow';

    handleChange = e =>{
       // this[e.target.name] = e.target.value;
        this.setState({
            [e.target.name]: e.target.value,
        })
        
        console.log(this[e.target.name]);
    }

    //refs


    titleRef = React.createRef();
    dateRef = React.createRef();
    timeRef = React.createRef();
    cityRef = React.createRef();
    //countryRef = React.createRef();
    colorRef = React.createRef();
    idRef = React.createRef();

   


            addNewReminder = (e) => {
                e.preventDefault();
                console.log('Hiciste Click');
        
                const title = this.titleRef.current.value,
                city = this.cityRef.current.value,
                date = this.dateRef.current.value,
                time = this.timeRef.current.value,
                datetime = moment(date+' '+time),
                color = (this.state.color!==''?this.state.color:this.props.reminder.color),
                country = (this.state.country!==''?this.state.country:this.props.reminder.country),
                id = this.idRef.current.value;
        
                if (title === '' || city === '' || date === '' || time === '' || color === '' || country === ''){
                    console.log(title);
                    console.log(city);
                    console.log(date);
                    console.log(time);
                    console.log(color);
                    console.log(country);
                    console.log(id);

                    this.setState({
                        error : true
                    })
                   
                }else {

                    console.log(title);
                    console.log(city);
                    console.log(date);
                    console.log(time);
                    console.log(color);
                    console.log(country);
                    console.log(id);
                //object literal
                const newReminder = {
                    id: uuid(),
                    title,
                    date,
                    time,
                    datetime,
                    city,
                    country,
                    color
                }
        
        
        
                //se envia el objeto hacia el padre
        
                
                if(id){
                    console.log('actualiza y borra');
                    this.props.updateReminder(newReminder,id);
                }else{
                    this.props.createReminder(newReminder);
                    console.log('nuevo');
                }
                this.setState({
                    error: false,
                    countrySelection :'',
                    id:0,
                    title : '',
                    date :'',
                    time :'',
                    city:'',
                    country:'',
                    color:''
                })
                

                 //reiniciar el formulario
        
                e.currentTarget.reset();
        
               
               
                        }
                        
        
                    }
    render() { 

        const {id,title,city,country,date,time,color} = this.props.reminder;
        const existError = this.state.error;

        
       
        return ( 
            <div className="card mt-5">
                <div className="card-body">
                <h2 className="card-title text-center mb-5">Reminder</h2>
                <form onSubmit={this.addNewReminder}>
      <div className="form-group row">
          <label className="col-sm-4 col-lg-2 col-form-label">Title</label>
          <div className="col-sm-8 col-lg-10">
              <input ref={this.titleRef} type="text" className="form-control" placeholder="Title" maxLength="30" defaultValue={title} />
          </div>
      </div>
      <div className="form-group row">
          <label className="col-sm-4 col-lg-2 col-form-label">City</label>
          <div className="col-sm-8 col-lg-10">
              <input ref={this.cityRef} type="text" className="form-control"  placeholder="City Name" defaultValue={city}/>
          </div>
      </div>
      <div className="form-group row">
          <label className="col-sm-4 col-lg-2 col-form-label">Country</label>
          <div className="col-sm-8 col-lg-10">
              <select onChange={this.handleChange} name="country" className="form-control w-100" >
                    <option value="" >Select a country</option>
                    <option value="US" selected={this.state.country==='US' || country==='US'}>United States</option>
                    <option value="MX" selected={this.state.country==='MX' || country==='MX'}>Mexico</option>
                    <option value="AR" selected={this.state.country==='AR' || country==='AR'}>Argentina</option>
                    <option value="CO" selected={this.state.country==='CO' || country==='CO'}>Colombia</option>
                    <option value="CR" selected={this.state.country==='CR' || country==='CR'}>Costa Rica</option>
                    <option value="ES" selected={this.state.country==='ES' || country==='ES'}>Spain</option>
                    <option value="PE" selected={this.state.country==='PE' || country==='PE'}>Peru</option>
                    <option value="EC" selected={this.state.country==='EC' || country==='EC'}>Ecuador</option>
                </select>
          </div>
      </div>

       <div className="form-group row">
          <label className="col-sm-4 col-lg-2 col-form-label">Date</label>
          <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
              <input ref={this.dateRef} type="date" className="form-control" placeholder="2020-10-01" defaultValue={date}/>
          </div>                            

          <label className="col-sm-4 col-lg-2 col-form-label">Time</label>
          <div className="col-sm-8 col-lg-4">
              <input ref={this.timeRef} type="time" className="form-control" placeholder="00:00" defaultValue={time}/>
          </div>
      </div>

      <div className="form-group row">
          <label className="col-sm-4 col-lg-2 col-form-label">Color</label>
          <div className="col-sm-8 col-lg-10">
            
                <input onChange={this.handleChange} type="radio" id="red" name="color" value="red" checked={this.state.color==='red' || color==='red'}/>
                <label for="red"><FiberManualRecordIcon style={{ color: this.red}} /> Red</label>
                <input onChange={this.handleChange} type="radio" id="blue" name="color" value="blue" checked={this.state.color==='blue' || color==='blue'}/>
                <label for="blue"><FiberManualRecordIcon style={{ color: this.blue}} /> Blue</label>
                <input onChange={this.handleChange} type="radio" id="yellow" name="color" value="yellow" checked={this.state.color==='yellow' || color==='yellow'}/>
                <label for="yellow"><FiberManualRecordIcon style={{ color: this.yellow}} />Yellow</label>
          </div>
      </div>
      <div className="form-group row justify-content-end">
          <div className="col-sm-12">
              <input type="hidden" name="id" id='id' ref={this.idRef} defaultValue={id}/>
        <button type="submit" className="btn btn-success w-100">{id?'Modify':'Add'}</button>
          </div>
      </div>
  </form>
                    {existError? <div className="alert alert-danger text-center">All fields are required</div>:''}
                </div>
                </div>
         );
    }
}

AddReminder.propTypes = {
    createReminder : PropTypes.func.isRequired
}
 
export default AddReminder;