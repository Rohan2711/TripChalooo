import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './files/Home';
import Service from './files/Service';
import Contact from './files/Contact';
import About from './files/About';
function App() {
  return(
    <div className='App'>
      <Routes>
       <Route path="/"  exact={true} element={<Home/>}/>
       <Route  path="/about" element={<About/>}/>
       <Route  path="/service" element={<Service/>}/>
       <Route  path="/contact" element={<Contact/>}/>
       </Routes>
       {/* <Navbar></Navbar> */}
    </div>
    
    
  )
}

export default App;
