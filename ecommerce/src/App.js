import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import men_banner from './Components/Assests/men_banner.png'
import women_banner from './Components/Assests/women_banner.png'
import Footer from './Components/Footer/Footer';
import kids_banner from './Components/Assests/kids_banner.png'
import Login from './Pages/Login';
import Offers from './Components/Offers/Offers';
import Forgot from './Pages/Forgot';

function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Navbar/>
     <Routes>
        <Route exact path='/' element={<Shop/>}/>
        <Route exact path='/Men' element={<ShopCategory banner={men_banner} category="Men"/>}/>
        <Route exact path='/Women' element={<ShopCategory banner={women_banner} category="Women"/>}/>
        <Route excat path='/Kids' element={<ShopCategory banner={kids_banner} category="Kids"/>}/>
        <Route excat path='/Product' element={<Product/>}>
        <Route excat path=':ProductId' element={<Product/>}/>
        </Route>
        <Route excat path='/Cart' element={<Cart/>}></Route>
        <Route excat path='/LoginSignup' element={<LoginSignup/>}></Route>
        <Route excat path='/Login' element={<Login/>}></Route>
        <Route excat path='/Forgot' element={<Forgot/>}></Route>
        <Route excat path='/Offers' element={<Offers/>}></Route>
        </Routes>
        <Footer />
  </BrowserRouter>
    </div>
  );
}

export default App;
