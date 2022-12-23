import React from "react";
import Slider from "react-slick";
import ArrowLeft from "@material-ui/icons/ArrowLeft";
import ArrowRight from "@material-ui/icons/ArrowRight";
import ButtonBase from "@material-ui/core/ButtonBase";
import "../App.css";
const data = [
  { title: "BACKPACKING TRIPS", url: "https://bit.ly/3uBPALR" },
  {
    title: "WEEKEND TRIPS",
    url: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png",
  },
  {
    title: "WORKCATIONS STAYS",
    url: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png",
  },
  {
    title: "ADVENTURE COURSES",
    url: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png",
  },
  {
    title: "CUSTOMISED TRIPS",
    url: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png",
  },
  {
    title: "CORPORATE TRIPS",
    url: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png",
  },
];
export default class ReactCustomArrow extends React.Component {
  renderArrows = () => {
    return (
      <div className="slider-arrow">
        <ButtonBase
          style={{  border: "1px solid black", margin: "20px 40px",padding: "10px 5px" }}
          className="arrow-btn prev"
          onClick={() => this.slider.slickPrev()}
        >
          <ArrowLeft />
        </ButtonBase>
        <ButtonBase
          style={{  border: "1px solid black", margin: "20px 20px",padding: "10px 5px" }}
         className="arrow-btn next"
          onClick={() => this.slider.slickNext()}
        >
          <ArrowRight
          //  style={{ width:"20px" }} 
          />
        </ButtonBase>
      </div>
    );
  };
  render() {
    return (
      <div className="App">
        <div className="text-center mt-8 mb-5">
          <h2 className="text-5xl font-bold  sm:text-4xl tracking-normal">
            Trending Gigs
          </h2>
          <p className="text-xl text-gray-500 mt-4">
            Millons of people are use <b>EtherX</b> to turn their ideas into
            reality.
          </p>
        </div>

        <div style={{ position: "relative", marginTop: "2rem" }}>
          {this.renderArrows()}
          <Slider
            ref={(c) => (this.slider = c)}
            dots={true}
            arrows={false}
            // centerMode={true}
            slidesToShow={4}
            slidesToScroll={1}
            className="flex ml-20 pl-11 w-[89%] mb-16"
          >
            {data.map((item, index) => {
              return (
                <div key={index} className="my-5 ">
                  <img src={item.url} alt="hero_img" />
                  <h2>{item.title}</h2>
                  <p>
                    starts at <span>₹5,999/-</span>
                  </p>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}


