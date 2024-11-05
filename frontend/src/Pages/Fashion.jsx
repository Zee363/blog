import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Fashion = () => {
  return (
    <div className="fashion-container">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <img src="./fashion1.webp" alt="Chic style" />
            <h4>The Fig & Honey Edit</h4>
          </div>
          <div class="col-sm-6">
            <img src="./fashion2.webp" alt="Country style" />
            <h4>DISSH - The Minimalistic Brand Worth The Hype</h4>
          </div>
          <div class="col-sm-6">
            <img src="./fashion3.webp" alt="Pretty Yellow Dress" />
            <h4>Spring Dressing With Poetry</h4>
          </div>
          <div class="col-sm-6">
            <img src="./fashion4.webp" alt="Laid back style" />
            <h4>Pre-loved Styling Edit</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fashion;