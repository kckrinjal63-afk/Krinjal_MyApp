import Service from './components/Service/service.jsx'
import './App.css'
import './index.css'
import Counter from './components/Counter/Counter.jsx';
import Contact from './components/Contact/Contact.jsx'
import Navbar from './components/Navbar/Navbar.jsx';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home2.jsx/Home.jsx';
import Login from './components/Login/Login.jsx';
import Location from './components/Location/Location.jsx';
import Product from './components/Product/Product.jsx';

function App() {
  const age = 17;

  function handleClick(){
    console.log(" button is clicked")
  }


  return (
    <>
    
  
     <Navbar/>
    
    
    
    
    {/* <div className='aboutContanier'>

      <p>This is Krinjal</p>
      I  am a student. <br />

    </div>

      <div>
        <Service />
      </div>
      
      <Contact />
      <Counter/> */}


<Routes>
<Route path="/about" element = {<Contact/>} />
<Route path="/counter" element = {<Counter/>} />
<Route path="/location" element = {<Location/>} />
<Route path="/contact" element = {<Contact/>} />
<Route path="/login" element= {<Login/>} />
<Route path="/" element= {<Home/>} />
<Route path="/product" element= {<Product/>}  />

</Routes>
      
      
    </>
     

        
  )
}

export default App

