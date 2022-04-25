import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, Fragment } from 'react';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {
  const disptach = useDispatch();
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);


  useEffect(() => {
    const sendCartData = async () => {
      disptach(uiActions.showNotofication({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cartdata!'
      }));
      const response = await fetch('https://react-http-aee40-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      });
      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
      const responseData = await response.json();
      disptach(uiActions.showNotofication({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully'
      }));
    }
    if (isInitial) {
      isInitial = false;
      return;
    }
    sendCartData().catch(error => {
      disptach(uiActions.showNotofication({
        status: 'error',
        title: 'Error!',
        message: 'Sending Cart data failed'
      }));
    });

  }, [cart]);
  return (
    <Fragment>
      {notification && (
        <Notification status={notification.status} title={notification.title} message={notification.message} />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>

  );
}

export default App;
