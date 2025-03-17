import React from 'react';
import AllCustomers from '../Conponents/Tables/AllCustomers';
import "./Styles/customersstyle.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck, faUserPlus, faUsers, faUserTimes } from '@fortawesome/free-solid-svg-icons';
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

import { motion } from "framer-motion";  // ✅ FIXED: Correct import

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
  hover: { scale: 1.03, transition: { duration: 0.3 } }
};


const data = [
  { month: "Jan", customers: 15 },
  { month: "Feb", customers: 30 },
  { month: "Mar", customers: 45 },
  { month: "Apr", customers: 25 },
  { month: "May", customers: 50 },
  { month: "Jun", customers: 60 },
  { month: "Jul", customers: 80 },
  { month: "Aug", customers: 75 },
  { month: "Sep", customers: 90 },
  { month: "Oct", customers: 110 },
  { month: "Nov", customers: 120 },
  { month: "Dec", customers: 150 },
];
const topCustomers = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@email.com",
    totalSpend: 2500,
    avatar: "https://i.pravatar.cc/50?img=1",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@email.com",
    totalSpend: 2100,
    avatar: "https://i.pravatar.cc/50?img=2",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael.brown@email.com",
    totalSpend: 1800,
    avatar: "https://i.pravatar.cc/50?img=3",
  },
  {
    id: 4,
    name: "Emily Johnson",
    email: "emily.johnson@email.com",
    totalSpend: 1600,
    avatar: "https://i.pravatar.cc/50?img=4",
  },
  {
    id: 5,
    name: "David Wilson",
    email: "david.wilson@email.com",
    totalSpend: 1400,
    avatar: "https://i.pravatar.cc/50?img=5",
  },
];

const Customers = () => {
  return (
    <div className='customers-mainpage'>

      {/* Customer Overview Section */}
      <div className="customer-overview">

        {/* Total Customers */}
        <motion.div 
          className="overview-card-customer total"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <FontAwesomeIcon icon={faUsers} className="card-icon" />
          <div>
            <h3>320</h3>
            <p>Total Customers</p>
          </div>
        </motion.div>

        {/* Active Customers */}
        <motion.div 
          className="overview-card-customer active"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <FontAwesomeIcon icon={faUserCheck} className="card-icon" />
          <div>
            <h3>280</h3>
            <p>Active Customers</p>
          </div>
        </motion.div>

        {/* Inactive Customers */}
        <motion.div 
          className="overview-card-customer inactive"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <FontAwesomeIcon icon={faUserTimes} className="card-icon" />
          <div>
            <h3>40</h3>
            <p>Inactive Customers</p>
          </div>
        </motion.div>

        {/* New Customers This Month */}
        <motion.div 
          className="overview-card-customer new"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <FontAwesomeIcon icon={faUserPlus} className="card-icon" />
          <div>
            <h3>15</h3>
            <p>New Sign-ups</p>
          </div>
        </motion.div>

      </div>





      <div className="top-customers">
      <h2>
        <FontAwesomeIcon icon={faCrown} className="top-icon" /> Top Customers
      </h2>
      <div className="top-customers-list">
        {topCustomers.map((customer, index) => (
          <motion.div
            key={customer.id}
            className="customer-card"
            initial={{ opacity: 0, y: 50, x:-50 }}
            animate={{ opacity: 1, y: 0,x:0 }}
            transition={{ duration: 1, delay: index * 0.1 }}
          >
            <img src={customer.avatar} alt={customer.name} className="avatar" />
            <div className="customer-info">
              <h4>{customer.name}</h4>
              <p>{customer.email}</p>
            </div>
            <span className="spend">Total spend : ${customer.totalSpend}</span>
          </motion.div>
        ))}
      </div>
    </div>










    <motion.div
  className="growth-chart"
  initial={{ opacity: 0, y: 50,  width:"0" }}
  animate={{ opacity: 1, y: 0,width:"100%"}}
  transition={{ duration: 1 }}
>
  <h2>📈 Customer Growth Over Time</h2>
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="customers" stroke="#3498db" strokeWidth={3} />
    </LineChart>
  </ResponsiveContainer>
</motion.div>  












      {/* All Customers Table */}
      <AllCustomers />

    </div>
  );
}

export default Customers;
