import "./App.css";

import Footer from "./Components/Footer/Footer";
import Carrental from "./Pages/CarRental/Carrental";

import LondonCar from "./Components/CarRentalComponents/LondonCar";
import Madrid from "./Components/CarRentalComponents/Madrid";

import WithSubnavigation from "./Components/Navbar/Navbar";
import MainRouter from "./Routes/MainRouter";
import PaymentSection from "./Pages/PaymentSection/PaymentSection";

function App() {
  return (
    <div className="App">
      <WithSubnavigation />
      <MainRouter />
      {/* <PaymentSection/> */}
    </div>
  );
}

export default App;
