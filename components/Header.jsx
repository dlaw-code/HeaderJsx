import React from "react";
import "./styles/style.css";

const Header = () => {
  return (
    <div className="container">
      <div className="text-containers">
        <h1 className="header">Stay Updated!</h1>
        <p>
          Join 60,000+ product managers receiving monthly <br /> updates on:{" "}
        </p>

        <ul>
          <li>
            <i class="fa-solid fa-check"></i>Product discovery and building what
            matters
          </li>
          <li>
            <i class="fa-solid fa-check"></i>Measuring to ensure updates are a
            success
          </li>
          <li>
            <i class="fa-solid fa-check"></i>And much more!
          </li>
        </ul>

        <h3>Email Address</h3>
        <div className="buttons">
          <input type="email" placeholder="email@company.com" />
          <br />
          <button className="btn">Subscribe to monthly newsletter</button>
        </div>
      </div>

      <div>
        <img
          src="src/assets/illustration-sign-up-desktop.svg"
          alt=""
          className="author-img"
        />
      </div>

      <div class="additional-image">
        <img
          src="src/assets/illustration-sign-up-mobile.svg"
          alt="Additional Image"
        />
      </div>
    </div>
  );
};

export default Header;
