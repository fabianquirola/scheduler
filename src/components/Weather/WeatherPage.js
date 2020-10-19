import React, { useState, useEffect } from "react";
import Header from "../shared/Header";
import Form from "./Form";
import Error from "../shared/Error";
import Weather from "./Weather";

const WeatherPage = ()=> {

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState(false);
  const [result, setResult] = useState("");

  useEffect(() => {
    //prevenir ejecucion primera vez
    if (city === "") return;

    const consultApi = async () => {
      const appId = "40823c644eafed4a6c502b7b934a10e7";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;

      const response = await fetch(url);
      const apiresult = await response.json();

      console.log(apiresult);

      setResult(apiresult);
    };

    consultApi();
  }, [city, country]);

  const dataConsult = (data) => {
    //validar ambos campos
    if (data.city === "" || data.country === "") {
      setError(true);
      return;
    }

    setCity(data.city);
    setCountry(data.country);
    setError(false);
  };

  //cargar un componente condicionalmente
  let component;
  if (error) {
    //hay un error
    component = <Error message="Ambos campos son obligatorios" />;
  } else if (result.cod === "404") {
    component = <Error message="La ciudad no existe en nuestro registro" />;
  } else {
    //mostrar clima
    component = <Weather result={result} />;
  }

  return (
    <div className="App">
      <Header title="Weather" />
      <div className="contenedor-form">
        <div className="container">
            <div className=" card">
          <div className="row ">
            <div className="col col-6">
              <Form dataConsult={dataConsult} />
            </div>
            <div className="col col-6">{component}</div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherPage;
