import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import "../Charts/StyleChart/orders.css"

const ordersData = [
  { month: "Jan", orders: 320 },
  { month: "Feb", orders: 450 },
  { month: "Mar", orders: 280 },
  { month: "Apr", orders: 500 },
  { month: "May", orders: 610 },
  { month: "Jun", orders: 420 },
  { month: "Jul", orders: 730 },
  { month: "Aug", orders: 800 },
  { month: "Sep", orders: 670 },
  { month: "Oct", orders: 850 },
  { month: "Nov", orders: 950 },
  { month: "Dec", orders: 1020 },
];

const OrdersChart = () => {
  return (
    <div className="orders-chart">
      <h3>📦 Monthly Orders</h3>
      <div className="container-chart">
      <ResponsiveContainer width="100%" height={370}>
        <AreaChart data={ordersData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="orders" stroke="#2c3e50" fill="#e77e22" opacity={0.7} />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OrdersChart;
