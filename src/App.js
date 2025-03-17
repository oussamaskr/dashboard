import { Routes, Route , Navigate} from 'react-router-dom';
import './App.css';
import Navbar from './Conponents/Navbar/Navbar';
import Sidebar from './Conponents/Sidebar/Sidebar';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Customers from "./Pages/Customers"

import { useState } from 'react';
import Orders from './Pages/Orders';
import Product from './Pages/Product';
import Analytics from './Pages/Analytics';
function App() {
  const [isauthentified, setIsauthentified] = useState(false);

  const handleLogin = () => {
    setIsauthentified(true);
  };
  const handleLogout = () => {
    setIsauthentified(false);
  };
  return (
    <div className="App">
      {isauthentified && <Navbar onLogout={handleLogout}/>}



        <div className="flex_container">
        {isauthentified && <Sidebar></Sidebar>}
          <Routes>
            <Route path="/" element={isauthentified ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />} />
            <Route path="/dashboard" element={isauthentified ? <Dashboard /> : <Navigate to="/" />} />
            <Route path="/Customers" element={isauthentified ? <Customers /> : <Navigate to="/" />} />
            <Route path="/Orders" element={isauthentified ?  <Orders/> : <Navigate to="/" />} />
            <Route path="/Products" element={isauthentified ?  <Product /> : <Navigate to="/" />} />
            <Route path="/Analytics" element={isauthentified ?  <Analytics /> : <Navigate to="/" />} />
      </Routes>
        </div>
    
    </div>
  );

}

export default App;
