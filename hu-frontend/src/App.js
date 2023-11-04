import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import './App.scss';
import Homepage from './pages/Homepage/Homepage';
import Footer from './components/Footer/Footer';

const Layout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
} 

const router = createBrowserRouter([
  {
    path : "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />
      },
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
