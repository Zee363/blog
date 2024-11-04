import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Beauty from "./Pages/Beauty";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/beauty" element={<Beauty/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
