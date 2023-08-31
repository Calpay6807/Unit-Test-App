import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../card-app";

const Scoops = () => {
  const [scoopes, setScoope] = useState([]);
  const [basket, setBasket] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3050/scoops")
      .then((res) => setScoope(res.data))
      .catch((err) => alert(err));
  }, []);
  return (
    <div className="container">
      <h1>Dondurma Çeşitler</h1>
      <p>Tanesi 20&#8378;</p>
      <h2>Çeşitler Ücreti: {basket.length * 20}&#8378;</h2>

      <div className="row gap-5 justify-content-between">
        {scoopes.map((scop, i) => (
          <Card key={i} basket={basket} scop={scop} setBasket={setBasket} />
        ))}
      </div>
    </div>
  );
};

export default Scoops;
