import {Navigate, Route, Routes} from "react-router-dom";

import {AuthRequireLayout, MainLayout} from "./layouts";
import {LoginPage, OrdersPage, AdminPage, ActivateUserPage, RecoveryPasswordPage} from "./pages";

const App = () => {

  return (
      <Routes>

          <Route path={'/'} element={<MainLayout/>}>
              <Route index element={<Navigate to={'login'}/>}/>


              <Route element={<AuthRequireLayout/>}>
                  <Route path={'orders'} element={<OrdersPage/>}/>
              </Route>

              <Route path={'login'} element={<LoginPage/>}/>
              <Route path={'admin'} element={<AdminPage />}/>
              <Route path="/activate/:token" element={<ActivateUserPage/>}/>
              <Route path="/recovery-password/:token" element={<RecoveryPasswordPage/>}/>

          </Route>

      </Routes>
  );
};

export {App};
