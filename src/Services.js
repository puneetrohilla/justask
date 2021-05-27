import React from "react";
import Card from "./Card.js";
import Sdata from "./Sdata.js";
export default function Services() {
  return (
    <>
   
      <div className="my-3">
        <h1 className="text-center mb-5"> Sevices </h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
                  {Sdata.map((val, ind) => {
                    return (
                      <Card key={ind} imgsrc={val.imgsrc} title={val.title} descard={val.descard} />
                    );
                  })
                  }
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
