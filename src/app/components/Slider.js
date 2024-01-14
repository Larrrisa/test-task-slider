"use client";

import Image from "next/image";
import Link from "next/link";
import leftArrow from "../images/leftArrow.svg";
import rightArrow from "../images/rightArrow.svg";
import rightArrowsmall from "../images/rightArrows.svg";
import leftArrowsmall from "../images/leftArrows.svg";
import data from "../data/mockData.js";
import { useState } from "react";

export default function Slider() {
  const [active, setActive] = useState(0);

  function handleScrollToLeft() {
    if (active > 0) {
      setActive(active - 1);
    }
  }

  function handleScrollToRight() {
    if (active < data.length - 1) {
      setActive(active + 1);
    }
  }

  return (
    <div>
      <div className="row-container">
        {data.slice(active, active + 6).map((item, index) => (
          <div
            key={item.id}
            className={item.title.length > 35 ? "strech-slider" : "slider"}
          >
            <div className="slider-img">
              <Image
                src={item.img}
                alt={item.title}
                width={item.title.length < 35 ? 344 : 688}
                height={344}
                className={item.id % 2 === 0 ? "images-circle" : "images-petal"}
              />
            </div>
            <Link href="#" className="slider-title">
              {item.title}
            </Link>
            <p className="slider-date">{item.date}</p>
          </div>
        ))}
      </div>

      <div className="arrows">
        <Image
          src={leftArrow}
          alt="arrow to the left"
          onClick={handleScrollToLeft}
          className="arrows-big"
        />
        <Image
          src={rightArrow}
          alt="arrow to the left"
          onClick={handleScrollToRight}
          className="arrows-big"
        />

        <Image
          src={leftArrowsmall}
          alt="small arrow to the left"
          onClick={handleScrollToLeft}
          className="arrows-small"
        />
        <Image
          src={rightArrowsmall}
          alt="small arrow to the left"
          onClick={handleScrollToRight}
          className="arrows-small"
        />
      </div>
    </div>
  );
}
