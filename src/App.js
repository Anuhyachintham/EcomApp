
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCard from './pages/ShopCard';


function App() {
  return (
   <div>
    <BrowserRouter>
<Navbar/>
<Routes>
  <Route path="/"  element={<ShopCard/>}/>
</Routes>
</BrowserRouter>
   </div> 

  );
}

export default App;
