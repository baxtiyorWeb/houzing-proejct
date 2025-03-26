"use client";
import React, { useMemo } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

type ItemProps = {
  grid?: boolean;
  columns?: number;
  rows?: number;
  flex?: boolean;
  justifyContent?: React.CSSProperties["justifyContent"];
  alignItems?: React.CSSProperties["alignItems"];
  cardStyles?: React.CSSProperties;
  className?: string;
  items?: React.ReactNode[];
  children?: React.ReactNode;
  slider?: boolean;
  sliderConfig?: SliderConfig;
};

type SliderConfig = Settings;
const ItemCard = ({
  grid = false,
  columns = 1,
  rows = 1,
  flex = false,
  justifyContent = "center",
  alignItems = "center",
  cardStyles = {},
  className = "",
  items = [],
  slider = false,
  sliderConfig,
}: ItemProps) => {
  const defaultSliderConfig: SliderConfig = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
    adaptiveHeight: false,
    centerMode: false,
    fade: false,
    focusOnSelect: false,
    lazyLoad: "ondemand",
    rtl: false,
    swipeToSlide: false,
    variableWidth: false,
    waitForAnimate: true,

    // **Responsive qo'shildi**
    responsive: [
      {
        breakpoint: 1024, // 1024px va undan kichik ekranlar uchun
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // 768px va undan kichik ekranlar uchun
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // `sliderConfig` ni `useMemo` bilan optimallashtiramiz
  const mergedSliderConfig = useMemo(
    () => ({ ...defaultSliderConfig, ...sliderConfig }),
    [sliderConfig]
  );

  const containerStyles: React.CSSProperties = {
    display: grid ? "grid" : flex ? "flex" : "block",
    gridTemplateColumns: grid ? `repeat(${columns}, 1fr)` : undefined,
    gridTemplateRows: grid ? `repeat(${rows}, 1fr)` : undefined,
    justifyContent: flex ? justifyContent : undefined,
    alignItems: flex ? alignItems : undefined,
  };

  return (
    <div style={containerStyles}>
      <div style={containerStyles} className={className}>
        {slider ? (
          <Slider {...mergedSliderConfig}>{items}</Slider>
        ) : (
          items.map((item, index) => <div key={index} style={cardStyles}>{item}</div>)
        )}
      </div>
    </div>
  );
};

export default ItemCard;
