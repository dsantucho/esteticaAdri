import Navbar from "./components/Navbar";
import Home from "./pages/Home";


function App() {
  return (
    <div> 
      <header className=" bg-background">
        <Navbar/>
      </header>
        <Home/>
    </div>
  );
}

export default App;
