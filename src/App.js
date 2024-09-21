import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeroSection from './Pages/HeroSection.tsx';
import Navbar from './Pages/Navbar.tsx';
import Work from './Pages/Work.tsx';

function App() {
  return (
    <div>
   <BrowserRouter>
   <Navbar/> 
   <Routes>
    <Route path='/' element={<HeroSection/>}/>
    <Route path='/work' element={<Work/>}/>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
