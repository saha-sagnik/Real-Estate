import ListPage from '../src/pages/listPage/ListPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './pages/Homepage/Homepage';
import SinglePage from './pages/SinglePage/SinglePage';
import ProfilePage from '../src/pages/profilePage/ProfilePage';
import Register from './pages/register/Register';
import Login from './pages/Login/Login';
import { Layout, RequireAuth } from './pages/layout/Layout.jsx';
import ProfileUpdatePage from './pages/ProfileUpdatePage/ProfileUpdatePage.jsx'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          element: <RequireAuth />,
          children: [
            {
              path: "/profile",
              element: <ProfilePage />,
            },
            {
              path:"/profile/update",
              element: <ProfileUpdatePage />,
            }
          ],
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;