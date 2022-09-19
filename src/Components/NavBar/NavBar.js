import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'

const NavBar = ({action}) => {
    return  <nav className="NavBar">
                <div className="Title">   
                    <h1>Kiosco Diegote</h1>
                    
                </div>
                <div className="CartWidget" >
                
                
                </div>
                <div className="BNav">
                
                    <button className="Button" onClick={action}>Productos</button>
                    <button className="Button" onClick={action}>Contact</button>
                    <button className="Button" onClick={action}>About Us</button>
                    <CartWidget/>
                </div>
                
            </nav>
}

export default NavBar