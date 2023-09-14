import React, { useEffect, useState } from "react";
import Portfolio from "../Portfolio";
import Div from "../Div";
import Slider from "react-slick";

export default function PortfolioSlider({ portfolios }) {
  const portfolioData = [
    ...portfolios,
    {
      title: "Colorful Art Work",
      subtitle: "See Details",
      href: "/portfolio/portfolio-details",
      imageUrl: "/images/portfolio_1.jpeg",
    },
    {
      title: "Colorful Art Work",
      subtitle: "See Details",
      href: "/portfolio/portfolio-details",
      imageUrl: "/images/portfolio_2.jpeg",
    },
  ];

  /** Slider Settings **/
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: portfolioData.length >= 3 ? 3 : 1,
    speed: 500,
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-slider cs-style3 cs-gap-24">
      {portfolioData.map((item, index) => (
        <Div key={index}>
          <Portfolio
            title={item.title}
            subtitle={item.subtitle}
            href={item.href}
            src={item.imageUrl}
          />
        </Div>
      ))}
    </Slider>
  );
}
