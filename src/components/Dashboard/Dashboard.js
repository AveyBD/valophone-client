import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="dashDrawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h2 className="text-4xl text-primary font-bold">Dashboard</h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashDrawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to={"/dashboard"}>My Order</Link>
          </li>
          <li>
            <Link to={"/dashboard/review"}>My Review</Link>
          </li>
          <li>
            <Link to={"/dashboard/profile"}>My Profile</Link>
          </li>
          <li>
            <Link to={"/dashboard/manageproduct"}>Manage Product</Link>
          </li>
          <li>
            <Link to={"/dashboard/manage"}>Manage Order</Link>
          </li>
          <li>
            <Link to={"/dashboard/addproduct"}>Add Product</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
