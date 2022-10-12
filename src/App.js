// import logo from './logo.svg';
import './App.css';
 import NavBar from './Components/NavBar/NavBar' ; 
 import { useState } from 'react'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'



function App() {
  return (
    <div className="App" >

<BrowserRouter>
        <NavBar />
       
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
