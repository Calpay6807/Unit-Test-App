import Scoops from "./components/scoops";
import Toppings from "./components/toppings";
import Form from "./components/form-app";

function App() {
  return (
    <div>
      {/* çeşitler */}
      <Scoops />

      {/* Soslar */}
      <Toppings />

      {/* Formlar */}
      <Form />
    </div>
  );
}

export default App;
