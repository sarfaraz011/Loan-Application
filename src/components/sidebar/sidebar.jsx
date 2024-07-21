import React from 'react'
import {Link,NavLink } from "react-router-dom"
import { FaHome, FaLayerGroup, FaBook, FaChalkboardTeacher, FaUsers, FaCog, FaChartBar } from 'react-icons/fa';
import "./sidebar.css"

function sidebar() {
  return (
    <aside className="mainSidebar">
    <Link className="linkTags">
     
      <span>Loan Application</span>
    </Link>

    <div className="menuLinksContainer">
      <nav className="navBar">
    
                
    
                <Link className="linkTags" to="/">
                <FaChartBar size={25} />
    
                    <span>Dashboard</span>
                </Link>
    
                <Link className="linkTags" to="/LoanApplication">
                <FaBook size={25} />
    
                    <span>Loanapplication</span>
                </Link>
    
                <Link className="linkTags" to="/LoanReports">
                <FaChalkboardTeacher size={25} />
    
                    <span>LoanReport</span>
                </Link>
      </nav>

      <div>
        <div className="">
          <Link to="#" className="linkTags">
            <img
              className="object-cover rounded-full h-7 w-7"
              src="https://media.istockphoto.com/id/1597475039/photo/abstract-colorful-glass-background.webp?b=1&s=170667a&w=0&k=20&c=G6-on4l4zg7I-HIDJrVS5vSYm-laN6BEkiaaKn8P0LU="
              alt="avatar"
            />
            <span >Sarfaraz</span>
          </Link>
        </div>
      </div>
    </div>
  </aside>
  )
}

export default sidebar