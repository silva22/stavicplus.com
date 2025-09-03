import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/layout"
import AuthLogin from "./pages/auth/login"
import AuthRegister from "./pages/auth/register"
import AdminLayout from "./components/admin-view/layout"





function App() {


  return (

    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        
        {/** auth paths */}
        <Route path="/auth" element={<AuthLayout/>}>
          <Route path="login" element={<AuthLogin/>} />
          <Route path="register" element={<AuthRegister/>} />
        </Route>

        {/* admin routes */}
        <Route path="/admin" element={<AdminLayout/>}>
        </Route>
      </Routes>
    </div>


  )
}

export default App
