import React from "react";

// All the images
import Iphone13 from "../../images/iphone13.png";
import Macbook from "../../images/macbook.png";
import Zenbook from "../../images/zenbook.png";

// Carousel
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel
    autoPlay={true}
    interval={2000}
    infiniteLoop={true}
    showArrows={false}
    showIndicators={false}
    showThumbs={false}
    swipeable={true}
    showStatus={false}
  >
    <div>
      <img src={Iphone13} alt="Iphone13" />
    </div>
    <div>
      <img src={Macbook} alt="Macbook" />
    </div>
    <div>
      <img src={Zenbook} alt="Zenbook" />
    </div>
  </Carousel>
);
