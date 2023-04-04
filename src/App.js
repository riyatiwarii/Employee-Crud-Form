import Form from './components/Form';
import EditEmployee from './components/EditEmployee';
import { createBrowserRouter, Outlet } from "react-router-dom"
import Home from './components/Home';


const App = () => {

  return (
    <>
      <Outlet/>
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/register",
        element: <Form/>
      },
      {
        path: "/edit",
        element: <EditEmployee/>
      }
    ]
  }
])

export default appRouter;
