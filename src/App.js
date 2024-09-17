import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeroSection from './Pages/HeroSection.tsx';
import Navbar from './Pages/Navbar.tsx';

function App() {
  return (
    <div>
   <BrowserRouter>
   <Navbar/> 
   <Routes>
    <Route path='/' element={<HeroSection/>}/>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
