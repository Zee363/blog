import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Home.css';

const Home = () => {
  return (
    <div class="grid-container">
      <div class="item image1">
        <img src="./home-pic1.webp" alt="Perfume." />
      </div>
      <div class="item image2">
        <img src="./home-pic3.webp" alt="A display of fashion." />
      </div>
      <div class="item name brand-name">
          <h1>
            {" "}
            BEAUTY. <br /> FASHION. <br /> LIFESTYLE.{" "}
          </h1>{" "}
          <br />
          <h5>
            {" "}
            Haut Aesthetics is a platform that highlights fashion, beauty,
            skincare, personal styling, and lifestyle interests.
          </h5>
        </div>
      <div class="item image3">
        <img src="./home-pic2.webp" alt="Clothes." />
      </div>
      <div class="item image4">
        <img src="./home-pic4.webp" alt="A portrait of Ayanda." />
      </div>
      <div class="item image5">
        <img src="./home-pic5.webp" alt="Skin care products." />
      </div>
    </div>
  );
};

export default Home;