import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Detail from "../pages/detail/Detail";
import Memo from "../pages/home/memo/Memo";
import Create from "../pages/home/create/Create";
import Mine from "../pages/home/mine/Mine";
// 跳转路由
import { Navigate } from "react-router-dom";
// 控制授权
import Auth from "../auth/Auth";

const routes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/detail/:id", // 动态路由
    element: (
      <Auth>
        <Detail />
      </Auth>
    ),
  },
  {
    path: "/",
    element: (
      <Auth>
        <Home />
      </Auth>
    ),
    children: [
      {
        path: "/",
        element: <Navigate to="/memo" />,
      },
      {
        path: "/memo",
        element: <Memo />,
      },
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/mine",
        element: <Mine />,
      },
    ],
  },
  {
    path: "*",
    element: <div>404</div>,
  },
];

export default routes;
