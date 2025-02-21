import Navbar from "./Navbar.jsx";
import './App.css'
import Footer from "./footer.jsx";
import Body from "./body.jsx";
function App() {
  

  return (
    <div className="app">
      <Navbar />
     <div className="main-content">
      <Body />
     </div>
      <Footer />
    </div>
  );
}

export default App
