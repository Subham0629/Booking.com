import logo from "./logo.svg";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Carrental from "./Pages/CarRental/Carrental";
import WithSubnavigation from "./Components/Navbar/Navbar"

function App() {
  return (
    <div className="App">
      <WithSubnavigation/>
      <Carrental />
  
    </div>
  );
}

export default App;
