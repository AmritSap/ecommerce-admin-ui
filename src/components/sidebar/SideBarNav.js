import React from 'react'
import './sideBarNav.style.css'
export const SideBarNav = () => {
    return (
        <div className="sidebar-nav">
            <ul>
                <li>Dashboard</li>
                <li><a href="/category">Category</a></li>
                <li>Products</li>
                <li>Orders</li>
                <li>Users</li>
                <li>Account</li>
            </ul>
        </div>
    )
}
