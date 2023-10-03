import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import News from "../Pages/News/News";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
        loader: ()=> fetch('/news.json')
      },
      {
        path:'/news/:id',
        element:<PrivetRoute><News></News></PrivetRoute>,
        loader:()=> fetch(`news`)
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
]);

export default router;
