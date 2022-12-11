import React, { Component } from "react";
import Slider from "react-slick";

const data = [
  {
    title: "WORKCATIONS STAYS",
    url: "https://c0.wallpaperflare.com/preview/676/705/125/ecommerce-online-marketing-internet-thumbnail.jpg",
  },
  {
        title: "CUSTOMISED TRIPS",
        url: "https://bit.ly/3uBPALR",
      },
  {
    title: "CUSTOMISED TRIPS",
    url: "https://www.securitymagazine.com/ext/resources/Issues/2019/July/SEC0719-Edu-Feat-slide1_900px.jpg",
  },
  {
    title: "CORPORATE TRIPS",
    url: "http://www.hdwallpaperslife.com/wp-content/uploads/2019/08/photographer_sunset_4k.jpg",
  },
  {
    title: "BACKPACKING TRIPS",
    url: "https://wallpapercave.com/wp/wp3537541.jpg",
  },
  {
    title: "ADVENTURE COURSES",
    url: "http://www.pixelstalk.net/wp-content/uploads/2016/07/Computer-Science-Pictures-HD.jpg",
  },
  
  {
    title: "WEEKEND TRIPS",
    url: "https://i.pinimg.com/originals/a8/f0/ee/a8f0eeaea954e85ed78757679616848b.jpg",
  },
  {
    title: "WEEKEND TRIPS",
    url: "http://getwallpapers.com/wallpaper/full/b/7/0/765203-technology-background-images-1920x1080-hd.jpg",
  },
  {
    title: "WORKCATIONS STAYS",
    url: "https://mixkit.imgix.net/videos/preview/mixkit-man-taking-a-photo-of-the-sunset-6555-0.jpg",
  },
 
  
];

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div >
        <Slider {...settings} className="flex h-[27rem] max-w-[93%]  ">
          {data.map((item, index) => {
            return (
              <div key={index} className="mt-5 ml-4 -mr-4">
                <img src={item.url} alt="hero_img" className="w-[95%] h-96 " />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

