import axios from "axios";
import React, { useEffect, useState } from "react";

const Toppings = () => {
  const [topping, setTopping] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3050/toppings")
      .then((res) => setTopping(res.data));
  }, []);

  const handleChange = (e, top) => {
    e.target.checked
      ? setBasket([...basket, top])
      : setBasket(basket.filter((i) => i.name !== top.name));
  };
  console.log(basket);
  return (
    <div className="container my-5">
      <h1>Sos Çeşitler</h1>
      <p>tanesi : 3&#8378;</p>
      <h2>Soslar Ücreti:{basket.length * 3}&#8378;</h2>

      <div className="row gap-5 mt-4">
        {topping.map((top, i) => (
          <div
            className="d-flex flex-column align-items-center"
            style={{ width: "150px" }}
            key={i}
          >
            <img className="img-fluid" src={top.imagePath} alt="" />
            <label htmlFor={top.name} className="text-nowrap">
              {top.name}
            </label>
            <input
              onChange={(e) => handleChange(e, top)}
              className="form-check-input"
              id={top.name}
              type="checkbox"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toppings;
