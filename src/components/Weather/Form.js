import React, { useState } from "react";
import PropTypes from "prop-types";


function Form({ dataConsult }) {
  //state del componente
  //state, this.setState({})
  const [search, saveSearch] = useState({
    city: "",
    country: "",
  });

  const handleChange = (e) => {
    saveSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const consultWeather = (e) => {
    e.preventDefault();
    dataConsult(search);
  };

  return (
      <div className="card-body">
    <form onSubmit={consultWeather} className="form-inline">
      <div className="form-group ">
       
       
        <div className="col-sm-8 col-lg-9">
            <input className="form-control" type="text" name="city" id="city" onChange={handleChange} placeholder="City"/>
        </div>
      </div>
      <div className="form-group ">
      <div className="col-sm-8 col-lg-9">
        <select onChange={handleChange} name="country" className="form-control">
          <option value="">Choose a country</option>
          <option value="US">United States</option>
          <option value="MX">Mexico</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">Spain</option>
          <option value="PE">Peru</option>
          <option value="EC">Ecuador</option>
        </select>
        </div>
      </div>
      <div className="form-group  ">
      <div className="col-sm-8 col-lg-9">
        <input
          type="submit"
          className="btn btn-primary"
          value="Check"
        />
         </div>
      </div>
    </form>
    </div>
  );
}


Form.propTypes = {
    dataConsult: PropTypes.func.isRequired,
  };

export default Form;
