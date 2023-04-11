import { createBrowserRouter, Outlet } from "react-router-dom"
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './Store';
import AddEditForm from './components/AddEditForm';

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
        element: <AddEditForm/>
      },
      {
        path: "/edit/:id",
        element: <AddEditForm/>
      }
    ]
  }
])

export default appRouter;
