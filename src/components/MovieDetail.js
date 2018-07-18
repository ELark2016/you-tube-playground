import React from "react";

const MovieDetail = props => (
  <div className="text-center">
    <img
      alt={props.title}
      className="img-fluid"
      src={props.src}
      style={{ margin: "0 auto" }}
    />
    
  </div>
);

export default MovieDetail;
