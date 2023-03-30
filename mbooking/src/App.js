import logo from "./logo.svg";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Carrental from "./Pages/CarRental/Carrental";
import WithSubnavigation from "./Components/Navbar/Navbar"
import AttractionData from "./Pages/AttractionData";

function App() {
  return (
    <div className="App">
      {/* <WithSubnavigation/>
      <Carrental />
   */}
   <AttractionData/>
    </div>
  );
}

export default App;
