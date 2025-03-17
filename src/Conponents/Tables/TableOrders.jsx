import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Styles/tableorder.css"
function TableOrders() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const ordersPerPage = 8;
    const orders = [
        { id: 101, customer: "Sakhri Wail", email: "wail@email.com", total: 350, status: "Shipped", date: "2024-02-20" },
        { id: 102, customer: "Jane Smith", email: "jane@email.com", total: 150, status: "Pending", date: "2024-02-21" },
        { id: 103, customer: "Michael Brown", email: "michael@email.com", total: 500, status: "Cancelled", date: "2024-02-19" },
        { id: 104, customer: "Emily Johnson", email: "emily@email.com", total: 200, status: "Shipped", date: "2024-02-18" },
        { id: 105, customer: "Omar Iheb", email: "omar@email.com", total: 700, status: "Shipped", date: "2024-02-16" },
        { id: 106, customer: "Amani Sakhri", email: "amani@email.com", total: 120, status: "Pending", date: "2024-02-14" },
        { id: 107, customer: "Romeissa Sekhri", email: "romeissa@email.com", total: 820, status: "Delivered", date: "2024-02-12" },
        { id: 108, customer: "Bensalem Iskander", email: "iskander@email.com", total: 95, status: "Cancelled", date: "2024-02-10" },
        { id: 109, customer: "Naruto Uzumaki", email: "naruto@email.com", total: 900, status: "Shipped", date: "2024-02-09" },
        { id: 110, customer: "Itachi Uchiha", email: "itachi@email.com", total: 450, status: "Pending", date: "2024-02-08" },
        { id: 111, customer: "Zermane Mostafa", email: "zermane@email.com", total: 550, status: "Delivered", date: "2024-07-27" },
        { id: 112, customer: "Bellaga Ilyes", email: "Bellagha@email.com", total: 1250, status: "Pending", date: "2024-12-27" },
        { id: 113, customer: "Ghelis Akram", email: "GHelis@email.com", total: 1200, status: "Shipped", date: "2025-03-07" },
      ];



        // Filtering logic
  const filteredOrders = orders.filter(order => {
    const matchesSearch =
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toString().includes(searchTerm);

    const matchesStatus = filterStatus === "All" || order.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);
  return (
    <div className="orders-container">
    {/* Search & Filter */}
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search Order ID, Name, Email..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
        <option value="All">All Orders</option>
        <option value="Shipped">Shipped</option>
        <option value="Pending">Pending</option>
        <option value="Cancelled">Cancelled</option>
        <option value="Delivered">Delivered</option>
      </select>
    </div>

    {/* Orders Table */}
    <table className="orders-table">
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Customer</th>
          <th>Email</th>
          <th>Total ($)</th>
          <th>Status</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {currentOrders.map((order) => (
          <motion.tr
            key={order.id}
            whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
          >
            <td>{order.id}</td>
            <td>{order.customer}</td>
            <td>{order.email}</td>
            <td>${order.total}</td>
            <td>
              <span className={`status ${order.status.toLowerCase()}`}>
                {order.status}
              </span>
            </td>
            <td>{order.date}</td>
          </motion.tr>
        ))}
      </tbody>
    </table>

    {/* Pagination */}
    {totalPages > 1 && (
      <div className="pagination">
        <button 
          onClick={() => setCurrentPage(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span> Page {currentPage} of {totalPages} </span>

        <button 
          onClick={() => setCurrentPage(currentPage + 1)} 
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    )}
  </div>
  )
}

export default TableOrders
