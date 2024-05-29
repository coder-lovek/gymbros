import React from "react";

function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide position-relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={img1}
              className="d-block w-100"
              alt="..."
              style={{ maxHeight: "400px", maxWidth: "100%", objectFit: "contain" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={img2}
              className="d-block w-100"
              alt="..."
              style={{ maxHeight: "400px", maxWidth: "100%", objectFit: "contain" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={img3}
              className="d-block w-100"
              alt="..."
              style={{ maxHeight: "400px", maxWidth: "100%", objectFit: "contain" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={img4}
              className="d-block w-100"
              alt="..."
              style={{ maxHeight: "400px", maxWidth: "100%", objectFit: "contain" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={img5}
              className="d-block w-100"
              alt="..."
              style={{ maxHeight: "400px", maxWidth: "100%", objectFit: "contain" }}
            />
          </div>

        </div>

        <div
          className="carousel-search-box position-absolute top-50 start-50 translate-middle"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "10px",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center"
          }}
        >
          <input
            type="text"
            placeholder="Search..."
            className="form-control"
            aria-label="Search"
            style={{ flex: "1", marginRight: "10px" }}
          />
          <button className="btn btn-primary" style={{ borderRadius: "5px" }}>
            Search
          </button>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
