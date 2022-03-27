import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/Profile";
import ProtectedRoute from "./pages/ProtectedRoute";
import Basket from "./pages/Basket";
import Error404 from "./pages/Error404";
import Panel from "./pages/Panel/Panel";
import HomePanel from "./pages/Panel/Home/Home";
import ProductsPanel from "./pages/Panel/Products/Products";
import ProductDetailPanel from "./pages/Panel/Products/ProductDetail";
import OrdersPanel from "./pages/Panel/Orders/Orders";
import NewProduct from "./pages/Panel/Products/NewProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:product_id" element={<ProductDetail />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/panel"
          element={
            <ProtectedRoute admin={true}>
              <Panel />
            </ProtectedRoute>
          }
        >
          <Route index element={<HomePanel />} />
          <Route path="products" element={<ProductsPanel />} />
          <Route path="products/new-product" element={<NewProduct />} />
          <Route path="products/:product_id" element={<ProductDetailPanel />} />
          <Route path="orders" element={<OrdersPanel />} />
        </Route>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
