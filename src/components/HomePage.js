import React from "react";
import Bitmoji from "../images/bryan-bitmoji.png";

export default function HomePage() {
  return (
    <div className="home-page">
      <img src={Bitmoji} alt="bitmoji" className="bitmoji" />
    </div>
  );
}
