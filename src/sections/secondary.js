import React from "react";
import "./secondary.css";
import "../icons8-facebook-250.png";
import contentImage from '../292483988_3216806731912006_7111319416485456861_n.jpg'

const SecondarySection = () => {
  return (
    <section id="secondary">
      <h1 className="title">Our story</h1>
      <div className="content">
        <p>
          <span>FETRAH</span> is a campaign that was established by a group of
          Egyptians in 2022. Opposing the idea of homosexuality is the one and
          only goal of the campaign. <br/> <br/> <span>FETRAH</span> gained a lot of
          supporters in its first days which frightend other companies that
          support homosexuality. This rapid and enormous growth caused some
          social media platforms to tirelessly try and shut down the campaign, but it was already too late.
          Many people around the world espicially middle east are now supporting <span>FETRAH</span>
        </p>
        <img src= {contentImage} id="contentImage" alt=""/>
      </div>

      
    </section>
  );
};

export default SecondarySection;
