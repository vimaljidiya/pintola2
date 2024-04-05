
import './App.css';
import Mainpage from './Main-page/Mainpage';
import Header from './Header/Header';
import Footer from './footer/Footer';
import {BrowserRouter,Routes, Route } from 'react-router-dom';
import Store from './Store/Store';
import Whypimtola from './Why-Pintola/Whypimtola';
import Recieps from './Recieps/Recieps';
import AboutUs from './About-Us/AboutUs';
import ContactUs from './Contact Us/ContactUs';
import Trackmain from './Track your order/Trackmain';
import Hellosing from './Hello sing/Hellosing';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Mainpage/>}/>
      <Route path='/Store' element={<Store/>}/> 
      <Route path='/Whypimtola' element={<Whypimtola/>}/>
      <Route path='/Recieps' element={<Recieps/>}/>
      <Route path='/AboutUs' element={<AboutUs/>}/>
      <Route path='/ContactUs' element={<ContactUs/>}/>
      <Route path='/Trackmain' element={<Trackmain/>}/>
      <Route path='/Hellosing' element={<Hellosing/>}/>
      
          </Routes>
   
     <Footer/>
     </BrowserRouter>
    </>
  );
}

export default App;
