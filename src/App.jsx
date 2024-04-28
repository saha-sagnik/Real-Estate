import Layout from '../src/pages/layout/Layout'
import Listpage from '../src/pages/listPage/ListPage'
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import Homepage from './pages/Homepage/Homepage';
import SinglePage from './pages/SinglePage/SinglePage';

function App() {


    const router = createBrowserRouter([
      {
        path: "/",
        element: <Layout/>,
        children:[
          {
            path: "/",
            element: <Homepage/>
          },
          {
            path: "list",
            element: <Listpage/>
          },
          {
            path: "/:id",
            element: <SinglePage/>
          }

        ]
      },
      {
        path: "/list",
        element: <Listpage/>,
      }
    ]);
    return(
    
    <RouterProvider router={router}/>
    );
}

export default App