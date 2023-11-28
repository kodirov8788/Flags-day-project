import { Link, Navigate, Route, Routes } from "react-router-dom";
import Admin from "./admin/Admin";
import County from "./pages/Country";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import { useAuthContext } from "./hooks/useAuthContext";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import Createcategory from "./admin/adminComponents/Createcategory";
import Dashboard from "./admin/adminComponents/Dashboard";
import Createproduct from "./admin/adminComponents/Createproduct";

function Routers() {
  const { user } = useAuthContext()
  const { isLoading } = useContext(AuthContext)
  console.log(isLoading)
  return (
    <div className="">
      <Routes>

        <Route path='/' element={<MainPage />} />
        <Route path='/countrytest' element={<County />} />
        <Route path='/login' element={<Login />} />
        <Route path="/admin" element={user ? <Admin /> : <Navigate to="/login" />}>
          {/* Child Routes */}
          <Route path='' element={<Dashboard />} />
          <Route path='createcategory' element={<Createcategory />} />
          <Route path='createproduct' element={<Createproduct />} />
          {/* Add more child routes here as needed */}
        </Route>
      </Routes>
    </div>
  );
}

export default Routers;
