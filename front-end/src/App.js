import './App.css';
//import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Homepage from './pages/Homepage';
import Navbar from './component/Navbar';
import Aside from './component/Aside';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/user/:userId",
        element: <Homepage />,
      },
      
    ]
  }
]);

function Root() {
  return <>
    <Navbar />
    <Aside />
    <Outlet />
  </>
}

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>

  );
}

export default App;
