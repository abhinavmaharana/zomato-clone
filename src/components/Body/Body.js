import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from '../../pages/home';
import Main from '../../pages/main';
import Restaurantpage from '../../pages/restaurantpage';
import Cart from '../Cart/Cart';

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/ncr/restaurants',
      element: <Main />,
    },
    {
      path: '/ncr/:name/order',
      element: <Restaurantpage />,
    },
    {
      path: '/ncr/cart',
      element: <Cart />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
