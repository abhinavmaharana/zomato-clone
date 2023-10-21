import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from '../../pages/home';

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
