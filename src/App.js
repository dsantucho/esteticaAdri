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
import About from './pages/About';
import Contact from './pages/Contact';
//context
import {ServiceProvider} from './contexts/ServiceContext'

function App() {
  return (
    <ServiceProvider>
    <Router>
      <header className=" bg-background">
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <footer>
        <BannerFooter />
        <Copyright />
      </footer>
    </Router>
    </ServiceProvider>
  );
}

export default App;
