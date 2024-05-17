import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { HiOutlineMenu } from "react-icons/hi";
import Logo from "../../Assets/Images/logo.svg";
import User from "../../Assets/Images/user.svg";
import { Link } from "react-router-dom";
import SearchIcon from "../../Assets/Icons/SearchIcon";
import NotificationIcon from "../../Assets/Icons/NotificationIcon";
import OffIcon from "../../Assets/Icons/OffIcon";
import { IoMdHome } from "react-icons/io";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const toggleOffcanvas = () => {
    setOffcanvasOpen(!offcanvasOpen);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  return (
    <>
      <nav
        className={
          scroll ? "navbar navbar-expand-lg" : "navbar navbar-expand-lg"
        }
      >
        <div className="container">
          <Link className="logo" to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler d-lg-none ms-auto pe-0"
            type="button"
            onClick={toggleOffcanvas}
          >
            <HiOutlineMenu />
          </button>

          <div className={`navbarOffset ${offcanvasOpen ? "show" : ""}`}>
            <div className="offset-header">
              <h5 className="offcanvas-title">
                <img src={Logo} alt="logo" />
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={toggleOffcanvas}
              ></button>
            </div>
            <div className="d-lg-flex align-items-center justify-content-end gap-4">
              <ul className="nav_list">
                <li className="nav-item dropdown">
                  <button
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Work
                  </button>
                  <ul className="dropdown-menu">
                    {/* <li>
                      <Link
                        to="/requests"
                        className="dropdown-item"
                        onClick={toggleOffcanvas}
                      >
                        Requests
                      </Link>
                    </li> */}
                    <li>
                      <Link
                        to="/work-orders"
                        className="dropdown-item"
                        onClick={toggleOffcanvas}
                      >
                        Corrective Work
                      </Link>
                    </li>
                    {/* <li>
                      <Link
                        to="/preventive-works"
                        className="dropdown-item"
                        onClick={toggleOffcanvas}
                      >
                        Preventive Work
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/work-schedule-templates"
                        className="dropdown-item"
                        onClick={toggleOffcanvas}
                      >
                        Schedule Templates
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/diagnosis-quotes"
                        className="dropdown-item"
                        onClick={toggleOffcanvas}
                      >
                        Diagnosis & Quotes
                      </Link>
                    </li> */}
                  </ul>
                </li>
                {/* <li className="nav-item">
                  <Link
                    to="/locations"
                    className="nav-link"
                    onClick={toggleOffcanvas}
                  >
                    Locations
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="" className="nav-link" onClick={toggleOffcanvas}>
                    Assets
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="" className="nav-link" onClick={toggleOffcanvas}>
                    Parts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/inspection-category"
                    className="nav-link"
                    onClick={toggleOffcanvas}
                  >
                    Inspections
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <button
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    {" "}
                    More{" "}
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        to="/work-orders/work-requested"
                        className="dropdown-item"
                        onClick={toggleOffcanvas}
                      >
                        Requests
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/work-orders"
                        className="dropdown-item"
                        onClick={toggleOffcanvas}
                      >
                        Work Orders
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="dropdown-item"
                        onClick={toggleOffcanvas}
                      >
                        Schedules
                      </Link>
                    </li>
                  </ul>
                </li> */}
              </ul>
              <div className="navbar-node">
                <button className="search-icon">
                  <SearchIcon />
                </button>
                <button className="notification-icon">
                  <NotificationIcon />
                  <span></span>
                </button>
                <span className="bar-symbol"></span>
                <button className="user-icon fs-14 fw-semibold">
                  Peter Ndegwa
                  <img src={User} alt="User" />
                </button>
                <Link to="/sign-in" className="off-icon">
                  <OffIcon />
                </Link>
              </div>
            </div>
          </div>

          <div
            className={`${offcanvasOpen ? "show offcanvas-backdrop fade" : ""}`}
            onClick={toggleOffcanvas}
          ></div>
        </div>
      </nav>
      <div className="phone-bottom-menu">
        <ul className="navbar-node">
          <li>
            <Link to="/" className="dashboard-icon">
              <IoMdHome />
            </Link>
          </li>
          <li>
            <button className="search-icon">
              <SearchIcon />
            </button>
          </li>
          <li>
            <button className="user-icon fs-14 fw-semibold">
              <img src={User} alt="User" />
              Peter Ndegwa
            </button>
          </li>
          <li>
            <button className="notification-icon">
              <NotificationIcon />
              <span></span>
            </button>
          </li>
          <li>
            <Link to="/sign-in" className="off-icon">
              <OffIcon />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
