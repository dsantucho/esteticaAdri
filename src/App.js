// Ract router dom
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
//components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import BannerFooter from './components/BannerFooter';
import Copyright from './components/Copyright';

function App() {
  return (
    <Router>
      <header className=" bg-background">
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <footer>
        <BannerFooter />
        <Copyright />
      </footer>
    </Router>
  );
}

export default App;
