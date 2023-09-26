import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import contact from "./pages/contact";
import Policy from "./pages/Policy";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import DashBoard from "./pages/user/DashBoard";
import PrivateRoute from "./components/Routes/PrivateRoute";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import Users from "./pages/Admin/Users";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";
import Products from "./pages/Admin/Products";
import UpdateProduct from "./pages/Admin/UpdateProduct";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/products/:slug" Component={ProductDetails} />
        <Route path="/search" Component={Search} />
        <Route path="/dashboard" Component={PrivateRoute}>
          <Route path="user" Component={DashBoard} />
          <Route path="user/orders" Component={Orders} />
          <Route path="user/profile" Component={Profile} />
        </Route>
        <Route path="/dashboard" Component={AdminRoute}>
          <Route path="admin" Component={AdminDashboard} />
          <Route path="admin/create-category" Component={CreateCategory} />
          <Route path="admin/create-product" Component={CreateProduct} />
          <Route
            path="admin/products/update-product/:slug"
            Component={UpdateProduct}
          />
          <Route path="admin/products" Component={Products} />
          <Route path="admin/users" Component={Users} />
        </Route>
        <Route path="/register" Component={Register} />
        <Route path="/forgot-password" Component={ForgotPassword} />
        <Route path="/login" Component={Login} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/contact" Component={contact} />
        <Route path="/policy" Component={Policy} />
        <Route path="*" Component={PageNotFound} />
      </Routes>
    </>
  );
}

export default App;
