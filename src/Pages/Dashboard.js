import React from 'react'
import "../Pages/Styles/dashboard.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart,Area,ResponsiveContainer } from 'recharts';
import { useSidebar } from "../Contexts/SidebarProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useEffect } from 'react';
import SalesChart from '../Conponents/Charts/SalesChart';
import RevenueChart from '../Conponents/Charts/RevenueChart';
import OrdersChart from '../Conponents/Charts/OrdersChart';
import RecentOrders from '../Conponents/Charts/RecentOrders';

function Dashboard() {
  
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 5800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 2090,
    pv: 4300,
    amt: 2100,
  },
]
  const { isOpen } = useSidebar();

  return (
    <div className='dashboard-container'>
           <div className="dashboard_kpi">
      <div className="kpi-card sales"   >
      <div className="kpi-card__header">
      <img src={require('../Assets/Icons/shopping-bag.png')} alt='shopping-Bag'></img>
      <div className='kpi-card_infos'>
      <h4>Total Sales</h4>
      <p>1,200$</p>
      </div>
      </div>
    
   
<ResponsiveContainer className="respons_design"  width="100%" height={98} >
        <AreaChart
         
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
          
          className='areachart'
        >
          <Area type="monotone" dataKey="uv" stroke= "#2c3e50" fill="#2ecc71" strokeLinecap="round"/>
        </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="kpi-card" >
      <div className="kpi-card__header">
   <img src={require('../Assets/Icons/add-friend.png')} alt='User-Added'></img>
        <div className='kpi-card_infos'>

         <h4>New Users</h4>
        <p>350</p>
        </div>
        </div>
        <ResponsiveContainer className="respons_design"  width="100%" height={98}>

        <AreaChart
 
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <Area type="monotone" dataKey="pv" stroke="#2c3e50" fill="#32495f" />
        </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="kpi-card"  >

      <div className='kpi-card__header'> 

<img src={require("../Assets/Icons/money.png")} alt='Money-bill'></img>  
          <div className='kpi-card_infos'>
      <h4>Total Revenue</h4>
        <p>$24,500</p>
        </div>
        </div>

        <ResponsiveContainer className="respons_design"  width="100%" height={98}>


        <AreaChart
      
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <Area type="monotone" dataKey="amt" stroke="#2c3e50" fill="#3498db" />
        </AreaChart>
          </ResponsiveContainer>
      </div>

    </div>
    <div className='orders-revenue' >
          <RevenueChart />
          <OrdersChart></OrdersChart>
          </div>
          <div className='recentOrders_sales'>
          <SalesChart></SalesChart>
          <RecentOrders />
          </div>
    </div>
  )
}

export default Dashboard
