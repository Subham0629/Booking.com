import "./App.css";
import WithSubnavigation from "./Components/Navbar/Navbar";
import MainRouter from "./Routes/MainRouter";

function App() {
  return (
    <div className="App">
      <WithSubnavigation/>
      <MainRouter/>
    </div>
  );
}

export default App;
