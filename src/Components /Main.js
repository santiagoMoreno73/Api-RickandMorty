import React, { useState, useEffect, Fragment } from "react";

//llamo la funcion API que contiene la URL
import API from "../Config";

//llamo la card
import Card from "./Card";
import Header from "./Header";

//css
import "../styles.css";

//creo mi componente main
const Main = () => {
  //inicio el useState
  //informacion = estado inicial
  //guardarInformacin = estado que cambia
  //useState([]) se declara asi para indicar que inicia como array
  const [informacion, guardarInformacion] = useState([]);
  const [filtroHumano, setFiltroHumano] = useState(false);
  const [opcion, setOpcion] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  //useEffect escuchara los cambios del componente
  useEffect(() => {
    //llamamos la variable API del config con la direccion a la que necesitamos
    API.get("character/")
      //consultamos el API
      .then((data) => {
        //enviamos la informacion al estado que cambia
        guardarInformacion(data.data.results);
        setFilteredData(data.data.results);
      })
      .catch((e) => {
        console.log(e);
      });
    //useEffect recibe un arbol de procesos dentro de los corchetes
    //se declara vacio para que se ejecute 1 vez y no entre en bucle infinito
  }, []);

  //pintamos un contenedor
  //cogemos el estado inicial(informacion) que trae la data de guardarinformacion
  //hacemos un .map y guardamos esa data en el objeto personaje
  //pasamos el componente CARD
  //y le pasamos la data atravez de la prop que cree llamada info
  //info de quien ? del personaje
  return (
    <Fragment>
      <Header                
        informacion={informacion}    
        guardarInformacion={guardarInformacion}                  
        setFilteredData={setFilteredData}        
      />
      <div className="container row">
        {filteredData.map((personaje) => (
          <Card info={personaje} />
        ))}
      </div>
    </Fragment>
  );
};

export default Main;
