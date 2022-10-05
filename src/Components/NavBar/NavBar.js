import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return   <nav className="NavBar" >
          <div className='NavBar'>
            <Link to='/'>
                <div className="Title">
              <h3>Kiosco Diegote</h3>
              </div>
            </Link>
            </div>
            <div className="CartWidget" >
          </div>
          <div className="BNav">
              <Link to='/category/celular' className="Button">Productos</Link>
              <Link to='/category/tablet' className="Button">Contact</Link>
              <Link to='/category/notebook' className="Button">About Us</Link>
          </div>
          <CartWidget />
      </nav>



            
}

export default NavBar