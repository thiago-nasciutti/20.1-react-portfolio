import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import { useState } from 'react';


const sections = [
  "About",
  "Portfolio",
  "Resume",
  "Contact"
]

function App() {
  // currentPage = Variable 
  // setCurrentPage = Function
  const [currentPage, setCurrentPage] = useState("About");
  return (
    <div>
      {/* the prop sections is equal the variable sections */}
      <Header sections={sections} setCurrentPage={setCurrentPage} />
      {currentPage === "About" ? <About /> : <></>}
      {currentPage === "Portfolio" ? <Portfolio /> : <></>}
      {currentPage === "Resume" ? <Resume /> : <></>}
      {currentPage === "Contact" ? <Contact /> : <></>}
      <Footer />
    </div>
  );
}

export default App;
