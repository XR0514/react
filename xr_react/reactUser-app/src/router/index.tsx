import { Navigate } from "react-router-dom"
import Login from "../pages/login/Login"
import Setting from "../pages/setting/Setting"
import UserList from "../pages/userlist/UserList"
import LayOut from "../layout/LayOut"
import Auth from "../auth/Auth"

const routes = [
  {
    path: '/',
    element: <Navigate to="/userlist"></Navigate>
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/userlist',
    element: (
      <Auth>
        <LayOut>
          <UserList></UserList>
        </LayOut>
      </Auth>
    )
  },
  {
    path: '/setting',
    element: (
      <Auth>
        <LayOut>
          <Setting></Setting>
        </LayOut>
      </Auth>
    )
  }
]
 
export default routes

