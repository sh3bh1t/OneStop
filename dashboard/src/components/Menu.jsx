import React, { useState } from "react";

import { Link } from "react-router-dom";

const Menu = () => {

  let [selectedMenuOption, setSelectedMenuOption] = useState(0);
  let [isProfileDropDownOpen, setIsProfileDropDownOpen] = useState(false);

  let handleSelectedMenuOption = (index) => {
    setSelectedMenuOption(index);
  }

  let handleProfileClick = () => {
    setIsProfileDropDownOpen(!isProfileDropDownOpen);
  }

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "5%" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/"  onClick={() =>handleSelectedMenuOption(0)}>
              < p className={selectedMenuOption === 0 ? activeMenuClass : menuClass} >Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/orders"  onClick={() =>handleSelectedMenuOption(1)}>
              < p className={selectedMenuOption === 1 ? activeMenuClass : menuClass} >Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings"  onClick={() =>handleSelectedMenuOption(2)}>
              < p className={selectedMenuOption === 2 ? activeMenuClass : menuClass} >Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions"  onClick={() =>handleSelectedMenuOption(3)}>
              < p className={selectedMenuOption === 3 ? activeMenuClass : menuClass} >Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/funds"  onClick={() =>handleSelectedMenuOption(4)}>
              < p className={selectedMenuOption === 4 ? activeMenuClass : menuClass} >Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/apps"  onClick={() =>handleSelectedMenuOption(5)}>
              < p className={selectedMenuOption === 5 ? activeMenuClass : menuClass} >Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile"  onClick={() =>handleProfileClick}>
          <div className="avatar">OSU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
