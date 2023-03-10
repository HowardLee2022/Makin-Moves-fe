import React from "react";
import "./style.css"

function Carousel(props) {
  return (
    <div id="carouselnotbootWrapperFade" className="carousel slide carousel-fade" data-ride="carousel" {...props}>
      {props.children}
      <div className="carouselnotboot-inner">
        <div className="carouselnotboot-item">
          <div className="d-block w-100 img1" />
          <div className="carouselnotboot-caption">
            <h1><a href="https://www.visithalongbay.com">Ha Long Bay, VietNam</a></h1>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselWrapperFade" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselWrapperFade" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
