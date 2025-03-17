import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import "../Charts/StyleChart/sales.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faEllipsis } from "@fortawesome/free-solid-svg-icons";

const salesData = [
  { month: "Jan", sales: 1200 },
  { month: "Feb", sales: 2100 },
  { month: "Mar", sales: 800 },
  { month: "Apr", sales: 1600 },
  { month: "May", sales: 2500 },
  { month: "Jun", sales: 1900 },
  { month: "Jul", sales: 4500 },
  { month: "Aug", sales: 3000 },
  { month: "Sep", sales: 2300 },
  { month: "Oct", sales: 2800 },
  { month: "Nov", sales: 3100 },
  { month: "Dec", sales: 4000 },
];

const previousYearData = [
  { month: "Jan", sales: 1900 },
  { month: "Feb", sales: 2400 },
  { month: "Mar", sales: 2300 },
  { month: "Apr", sales: 3450 },
  { month: "May", sales: 1590 },
  { month: "Jun", sales: 2390 },
  { month: "Jul", sales: 3710 },
  { month: "Aug", sales: 750 },
  { month: "Sep", sales: 2640 },
  { month: "Oct", sales: 1820 },
  { month: "Nov", sales: 3900 },
  { month: "Dec", sales: 1980 },
];

function SalesChart() {
  const [showLastYearSales, setShowLastYearSales] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sales-chart">
      <h3>📈 Sales Trends</h3>

      {/* Ellipsis Menu */}
      <div className="ellipsis">
        <FontAwesomeIcon icon={faEllipsis} onClick={() => setMenuOpen(!menuOpen)} style={{cursor:"pointer"}} />
        
        {menuOpen && (
          <div className="last_year_sales">
            <button onClick={() => setShowLastYearSales(true)}>View Last Year’s Sales</button>
            <button onClick={() => setShowLastYearSales(false)}>Hide Last Year’s Sales</button>
          </div>
        )}
      </div>
      {menuOpen && (
      <div className="hint">
        <p>  <FontAwesomeIcon icon={faChartLine} style={{color:"#2ecc71"}} /> This Year’s Sales</p>
        <p>  <FontAwesomeIcon icon={faChartLine}  style={{color:"#3498db"}} /> Last Year’s Sales</p>

      </div>
    )}
      {/* Chart Container */}
      <div className="container-chart" style={{ width: "100%" }}>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={salesData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis domain={[0, Math.max(...salesData.map(d => d.sales), ...previousYearData.map(d => d.sales))]} />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#2ecc71" strokeWidth={2} />

          {showLastYearSales && (
            <Line type="monotone" dataKey="sales" data={previousYearData} stroke="#3498db" strokeWidth={2} />
          )}
        </LineChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
}

export default SalesChart;
