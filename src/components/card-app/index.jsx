import React from "react";

const Card = ({ scop, setBasket, basket }) => {
  const found = basket.filter((item) => item.name === scop.name);
  const amount = found.length;
  const handleReset = () => {
    const clear = basket.filter((item) => item.name !== scop.name);

    setBasket(clear);
  };
  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{ width: "150px" }}
    >
      <img className="img-fluid" src={scop.imagePath} alt="çeşit" />
      <label className="lead">{scop.name}</label>
      <div className="d-flex align-items-center gap-2 mt-2">
        <button onClick={handleReset} className="btn btn-danger">
          Sıfırla
        </button>
        <span className="fs-2">{amount}</span>
        <button
          className="btn btn-success"
          onClick={() => setBasket([...basket, scop])}
        >
          ekle
        </button>
      </div>
    </div>
  );
};

export default Card;
