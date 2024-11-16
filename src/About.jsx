import React from "react";
import Common from "./Common";
import web from "../src/Images/about.jpg";

export default function About() {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
}
