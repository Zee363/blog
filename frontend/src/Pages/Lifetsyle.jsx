import React from "react";

const Lifestyle = () => {
  return (
   <div className="lifestyle-container"> 
    <div className="beauty-container">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <img src="./lifestyle1.webp" alt="Face wash demonstration." />
            <h5>The Year Of BLOOM</h5>
          </div>
          <div class="col-sm-6">
            <img src="./lifestyle2.webp" alt="Ayanda" />
            <h5>The Words You Speak Become The House You Live In</h5>
          </div>
          <div class="col-sm-6">
            <img src="./lifestyle3.webp" alt="Moisturizer" />
            <h5>The Journey Of Connection & Wellness</h5>
          </div>
          <div class="col-sm-6">
            <img src="./lifestyle4.webp" alt="Botanical balm" />
            <h5>Haut Q&A</h5>
          </div>
        </div>
      </div>
    </div>
   </div> 
  );
}

export default Lifestyle;