import React from "react";
import logo from "../images/logo_header.png";

const Header = ({
  informacion,
  setFilteredData
}) => {

  const handleFilter = (e) => {
    setFilteredData(
      informacion.filter((personaje) => personaje.status === e.target.value)
    );
  };

  return (
    <div className="container row">
      <div className="col-md-12 d-flex justify-content-center">
        <img src={logo} alt="logo" />
      </div>
      <div className="col-md-12 d-flex align-items-center flex-column">
        <label className='Label' >Filtra por estado: </label>
        <select className='Select' onChange={(e) => handleFilter(e)}>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
