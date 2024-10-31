import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </Router>
       <Footer/>
    </div>
  );
}

export default App;
