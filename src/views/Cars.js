import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CarsContext from '../Context';

const Detalle = () => {
    const [carDetail, setCarDetail] = useState({});
    const { cars, addToCart } = useContext(CarsContext);
    const { id } = useParams();

const obtenerDatos = () => {
    const datosCar = cars.find((car) => car.id === id);
    setCarDetail(datosCar);
  };


  useEffect(() => {
    obtenerDatos();
  }, [cars]);

  return (
    <>
      <div className="container mt-5">
        <div className="card mb-3 estilos">
          <div className="row g-0">
            <div className="col-md-6">
              <img
                src={carDetail.img}
                className="img-fluid estilos rounded-start"
                alt={carDetail.name}
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title text-capitalize">
                  {carDetail.name}
                </h5>
                <p className="card-text">{carDetail.desc}</p>
                <ul>
                  {carDetail.specifications?.map((specification, i) => (
                    <li key={i}>
                      {/* &#127829;  */}
                      ⚙️{specification}
                    </li>
                  ))}
                </ul>
                <div className="d-flex justify-content-around">
                  <h4>Precio: ${carDetail.price}</h4>
                  <button
                    className="btn btn-success"
                    onClick={() => addToCart(carDetail)}
                  >
                    Comprar
                    {/* &#128722; */}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detalle;
