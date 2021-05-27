import React from 'react'
import img2 from '../src/images/img2.svg';
import Common from './Common.js';


export default function About() {
    return (
        <div>
           <Common title="About Page" btnText="Contact" serve="/justask/contact" imgsrc={img2} desc="It was Founded by 'Puneet Rohilla' in 2021 during the pendamic Covid-19" />
        </div>
    )
}
