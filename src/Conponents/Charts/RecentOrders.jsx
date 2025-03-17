import React, { useState } from "react";
import "../Charts/StyleChart/recent.css";

const recentOrders = [
  { id: "#1001", customer: "John Doe", date: "2025-02-20", status: "Pending", total: "$120.00" },
  { id: "#1002", customer: "Jane Smith", date: "2025-02-19", status: "Shipped", total: "$90.00" },
  { id: "#1003", customer: "Michael Brown", date: "2025-02-18", status: "Delivered", total: "$150.00" },
  { id: "#1004", customer: "Emily Johnson", date: "2025-02-17", status: "Pending", total: "$60.00" },
  { id: "#1005", customer: "David Wilson", date: "2025-02-16", status: "Shipped", total: "$200.00" },
  { id: "#1006", customer: "David ken", date: "2025-02-22", status: "Shipped", total: "$350.00" },

];

function RecentOrders() {
  const [filter, setFilter] = useState("All");

  // Filter orders based on the selected status
  const filteredOrders = filter === "All" 
    ? recentOrders 
    : recentOrders.filter(order => order.status === filter);

  return (
    <div className="recent-orders">
      <h3>🛒 Recent Orders</h3>

      {/* Filter Buttons */}
      <div className="filter-buttons">

         <div className="filtering_btns"> 
        {["All", "Pending", "Shipped", "Delivered"].map((status) => (
          <button 
            key={status} 
            className={filter === status ? "active" : ""} 
            onClick={() => setFilter(status)}
          >
            {status}
          </button>
        ))}
        </div>
        <div className="see_more">
          <button className="active" >See More</button>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order, index) => (
            <tr key={index}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.date}</td>
              <td>
                <span className={`status ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </td>
              <td>{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentOrders;
