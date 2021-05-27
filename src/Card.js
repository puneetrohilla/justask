import React from "react";

export default function Card(props) {
  return (
    <>
    <div className="col-10 col-md-4 mx-auto d-flex justify-content-center align-items-center ">
    <div class="card" style={{ width: "18rem" }}>
        <img src={props.imgsrc} class="card-img-top" alt="image" title={props.title} />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">
          {props.descard} 
          
           {/* Some quick example text to build on the card title and make up the
            bulk of the card's content. */}
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      </div>
    </>
  );
}
