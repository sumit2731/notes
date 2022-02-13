import {useContext, useEffect, useState} from 'react';
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';


const HeaderCartButton = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    /**
     * @Desc using useContext makes sure that component is re-evaluated when ever context changes
     */
    //this component will be re evaluated whenever context changes
    const cartCtx = useContext(CartContext);
    const  numberOfCartItems = cartCtx.items.reduce((accum, item) => item.amount + accum ,0);

    const buttonClasses = `${classes.button} ${ btnIsHighlighted ? classes.bump: ''}`;
    useEffect(() => {
        if(numberOfCartItems === 0) {
            return;
        }
        setBtnIsHighlighted(true);
        const timer = setTimeout(() => setBtnIsHighlighted(false),300);
        return () => clearTimeout(timer);
    },[numberOfCartItems])
    return (
        <button className={buttonClasses} onClick = {props.onClick}>
            <span className = {classes.icon}>
                <CartIcon></CartIcon>
            </span>
            <span>Your Cart</span>
            <span className = {classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;