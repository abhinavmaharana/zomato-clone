import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from '../../pages/home';
import Main from '../../pages/main';

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
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
