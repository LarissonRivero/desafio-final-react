import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { formatNumber } from '../Helper';
import CarsContext from '../Context';

const Card = () => {
    const { cars, addToCart } = useContext(CarsContext);
  
    const navigate = useNavigate();
  
    return (
      <>
        {cars.map((car) => (
          <div key={car.id} className="col">
            <div className="card">
              <img className="card-img-top" src={car.img} alt="" />
              <div className="card-body">
                <h4 className="card-title text-capitalize">{car.name}</h4>
                <hr />
                <p className="card-text">
                  <b>Especificaciones:</b>
                </p>
  
                <ul>
                  {car.specifications.map((specification, i) => (
                    <li key={i}>
                      {/* &#127829;  */}
                      ⚙️ {specification}
                    </li>
                  ))}
                </ul>
              </div>
  
              <h2 className="text-center text-dark pb-3">
                Precio: ${formatNumber(car.price)}
              </h2>
  
              <div className="d-flex justify-content-around mb-4">
                <button
                  to={`/cars/${car.id}`}
                  className="btn btn-secondary"
                  onClick={() => navigate(`/cars/${car.id}`)}
                >
                  Ver Más
                  {/* &#128064; */}
                </button>
  
                <button
                  className="btn btn-success"
                  onClick={() => addToCart(car)}
                >
                  Comprar
                  {/* &#128722; */}
                </button>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };
  
  export default Card;