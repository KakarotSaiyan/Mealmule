// import logo from './logo.svg';
import './App.css';
import Navi from './components/Navi';
import Home from './components/Home';
import Categories from './components/Categories';
import Services from './components/Services';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App() {
  return (
   <>

   <BrowserRouter>
   <Navi/>
   <Routes>
    <Route exact path='/' element={<Home/>}></Route>
    <Route path='/categories' element={<Categories/>}></Route>
    <Route path='/services' element={<Services/>}></Route>
   </Routes>
   
   </BrowserRouter>
   
   {/* <Categories/> */}
   {/* <Services/> */}
   </>
  );
}

export default App;