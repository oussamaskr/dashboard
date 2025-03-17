import React from 'react'
import "./Styles/analytics.css"
import SalesPerformanceChart from '../Conponents/Charts/SalesPerformanceChart'
import TopSellingProducts from '../Conponents/Charts/topSellingProducts'
import { motion } from "framer-motion";
import { faDollarSign, faShoppingCart,faUsers,faChartLine } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Analytics() {
    const keyMetrics = {
        totalRevenue: 125000, 
        totalOrders: 2540, 
        newCustomers: 320, 
        conversionRate: 3.5, // percentage
      };
      
  return (
    <div className='analytics-container'>
    <div className="key-metrics">
      {[
        { label: "Total Revenue", value: `$${keyMetrics.totalRevenue.toLocaleString()}`, icon: <FontAwesomeIcon icon={faDollarSign} /> },
        { label: "Total Orders", value: keyMetrics.totalOrders, icon: <FontAwesomeIcon icon={faShoppingCart}  /> },
        { label: "New Customers", value: keyMetrics.newCustomers, icon: <FontAwesomeIcon icon={faUsers}  /> },
        { label: "Conversion Rate", value: `${keyMetrics.conversionRate}%`, icon: <FontAwesomeIcon icon={faChartLine}  /> },
      ].map((metric, index) => (
        <motion.div
          key={index}
          className="metric-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: index * 0.2 }}
        >
          <div className="metric-icon">{metric.icon}</div>
          <h3>{metric.label}</h3>
          <p>{metric.value}</p>
        </motion.div>
      ))}
    </div>
    
        <SalesPerformanceChart />

        <TopSellingProducts />
    
    </div>
  )
}

export default Analytics