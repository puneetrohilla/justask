import React from 'react'
import img2 from "../src/images/img1.svg"
import { NavLink } from "react-router-dom"

export default function Common(props) {
    return (
       <>
             <section id="header" className="d-flex align-items-center justify-content-center">
        <div className="container-fluid">
          <div className="row col-10 mx-auto">
            <div className="row col-md-6 order-2 mx-auto order-lg-1 gy-2">
              <h1>
                {props.title}
                <strong>
                  <span style={{ color: "#3498db" }}> JustAsk</span>
                </strong>
              </h1>
              <h4 >
               {props.desc} 
               {/* We Are The Team of Web Developers who Develops Modern Websites */}
              </h4>
              <div className="getStarted"> <NavLink to={props.serve}> {props.btnText}</NavLink></div>

            </div>
            <div className="row col-md-6 order-1">
              <div>
                <img className="img-fluid animated" src={props.imgsrc} alt="" />
              </div>
            </div>  
          </div>
        </div>
      </section>
       </>
    )
}
