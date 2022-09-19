// import logo from './logo.svg';
import './App.css';
 import NavBar from './Components/NavBar/NavBar' ; 

import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App" >
      {/* <header className="App-header">
      </header> */}
      <NavBar action={() => console.log('Hola persona que clickea') }/>
       <ItemListContainer greetings={'Bienvenidos al Kiosco'}/>
    </div>
  );
}

export default App;
