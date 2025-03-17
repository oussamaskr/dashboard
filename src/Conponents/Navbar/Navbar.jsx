import React, { useState, useRef, useEffect } from "react";
import "../Navbar/navbar.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";

import {faDashboard,faUsers,faChartPie,faBox,faCartShopping,
  faArrowDown,
  faArrowUp,
  faBars,
  faBarsStaggered,
  faBell,
  faMessage,
  faSearch,
  faClose,
  faShoppingCart,
  faGear,
  faDoorOpen,
  faUser,
  faMoon,
  faTag

} from "@fortawesome/free-solid-svg-icons";
import { useSidebar } from "../../Contexts/SidebarProvider";

function Navbar({onLogout}) {
  const profileref = useRef(null);
  const buttonRef = useRef(null); // Track the button click
/*********************************** */
  const notifsref = useRef(null);
  const buttonnotifRef = useRef(null); // Track the button click
/************************************** */
/*********************************** */
  const { toggleSidebar, isOpen  } = useSidebar();
  const [show_profile, setShowProfile] = useState(false);
  const [show_notifs, setShowNotifs] = useState(false);
  const [issticky, setIsSticky] = useState(false);

  const [showburger, setShowBurger] = useState(false);
const burgerref = useRef(null);
const btnburgerRef = useRef(null); // Track the button click

/****************************************************** */

useEffect(() => {
  function handleClickOutside(e) {
    if (burgerref.current && !burgerref.current.contains(e.target)
      &&  !btnburgerRef.current?.contains(e.target)
    ){  // Ensure the button click does not close it
      setShowBurger(false);
    }
    
    if (profileref.current && !profileref.current.contains(e.target) &&
        !buttonRef.current?.contains(e.target)) {
      setShowProfile(false);
    }

    if (notifsref.current && !notifsref.current.contains(e.target) &&
        !buttonnotifRef.current?.contains(e.target)) {
      setShowNotifs(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);
  
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
},  []);

  

  useEffect(()=>
  {
    window.addEventListener("scroll", () =>
      {
        if (window.scrollY >10) {
          setIsSticky(true);
          } else {
            setIsSticky(false);
            }
          }
        )
  })
   
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New order received!", time: "2024-02-28T10:30:00", pinned: false },
    { id: 2, message: "Product out of stock!", time: "2024-02-28T09:45:00", pinned: false },
    { id: 3, message: "Order shipped", time: "2024-02-28T11:45:00", pinned: false },

  ])
  console.log(notifications)
  // Auto-scroll to the bottom when new notifications come in
  useEffect(() => {
    if (show_notifs.current) {
      show_notifs.current.scrollTop = setShowNotifs.current.scrollHeight;
    }
  }, [notifications, show_notifs]); // Runs when notifications update
  const deleteNotification = (id) => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };
  const togglePinNotification = (id) => {
    setNotifications((prev) => {
      return prev
        .map((notif) =>
          notif.id === id ? { ...notif, pinned: !notif.pinned } : notif
        )
        .sort((a, b) => {
          if (a.pinned === b.pinned) {
            return new Date(b.time) - new Date(a.time); // Sort unpinned notifications by time (newest first)
          }
          return b.pinned - a.pinned; // Pinned notifications always at the top
        });
    });
  };
  
  return (
        <nav className={`${isOpen ? "expanded" : "collapsed"} ${issticky ? "hide":""}`}>

              <div className="nav-left"
              ref={btnburgerRef}
                onClick={(e) => {
                  e.stopPropagation(); // Prevents event from being captured by handleClickOutside
                  setShowBurger(prev => !prev);
                  setShowNotifs(false);
                  setShowProfile(false);
                }}
              >
                <FontAwesomeIcon icon={showburger ? faClose : faBars} className="bars" />
              </div>


      <div className="toggle-container" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBarsStaggered} />
      </div>

      <div className="search_container">
        <FontAwesomeIcon icon={faSearch} className="fasearch" />
        <input type="text" placeholder="Search" />
      </div>

      <div className="notif-pofile-section">
        <div className="notifications-section">
          <div
            className="bells_notif"
            onClick={() => {
              setShowNotifs(!show_notifs);
              setShowProfile(false);

            }}
            ref={buttonnotifRef}
          >
            <FontAwesomeIcon icon={faBell} className="fabell" />
            <span>{notifications.length}</span>
          </div>
          <div className={`notif-container ${show_notifs ? "show" : ""}`} ref={notifsref}>
            <h4>Notifications</h4>

            {notifications.length === 0 ? (
          <p className="no-notifications">No new notifications</p>
        ) : (
          <ul>
          <AnimatePresence>
            {notifications.map((notification) => (
              <motion.li
                key={notification.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                layout
                transition={{ duration: 0.3 }}
                className={notification.pinned ? "pinned" : ""}

              >
                <div className="notification-details">
                  <FontAwesomeIcon icon={faMessage} className="icon"></FontAwesomeIcon>
                  <p>{notification.message}</p>
                </div>
                <span className="time">{new Date(notification.time).toLocaleTimeString()}</span>
                <div className="delete-pin">
                  <FontAwesomeIcon
                    icon={faTag}
                    onClick={() => togglePinNotification(notification.id)}
                  />
                  <FontAwesomeIcon
                    icon={faClose}
                    onClick={() => deleteNotification(notification.id)}
                  />
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
        )}









          </div>
        </div>



        <div className="profile-section">
          <div
            className="profilepic_name"
            onClick={(e) => {
              setShowProfile((prev) => !prev);
              setShowNotifs(false);
            }}
            ref={buttonRef} // Reference the button
          >
            <img src={require("../../Assets/profile-pic.webp")} alt="profile" loading="lazy"/>
            <p>
                                   Oussama
              <FontAwesomeIcon icon={show_profile ? faArrowUp : faArrowDown} className="faarr" />
            </p>
          </div>
          <div className={`prof-container ${show_profile ? "display" : ""}`} ref={profileref}>
          <ul>
          <li>
            <FontAwesomeIcon icon={faUser} className="icon" /> View Profile
          </li>
          <li>
            <FontAwesomeIcon icon={faShoppingCart} className="icon" /> Orders
          </li>
          <li>
            <FontAwesomeIcon icon={faGear} className="icon" /> Settings
          </li>
          <li>
            <FontAwesomeIcon icon={faMoon} className="icon" /> Dark Mode
          </li>
          <li className="logout" onClick={onLogout}>
            <FontAwesomeIcon icon={faDoorOpen} className="icon" /> Logout
          </li>
        </ul>
        </div>
        </div>
      </div>

      <div className={`menu-burger ${showburger ? "display" : ""} `} ref={burgerref}>
  
        <ul className='sidebar-listes'>
          <h2>Menu</h2>
          <li>
            <NavLink to="/Dashboard" className="navs" onClick={ () =>setShowBurger(false)}>
              <FontAwesomeIcon icon={faDashboard} className='fasidebaricon'  />
              <p>Overview</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Customers" className="navs" onClick={ () =>setShowBurger(false)}>
              <FontAwesomeIcon icon={faUsers} className='fasidebaricon' />
              <p>Customers</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Orders" className="navs" onClick={ () =>setShowBurger(false)}> 
              <FontAwesomeIcon icon={faBox} className='fasidebaricon' />
              <p>Orders</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Products" className="navs" onClick={ () =>setShowBurger(false)}>
              <FontAwesomeIcon icon={faCartShopping} className='fasidebaricon' />
              <p>Products</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Analytics" className="navs" onClick={ () =>setShowBurger(false)}>
              <FontAwesomeIcon icon={faChartPie} className='fasidebaricon' />
              <p>Analytics</p>
            </NavLink>
          </li>
        </ul>
        
      </div>
    </nav>
  );
}

export default Navbar;
