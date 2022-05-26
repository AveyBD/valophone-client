import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import Checkout from "./components/Checkout/Checkout";
import AddProduct from "./components/Dashboard/AddProduct";
import Dashboard from "./components/Dashboard/Dashboard";
import ManageOrder from "./components/Dashboard/ManageOrder";
import ManageProduct from "./components/Dashboard/ManageProduct";
import ManageUsers from "./components/Dashboard/ManageUsers";
import MyOrder from "./components/Dashboard/MyOrder";
import MyProfile from "./components/Dashboard/MyProfile";
import MyReview from "./components/Dashboard/MyReview";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Payment from "./components/Payment/Payment";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Shared/Footer";
import Navbar from "./components/Shared/Navbar";
import NotFound from "./components/Shared/NotFound";
import RequireAdmin from "./components/Shared/RequireAdmin";
import RequireAuth from "./components/Shared/RequireAuth";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route
          path="/checkout/:id"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/payment/:id"
          element={
            <RequireAuth>
              <Payment />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
          <Route
            path="addproduct"
            element={
              <RequireAdmin>
                <AddProduct></AddProduct>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manage"
            element={
              <RequireAdmin>
                <ManageOrder></ManageOrder>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <ManageUsers></ManageUsers>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageproduct"
            element={<ManageProduct></ManageProduct>}
          ></Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
