import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import "../Charts/StyleChart/revenue.css"
const revenueData = [
  { month: "Jan", revenue: 5000 },
  { month: "Feb", revenue: 7200 },
  { month: "Mar", revenue: 4000 },
  { month: "Apr", revenue: 8500 },
  { month: "May", revenue: 9200 },
  { month: "Jun", revenue: 6800 },
  { month: "Jul", revenue: 10200 },
  { month: "Aug", revenue: 11000 },
  { month: "Sep", revenue: 9700 },
  { month: "Oct", revenue: 12500 },
  { month: "Nov", revenue: 13200 },
  { month: "Dec", revenue: 14500 },
];
const RevenueChart = () => {
    return (

        <div className="revenue-chart">
        <h3>💰 Monthly Revenue</h3>
        <div className="container-chart" style={{ width: "100%" }}>

        <ResponsiveContainer width="100%" height={370}>
          <BarChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="revenue" fill="#3498db" barSize={40} />
          </BarChart>
        </ResponsiveContainer>
        </div>
      </div>



    )}
    export default RevenueChart;