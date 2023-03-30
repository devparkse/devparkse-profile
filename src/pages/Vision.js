import React from "react";

const Vision = () => {
  return (
    <section className="vision scroll">
      <div className="inner">
        {/* 1년 목표, 3년후 목표, 5년후 목표 */}
        <h2
          className="vision-title"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          VISION
        </h2>
        <div className="contents">
          <ul className="vision-list">
            <li className="vision-box">
              <h1>1년후 :</h1>
              <p>내용</p>
            </li>
            <li className="vision-box">
              <h1>3년후 :</h1>
              <p>내용</p>
            </li>
            <li className="vision-box">
              <h1>5년후 :</h1>
              <p>내용</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Vision;
