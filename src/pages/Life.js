import React from "react";

const Life = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <section className="life scroll">
      <div className="inner">
        <h2 className="life-title" data-aos="fade-up" data-aos-duration="1000">
          LIFE
        </h2>
        <div className="contents">
          {/* 나의 대외활동, 회사 대표가 바라는 인재상 */}
          <ul className="life-list">
            <li>
              <img src={`${path}/images/life.png`} alt="life" />
            </li>
            <li>
              <img src={`${path}/images/life.png`} alt="life" />
            </li>
            <li>
              <img src={`${path}/images/life.png`} alt="life" />
            </li>
            <li>
              <img src={`${path}/images/life.png`} alt="life" />
            </li>
            <li>
              <img src={`${path}/images/life.png`} alt="life" />
            </li>
            <li>
              <img src={`${path}/images/life.png`} alt="life" />
            </li>
            <li>
              <img src={`${path}/images/life.png`} alt="life" />
            </li>
            <li>
              <img src={`${path}/images/life.png`} alt="life" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Life;
