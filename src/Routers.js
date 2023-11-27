import { Link, Navigate, Route, Routes } from "react-router-dom";
import Admin from "./admin/Admin";
import County from "./pages/Country";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import { useAuthContext } from "./hooks/useAuthContext";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

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
        <Route
          path="/admin"
          element={user ? <Admin /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
}

export default Routers;
