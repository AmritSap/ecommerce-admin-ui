import React from "react";
import { Link } from "react-router-dom";
import "./sideBarNav.style.css";
export const SideBarNav = () => {
  return (
    <div className="sidebar-nav">
      <ul>
        <li>
          <Link to="/dashboard">
            <i className="fas fa-tachometer-alt"></i>Dashboard
          </Link>
        </li>
        <li>
          <Link to="/category">
            <i className="fas fa-sitemap"></i>Category
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/product">
            <i className="fas fa-table"></i>Products
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/dashboard">
            <i className="fas fa-shopping-cart"></i>Orders
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/dashboard">
            <i className="fas fa-tachometer-alt"></i>Users
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/dashboard">
            <i className="fas fa-cogs"></i>Account
          </Link>
        </li>
      </ul>
    </div>
  );
};
