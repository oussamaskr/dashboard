import React from 'react'
import "../Pages/Styles/orderstyle.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faShippingFast, faClock, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import TableOrders from '../Conponents/Tables/TableOrders';
const Orders = () => {
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
     
      };

      const orderData = {
        total: 1250,
        shipped: 980,
        pending: 150,
        cancelled: 120,
      };
  return (
    <div className='order-page'>
       <div className="orders-overview">
      {/* Total Orders */}
      <motion.div 
        className="overview-card total"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <FontAwesomeIcon icon={faBox} className="card-icon" />
        <div>
          <h3>{orderData.total}</h3>
          <p>Total Orders</p>
        </div>
      </motion.div>

      {/* Shipped Orders */}
      <motion.div 
        className="overview-card shipped"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <FontAwesomeIcon icon={faShippingFast} className="card-icon" />
        <div>
          <h3>{orderData.shipped}</h3>
          <p>Shipped Orders</p>
        </div>
      </motion.div>

      {/* Pending Orders */}
      <motion.div 
        className="overview-card pending"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <FontAwesomeIcon icon={faClock} className="card-icon" />
        <div>
          <h3>{orderData.pending}</h3>
          <p>Pending Orders</p>
        </div>
      </motion.div>

      {/* Cancelled Orders */}
      <motion.div 
        className="overview-card cancelled"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <FontAwesomeIcon icon={faTimesCircle} className="card-icon" />
        <div>
          <h3>{orderData.cancelled}</h3>
          <p>Cancelled Orders</p>
        </div>
      </motion.div>
    </div>

        {/* orders table */}
        
            <TableOrders></TableOrders>
        
        
            </div>
  )
}

export default Orders