import { BrowserRouter, Routes, Route ,Navigate} from "react-router-dom";
import Register from "./component/Register";
import ForgotPassword from "./component/ForgotPassword";
import UpdatePassword from "./component/UpdatePassword";
import Login from "./component/Login";
import ResetPassword from "./component/ResetPassword";
import Task from "./component/Task";
import AddTask from "./component/AddTask";
import PrivateRoutes from "./component/PrivateRoutes";
import EditTask from "./component/EditTask";
import AuthRoutes from "./component/AuthRoutes";
import Logout from "./component/Logout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/auth" element={<AuthRoutes />} >
        <Route path="" element={<Login />} />
        <Route path="sign-up" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot/password" element={<ForgotPassword />} />
        <Route path="reset-password/:resetToken" element={<ResetPassword />} />
        </Route>

        {/* Secure Routes */}
        <Route path="/user" element={<PrivateRoutes />} >
          <Route path="change/password" element={<UpdatePassword />} />
          <Route path="task" element={<Task />} />
          <Route path="task/create" element={<AddTask />} />
          <Route path="task/edit/:id" element={<EditTask />} />
          <Route path="logout" element={<Logout /> } /> 
        </Route>

        <Route path="*" element={<Navigate to="/auth/login" replace />} />
        
      </Routes>

    </BrowserRouter>


  );
}

export default App;
