import { createContext, useState, useEffect } from "react";

const CarsContext = createContext();

const CarsProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
  const [carrito, setCarrito] = useState([]);

  const getCars = async () => {
    const res = await fetch("/cars.json");
    const cars = await res.json();
    setCars(cars);
  };

  useEffect(() => {
    getCars();
  }, []);

  const addToCart = ({ id, price, name, img }) => {
    const productoEcontradoIndex = carrito.findIndex((p) => p.id === id);
    const producto = { id, price, name, img, count: 1 };

    if (productoEcontradoIndex >= 0) {
      carrito[productoEcontradoIndex].count++;
      setCarrito([...carrito]);
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  const increment = (i) => {
    carrito[i].count++;
    setCarrito([...carrito]);
  };

  const decrement = (i) => {
    const { count } = carrito[i];
    if (count === 1) {
      carrito.splice(i, 1);
    } else {
      carrito[i].count--;
    }
    setCarrito([...carrito]);
  };

  return (
    <CarsContext.Provider
      value={{ cars, carrito, setCarrito, addToCart, increment, decrement }}
    >
      {children}
    </CarsContext.Provider>
  );
};

export { CarsProvider };
export default CarsContext;