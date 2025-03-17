import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const salesData = {
  monthly: [
    { month: "Jan", sales: 4000 },
    { month: "Feb", sales: 5000 },
    { month: "Mar", sales: 7000 },
    { month: "Apr", sales: 6500 },
    { month: "May", sales: 8000 },
    { month: "Jun", sales: 9000 },
    { month: "Jul", sales: 11000 },
    { month: "Aug", sales: 10500 },
    { month: "Sep", sales: 9500 },
    { month: "Oct", sales: 11500 },
    { month: "Nov", sales: 12000 },
    { month: "Dec", sales: 14000 },
  ],
  weekly: [
    { week: "Week 1", sales: 1500 },
    { week: "Week 2", sales: 2000 },
    { week: "Week 3", sales: 2500 },
    { week: "Week 4", sales: 3000 },
  ],
};

const SalesPerformanceChart = () => {
  const [timeFrame, setTimeFrame] = useState("weekly"); // Default: Monthly

  return (
    <motion.div
      className="sales-chart"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >

      {/* Timeframe Selector */}
        <div className="container-filter">
        <div className="tabs">
        
          <input type="radio" id="radio-1" name="tabs" defaultChecked  onChange={()=>setTimeFrame("weekly")} />
          <label className="tab" htmlFor="radio-1">Weekly</label>
          <input type="radio" id="radio-2" name="tabs" onChange={()=>setTimeFrame("monthly")} />
          <label className="tab" htmlFor="radio-2">Monthly</label>
      
          <span className="glider" />
        </div>
      </div>

      <div className="salesperf-chart">

      <h2>📉 Sales Performance Over Time</h2>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={salesData[timeFrame]}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey={timeFrame === "monthly" ? "month" : "week"} />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#3498db" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
      </div>

    </motion.div>
  );
};

export default SalesPerformanceChart;
