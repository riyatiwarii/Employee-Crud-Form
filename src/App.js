import Form from './components/Form';
import EditEmployee from './components/EditEmployee';
import { createBrowserRouter, Outlet } from "react-router-dom"
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './Store';

const App = () => {

  return (
    <Provider store={store}>
      <Outlet/>
    </Provider>
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
        path: "/edit/:id",
        element: <EditEmployee/>
      }
    ]
  }
])

export default appRouter;
