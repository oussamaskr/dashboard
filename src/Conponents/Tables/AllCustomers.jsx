import React, { useState, useEffect } from "react";
import "../Tables/Styles/customers.css";

function AllCustomers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [customersPerPage, setCustomersPerPage] = useState(10); // Change this as needed
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800); // Check screen width
  
  // New state for filtering
  const [filters, setFilters] = useState({
    status: "All",
    minSpend: "",
    maxSpend: ""
  });

  const customers = [
    { id: 1001, name: "Sakhri Wail", email: "john.doe@email.com", phone: "+123 456 7890", orders: 5, totalSpend: 6500, status: "Active" },
    { id: 1002, name: "Jane Smith", email: "jane.smith@email.com", phone: "+321 654 0987", orders: 3, totalSpend: 300, status: "Inactive" },
    { id: 1003, name: "Michael Brown", email: "michael.brown@email.com", phone: "+987 654 3210", orders: 8, totalSpend: 1200, status: "Active" },
    { id: 1004, name: "Emily Johnson", email: "emily.johnson@email.com", phone: "+456 789 0123", orders: 2, totalSpend: 150, status: "Active" },
    { id: 1005, name: "Emily Watson", email: "emily.watson@email.com", phone: "+456 089 0523", orders: 7, totalSpend: 120, status: "Active" },
    { id: 1006, name: "Emily Clark", email: "emily.cl@email.com", phone: "+456 789 4123", orders: 1, totalSpend: 70, status: "Inactive" },
    { id: 1008, name: "Sakhri Amani", email: "skr.amani@email.com", phone: "+456 989 4523", orders: 5, totalSpend: 670, status: "Active" },
    { id: 1009, name: "Omar Iheb", email: "iheb.omar@email.com", phone: "+456 789 0123", orders: 2, totalSpend: 1150, status: "Active" },
    { id: 1010, name: "Sekhri Romeissa", email: "meissa.gmail@email.com", phone: "+343 089 6358", orders: 7, totalSpend: 220, status: "Active" },
    { id: 1011, name: "Naruto Uzumaki", email: "sasuke.cl@email.com", phone: "+456 245 4123", orders: 1, totalSpend: 870, status: "Inactive" },
    { id: 1012, name: "Bensalem Iskander", email: "sIskander@gmail.com", phone: "+456 858 1010", orders: 5, totalSpend: 144, status: "Active" },
    // Add more dummy data if needed
  ];

  // Update screen width on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 800) {
        setIsMobile(true);
        setCustomersPerPage(4);
      } else {
        setCustomersPerPage(10);
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Apply filtering first: searchTerm and additional filters
  const filteredCustomers = customers.filter(customer => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesStatus =
      filters.status === "All" || customer.status === filters.status;
      
    const matchesMinSpend =
      filters.minSpend === "" || customer.totalSpend >= parseFloat(filters.minSpend);
      
    const matchesMaxSpend =
      filters.maxSpend === "" || customer.totalSpend <= parseFloat(filters.maxSpend);

    return matchesSearch && matchesStatus && matchesMinSpend && matchesMaxSpend;
  });

  // Apply pagination to the filtered customers
  const totalPages = Math.ceil(filteredCustomers.length / customersPerPage);
  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = filteredCustomers.slice(indexOfFirstCustomer, indexOfLastCustomer);

  // Reset to page 1 if search or filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filters]);

  // Handle change for the filter form
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  return (
    <div className="customers-container">
      
      {/* Filter & Segment Section */}
      <div className="filter-section">
        <h2>🔍 All Customers  </h2>
      
        <input
        type="text"
        placeholder="Search customers..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
  <div className="filter-controls">
          {/* Status Filter */}
          <select name="status" value={filters.status} onChange={handleFilterChange}>
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          
          {/* Min Spend */}
          <input
            type="number"
            name="minSpend"
            placeholder="Min Spend ($)"
            value={filters.minSpend}
            onChange={handleFilterChange}
            min={10}
          />
          
          {/* Max Spend */}
          <input
            type="number"
            name="maxSpend"
            placeholder="Max Spend ($)"
            value={filters.maxSpend}
            onChange={handleFilterChange}
          />
        </div>
      </div>

      {/* Search Input */}
  
      {/* Desktop: Table Layout */}
      {!isMobile ? (
        <table className="table-customers">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Orders</th>
              <th>Total Spend</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentCustomers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>{customer.orders}</td>
                <td>${customer.totalSpend}</td>
                <td>
                  <span className={customer.status === "Active" ? "status-active" : "status-inactive"}>
                    {customer.status}
                  </span>
                </td>
                <td>
                  <button className="view-btn">View</button>
                  <button className="edit-btn">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        // Mobile: Cards Layout
        <div className="customers-list">
          {currentCustomers.map((customer) => (
            <div className="customer-card" key={customer.id}>
              <img 
                className="customer-avatar"
                src={`https://i.pravatar.cc/100?u=${customer.id}`} 
                alt={customer.name}
              />
              <h3>{customer.name}</h3>
              <p>Email: {customer.email}</p>
              <p>Phone: {customer.phone}</p>
              <p>Orders: {customer.orders}</p>
              <p>Total Spend: <strong>${customer.totalSpend}</strong></p>
              <p className={`status ${customer.status === "Active" ? "status-active" : "status-inactive"}`}>
                {customer.status}
              </p>
              <div className="actions">
                <button className="view-btn">View</button>
                <button className="edit-btn">Edit</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination Controls */}
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
  );
}

export default AllCustomers;
