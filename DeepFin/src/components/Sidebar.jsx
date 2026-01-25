import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Briefcase, Users, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="logo-container">
          {isCollapsed ? (
            <h1 className="logo mini">D<span className="dot">.</span></h1>
          ) : (
            <h1 className="logo">DeepFin<span className="dot">.</span></h1>
          )}
        </div>
        <button className="collapse-btn" onClick={toggleSidebar}>
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
      
      <nav className="nav-menu">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} title="Home">
              <Home size={22} />
              {!isCollapsed && <span>Home</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} title="Services">
              <Briefcase size={22} />
              {!isCollapsed && <span>Services</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/careers" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} title="Careers">
              <Users size={22} />
              {!isCollapsed && <span>Careers</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} title="Contact">
              <Mail size={22} />
              {!isCollapsed && <span>Contact</span>}
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        {!isCollapsed && <p>© 2026 DeepFin AI</p>}
      </div>
    </aside>
  );
};

export default Sidebar;
