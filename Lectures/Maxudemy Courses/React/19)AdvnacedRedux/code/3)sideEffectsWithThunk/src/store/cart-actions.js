import { uiActions } from './ui-slice';
import {cartActions} from './cart-slice';

/**
 * @Desc now we can use this function as - dispatch(sendCartdata)
 * 
 * What we dispatched before,always were action creators.So functions that return an action object with a type and so on.
    Now in cart slice,nwe are instead dispatching a function that returns another function.But the great thing about Redux,
    when using Redux toolkit,is that it's prepared for that.It does not just accept action objectsnwith a type property.
    
    Instead it also does accept,action creators that return functions.And if it sees,And if it sees,that you're dispatching,
    a action which is actually a function,instead of action object,it will execute that function for you.it will pass dispatch
    argument into that function automatically, so that we can dispatch in that function.

    This is a such a common pattern that we wanna have action creators that can perform side effects. And that can then dispatch 
    other actions,which eventually reach the reducers,

as part of a flow off side-effects,
 */
export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotofication({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cartdata!'
        }));

        const sendRequest = async () => {
            const response = await fetch('https://react-http-aee40-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify({
                    items: cart.items,
                    totalQuantity: cart.totalQuantity
                })
            });
            if (!response.ok) {
                throw new Error('Sending cart data failed.');
            }
        }
        try {
            await sendRequest();
            dispatch(uiActions.showNotofication({
                status: 'success',
                title: 'Success!',
                message: 'Sent cart data successfully'
            }));
        } catch(error) {
            dispatch(uiActions.showNotofication({
                status: 'error',
                title: 'Error!',
                message: 'Sending Cart data failed'
            }));
        }    

    };
};

export const fetchCartData = () => {
    return async(disptach) => {
        const fetchData = async() => {
            let response = await fetch('https://react-http-aee40-default-rtdb.firebaseio.com/cart.json');
            if (!response.ok) {
                throw new Error('Could Not Fetch Data');
            }
            const data = await response.json();
            return data;
        }

        try {
            const cartData = await fetchData();
            disptach(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }));
        }
        catch(error) {
            dispatch(uiActions.showNotofication({
                status: 'error',
                title: 'Error!',
                message: 'fetching cart data failed!'
            }));
        }
        

    };
}