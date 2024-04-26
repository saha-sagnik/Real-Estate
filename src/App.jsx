import Layout from '../src/pages/layout/Layout'
import Listpage from '../src/pages/listPage/ListPage'
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import Homepage from './pages/Homepage/Homepage';

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