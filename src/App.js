import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login.page";
import Dashboard from "./pages/dashboard.page";
import Products from "./pages/products.page";
import Register from "./pages/register.page";
import AddProduct from "./pages/addProduct.page";
import EditProduct from "./pages/editProduct.page";
import { Toaster } from "react-hot-toast";
import Protected from "./components/Protected.component";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route
            path="/products"
            element={
              <Protected redirectedPath={"/login"}>
                <Products />
              </Protected>
            }
          ></Route>
          <Route
            path="/"
            element={
              <Protected redirectedPath={"/login"}>
                <Dashboard />
              </Protected>
            }
          ></Route>
          <Route
            path="/addProduct"
            element={
              <Protected redirectedPath={"/login"}>
                <AddProduct />
              </Protected>
            }
          ></Route>
          <Route
            path="/editProduct/:id"
            element={
              <Protected redirectedPath={"/login"}>
                <EditProduct />
              </Protected>
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
