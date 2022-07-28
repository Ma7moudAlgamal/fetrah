import React from "react";
import "./support.css";
import facebook from '../icons8-facebook-250.png'

const Support = () => {
  return (
    <section id="support">
      <div className="content">
        <h1 className="title">Support Us Now !</h1>
        <div className="join">
          <div className="joinContent">
            <p>You can always support us by joining <br/> the Facebook group</p>
            <a
              href="https://www.facebook.com/groups/1280183962516641"
              target="_blank"
            >
              Join Now
            </a>
          </div>
          <img src={facebook} alt='facebook'/>
        </div>
      </div>
    </section>
  );
};

export default Support;
