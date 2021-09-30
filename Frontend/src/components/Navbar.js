import React, { useState, useEffect } from "react";
import LargeNavBar from "./LargeNavBar";
import SmallNavBar from "./SmallNavBar";

const NavBar = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, [window.innerWidth]);

  console.log(isDesktop);
  return (
    <div className="main-nav">
      {isDesktop ? <LargeNavBar /> : <SmallNavBar />}
    </div>
  );
};

export default NavBar;
