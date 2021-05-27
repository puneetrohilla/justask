import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom"
import img2 from "../src/images/img1.svg";
import Common from './Common.js';
import hero from '../src/images/hero-img.png';

export default function Home() {
  return (
    <>
    <Common title="Grow Your Business With" btnText="Get Started" serve="/justask/services" imgsrc={hero} desc="We Are The Team of Web Developers who Develops Modern Websites" />
    </>
  );
}
