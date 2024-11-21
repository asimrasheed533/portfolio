import React from "react";
import "@/style/banner.scss";
import Image from "next/image";
export default function page() {
  return (
    <>
      <div className="banner__container">
        <div className="banner__text__col">
          <div className="banner__text__title">i am Asim Rasheed</div>
          <div className="banner__text__heading">
            Web Developer+ <br />
            UI/UX Designer
          </div>
          <div className="banner__text__sub_heading">
            I break down complex user experience problem to create integrity
            focussed solutions that connect billions of people.
          </div>
          <div className="banner__text__button">
            <button className="banner__button">Contact Me</button>
            <button className="banner__button__social"></button>
          </div>
        </div>
        <div className="banner__img__col">
          <Image
            className="banner__image"
            alt="profile"
            src="/profile.png"
            width={350}
            height={600}
          />
        </div>
      </div>
    </>
  );
}
