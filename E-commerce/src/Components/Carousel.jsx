import React from "react";

import "../CSS/Carousel.css";

const Carousel = () => {
  return (
    <div className="carousel">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <a href="">
              {" "}
              <img
                src="./Media/banner1.jpeg"
                className="d-block"
                alt="banner1"
              />
            </a>
          </div>
          <div className="carousel-item">
            <a href="">
              <img src="./Media/banner2.jpeg" className="d-block" alt="..." />
            </a>
          </div>
          <div className="carousel-item">
            <a href="">
              {" "}
              <img src="./Media/banner3.jpeg" className="d-block" alt="..." />
            </a>
          </div>
          <div className="carousel-item">
            <a href="">
              {" "}
              <img src="./Media/beauty1.jpeg" className="d-block" alt="..." />
            </a>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon btn btn-secondary"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next "
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon btn btn-secondary"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;

{
  /* <div class="deal">
        <div className="image">
          <img src="./Media/tranding_img.jpeg" alt="" />
        </div>
        <div className="content">
          <h3>best summer collection</h3>
          <p>sale get up to 50% off</p>
          <button className="btn btn-info">shop now</button>
        </div>
      </div> */
}
