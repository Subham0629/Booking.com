import logo from "./logo.svg";
import "./App.css";
import Footer from "./Components/Footer/Footer";

import Stay from "./Pages/Stays/Stay";
import HotelCard from "./Pages/Stays/HotelCard";

function App() {
  return (
    <div className="App">
      <WithSubnavigation/>
      <Carrental />
    </div>
  );
}

export default App;
