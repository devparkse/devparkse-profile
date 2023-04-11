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
            <li
              className="vision-box"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="300"
            >
              <img src="/images/vision_1.png" alt="vision-1" />
              <h1 className="vision-subtitle">
                <b className="years">1년 후</b> 기본기 습득과 경험 쌓기를 통해
                기술적 성장을 이루는 개발자
              </h1>
              <p className="vision-desc">
                기초를 탄탄히 다지고, 언어나 프레임워크 등 개발에 필요한 기술
                스택을 익히겠습니다.
                <br />
                선배 및 동료의 장점을 본받고 기술을 보완하여 성장하는 개발자가
                되겠습니다.
              </p>
            </li>
            <li
              className="vision-box"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="400"
            >
              <img src="/images/vision_2.png" alt="vision-2" />
              <h1 className="vision-subtitle">
                <b className="years">3년 후</b> 자기 주도적인 학습이 가능하고
                깊은 기술 이해와 경험을 쌓은 개발자
              </h1>
              <p className="vision-desc">
                새로운 기술과 트렌드를 놓치지 않고 학습하여 적용하는 능력을
                강화하겠습니다.
                <br /> 또 자신의 업무와 조직 내에서의 역할과 책임에 대한
                이해도를 높이겠습니다.
              </p>
            </li>
            <li
              className="vision-box"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="500"
            >
              <img src="/images/vision_3.png" alt="vision-3" />
              <h1 className="vision-subtitle">
                <b className="years">5년 후</b> 현재에 안주하지 않고 늘 배우며
                계속해서 업그레이드되는 개발자
              </h1>
              <p className="vision-desc">
                기업의 비즈니스 목표에 맞춰 다양한 기술 스택을 융합하여 최적의
                아키텍처를 설계하고 개발할 수 있는 개발자가 되겠습니다. 경험과
                노하우를 바탕으로 팀원들과 함께 프로젝트를 성공적으로 이끌어갈
                수 있도록 할 것입니다.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Vision;
