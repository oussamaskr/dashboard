import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSidebar } from "../../Contexts/SidebarProvider";
import "../Sidebar/sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faChartPie, faUsers, faBox, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import logo from "../../Assets/logo2.png"; // Import logo directly

function Sidebar() {
  const { isOpen } = useSidebar();
  const [hideLabel, setHideLabel] = useState(window.innerWidth <= 1280 && window.innerWidth > 850);

  useEffect(() => {
    const handleResize = () => {
      setHideLabel(window.innerWidth <= 1280 && window.innerWidth > 850);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call function on load to set the correct state

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { path: "/Dashboard", icon: faDashboard, label: "Overview" },
    { path: "/Customers", icon: faUsers, label: "Customers" },
    { path: "/Orders", icon: faBox, label: "Orders" },
    { path: "/Products", icon: faCartShopping, label: "Products" },
    { path: "/Analytics", icon: faChartPie, label: "Analytics" },
  ];

  return (
    <aside className={`${isOpen ? "expanded" : "collapsed"}`}>
      <div className='logodashboard'>
        <img src={logo} alt='Logo' width="125px" />
      </div>

      <ul className='sidebar-listes'>
        <h2>Menu</h2>
        {menuItems.map(({ path, icon, label }) => (
          <li key={path}>
            <NavLink to={path} className="navs">
              <FontAwesomeIcon icon={icon} className='fasidebaricon' />
              {!hideLabel && <p>{label}</p>} {/* Hide label when width is between 1280 and 850 */}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
