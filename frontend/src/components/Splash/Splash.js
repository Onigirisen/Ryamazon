import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";

const Splash = () => {
  return (
    <div className="splash">
      <div className="splash-container">
        <img
          className="splash-background"
          src="https://cdn.vox-cdn.com/thumbor/ux_50DxHp6vhXdmN3Zkn6idnmWw=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/67631115/jbareham_201012_0906_stock_amazon_prime_day.0.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Splash;
