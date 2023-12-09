import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";

const Navbar = () => {
  const [toggleMenue, setToggleMenue] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">
        <img src={images.gericht} alt="logo" />
      </div>
      <div className="options">
        <div className="hover">Home</div>
        <div className="hover">About</div>
        <div className="hover">Menue</div>
        <div className="hover">Award</div>
        <div className="hover">Contents</div>
      </div>
      <div className="login-section">
        <div className="hover">Log In / Register </div>
        <p>&nbsp; |&nbsp; </p>
        <div className="hover">Book Table</div>
      </div>

      <div className="small-screen">
        {toggleMenue ? (
          <MdOutlineRestaurantMenu
          cursor="pointer"
            color="white"
            fontSize="27px"
            className="cross-overlay"
            onClick={() => {
              setToggleMenue(false);
            }}
          />
        ) : (
          <GiHamburgerMenu
            cursor="pointer"
            color="white"
            fontSize="27px"
            onClick={() => {
              setToggleMenue(true);
            }}
          />
        )}

        {toggleMenue && (
          <div className="small-screen-options slide-fwd-center">
            <div
              className="animate"
              style={{ backgroundColor: "black", color: "white" }}
            >
              <div className="hover">Home</div>
              <div className="hover">About</div>
              <div className="hover">Menue</div>
              <div className="hover">Award</div>
              <div className="hover">Contents</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
