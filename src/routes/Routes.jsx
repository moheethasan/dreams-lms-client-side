import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Colleges from "../pages/Colleges/Colleges";
import MyCollege from "../pages/MyCollege/MyCollege";
import Admission from "../pages/Admission/Admission";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "colleges",
        element: <Colleges></Colleges>,
      },
      {
        path: "myCollege",
        element: <MyCollege></MyCollege>,
      },
      {
        path: "admission",
        element: <Admission></Admission>,
      },
    ],
  },
]);
export default router;
