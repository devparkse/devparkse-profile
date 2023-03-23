import React from "react";

const Skills = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <section className="skills scroll">
      <div className="inner">
        {/* 기술적 역량 : 기술적 내용설명, 자격증, 운전면허 등.. */}
        <h2 className="skills-title" data-aos="fade-up" data-aos-duration="1000">
          SKILLS
        </h2>
        <div className="contents">
          <ul className="skills-list">
            <li>
              <img
                src={`${path}/images/html.png`}
                // src="/images/skill-html.png"
                alt="skill"
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-delay="300"
              />
              <p>HTML</p>
            </li>
            <li>
              <img
                src={`${path}/images/css.png`}
                alt="skill"
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-delay="400"
              />
            </li>
            <li>
              <img
                src={`${path}/images/js.png`}
                alt="skill"
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-delay="500"
              />
            </li>
            <li>
              <img
                src={`${path}/images/react.png`}
                alt="skill"
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-delay="600"
              />
            </li>
            <li>
              <img
                src={`${path}/images/github.png`}
                alt="skill"
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-delay="700"
              />
            </li>
            <li>
              <img
                src={`${path}/images/redux.png`}
                alt="skill"
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-delay="800"
              />
            </li>
            <li>
              <img
                src={`${path}/images/figma.png`}
                alt="skill"
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-delay="900"
              />
            </li>
            <li>
              <img
                src={`${path}/images/ts.png`}
                alt="skill"
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-delay="1000"
              />
            </li>
            <li>
              <img
                src={`${path}/images/sass.png`}
                alt="skill"
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-delay="1100"
              />
            </li>
            <li>
              <img
                src={`${path}/images/bootstrap.png`}
                alt="skill"
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-delay="1200"
              />
            </li>
            <li>
              <img
                src={`${path}/images/styled-components.png`}
                alt="skill"
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-delay="1300"
              />
            </li>
            <li>
              <img
                src={`${path}/images/tailwind.png`}
                alt="skill"
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-delay="1400"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
