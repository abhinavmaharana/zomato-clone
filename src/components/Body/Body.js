import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from '../../pages/home';
import MainContainer from '../MainContainer/MainContainer';

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/ncr/restaurants',
      element: <MainContainer />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
