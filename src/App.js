// Ract router dom
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
//components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";


function App() {
  return (
    <Router>
        <header className=" bg-background">
          <Navbar/>
        </header>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/services" element={<Services/>}/>
        </Routes>
          

    </Router>

  );
}

export default App;
