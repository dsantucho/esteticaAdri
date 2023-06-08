// Ract router dom
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
//components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";


function App() {
  return (
    <Router>
        <header className=" bg-background">
          <Navbar/>
        </header>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
          

    </Router>

  );
}

export default App;
