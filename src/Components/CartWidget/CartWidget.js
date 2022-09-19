import cart from './assets/cart.svg'
import './CartWidget.css'
const CartWidget = () => {
    return(
    <div className='Cart' >
    <button className='CartWidget'><img className='Svg' src={cart} alt='cart' /><span className='Number'>0</span></button>
    
    </div>
    )
}

export default CartWidget