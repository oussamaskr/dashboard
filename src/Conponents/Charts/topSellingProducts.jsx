import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Iphone_16 from "../../Assets/Products/Iphone 16.jpg"
const topSellingProducts = [
  { id: 1, name: "Nike Air Max", category: "Shoes", sales: 120, revenue: 6000, image: "https://via.placeholder.com/80" },
  { id: 2, name: "Adidas Ultraboost", category: "Shoes", sales: 100, revenue: 5000, image: "https://via.placeholder.com/80" },
  { id: 3, name: "Apple Iphone 16", category: "Electronics", sales: 90, revenue: 13500, image: Iphone_16 },
  { id: 4, name: "Samsung Galaxy S23", category: "Electronics", sales: 75, revenue: 45000, image: "https://via.placeholder.com/80" },
  { id: 5, name: "Levi's Denim Jacket", category: "Clothing", sales: 60, revenue: 3600, image: "https://via.placeholder.com/80" },
];

const TopSellingProducts = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      className="top-selling-products"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>🏆 Top-Selling Products</h2>

      {isMobile ? (
        // 🔹 Mobile View: Card Layout
        <div className="top-products">
          {topSellingProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="product-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="rank">{index + 1}️⃣</div>
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-details">
                <h3>{product.name}</h3>
                <p>Sales: <strong>{product.sales}</strong></p>
                <p>Revenue: <strong>${product.revenue.toLocaleString()}</strong></p>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        // 🔹 Desktop View: Table Layout
        <table className="top-products-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Product</th>
              <th>Category</th>
              <th>Sales</th>
              <th>Revenue ($)</th>
            </tr>
          </thead>
          <tbody>
            {topSellingProducts.map((product, index) => (
              <tr key={product.id}>
                <td>#{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.sales}</td>
                <td>${product.revenue.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </motion.div>
  );
};

export default TopSellingProducts;
