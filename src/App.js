// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { CartContextProvider } from './Context/cartContext'
import { NotificationProvider } from './notification/Notification';

function App() {
 
  return (
    <div className="App"> 
          <NotificationProvider>
            <CartContextProvider>
              <BrowserRouter>
                <Navbar />
                <Routes>
                  <Route path='/' element={<ItemListContainer greeting='Listado de todos los productos'/>}/>
                  <Route path='/category/:categoryId' element={<ItemListContainer greeting='Listado de categoria: '/>} />
                  <Route path='/detail/:productId' element={<ItemDetailContainer />} />  
                  <Route path='/cart' element={<h1>CART</h1>} />
                  <Route path='*' element={<h1>404 NOT FOUND</h1>} /> 
                </Routes>
              </BrowserRouter>
            </CartContextProvider>
          </NotificationProvider>
    </div>
  );
}

export default App;