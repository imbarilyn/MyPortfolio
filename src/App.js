import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProjectList from './components/ProjectList';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Header />
     <Navbar />
     <About />
     <Experience />
     <ProjectList />
     <Contact />
     <Footer />        
    </div>
  );
}

export default App;
