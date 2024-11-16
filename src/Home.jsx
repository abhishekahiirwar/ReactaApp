import React from "react";
import Common from "./Common";
import web from "../src/Images/home.jpg";

export default function Home() {
  return (
    <>
      <Common
        name="Grow Your business with"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
}
