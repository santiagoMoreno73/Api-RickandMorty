//se crea el componente card
//donde pasamos la prop que creamos llamada info
//info trae todo la consulta del objeto personaje
//en ese caso solo es llamar las propiedades que necesitemos
const Card = ({ info }) => {
  return (
    <div className="card p-4">
      <img className="img-profile" src={info.image} alt="Img" />
      <div className="m-4">
        <h5>{info.name}</h5>
        <p>{info.species}</p>
        <p>{info.status}</p>
      </div>
    </div>
  );
};

export default Card;
