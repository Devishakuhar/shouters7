import Navbar from "./Navbar.jsx";
import './App.css'
import Footer from "./footer.jsx";
import Body from "./body.jsx";
import AboutUs from "./about.jsx";
import CustomerReview from "./customer.jsx";
import Services from "./services.jsx";
import TeamSection from "./teamsection.jsx";
function App() {
  

  return (
    <div className="app">
      <Navbar />
     <div className="main-content">
      <Body />
      <AboutUs />
      <TeamSection />
      <Services />
      <CustomerReview />
      
     </div>
      <Footer />
    </div>
  );
}

export default App
