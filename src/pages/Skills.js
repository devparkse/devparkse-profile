import React from "react";

const Skills = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <section className="skills scroll">
      <div className="inner">
        {/* 기술적 역량 : 기술적 내용설명, 자격증, 운전면허 등.. */}
        <h2
          className="skills-title"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          SKILLS
        </h2>
        <div className="contents">
          <ul className="skills-list">
            <li data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
              <img
                src={`${path}/images/html.png`}
                // src="/images/skill-html.png"
                alt="skill"
              />
              <p>HTML</p>
            </li>
            <li data-aos="fade-up" data-aos-duration="500" data-aos-delay="400">
              <img src={`${path}/images/css.png`} alt="skill" />
              <p>CSS</p>
            </li>
            <li data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
              <img src={`${path}/images/js.png`} alt="skill" />
              <p>JavaScript</p>
            </li>
            <li data-aos="fade-up" data-aos-duration="500" data-aos-delay="600">
              <img
                className="react-icon"
                src={`${path}/images/react.png`}
                alt="skill"
              />
              <p>React</p>
            </li>
            <li data-aos="fade-up" data-aos-duration="500" data-aos-delay="700">
              <img
                className="redux-icon"
                src={`${path}/images/redux.png`}
                alt="skill"
              />
              <p>Redux</p>
            </li>
            <li data-aos="fade-up" data-aos-duration="500" data-aos-delay="800">
              <img src={`${path}/images/ts.png`} alt="skill" />
              <p>TypeScript</p>
            </li>
            <li data-aos="fade-up" data-aos-duration="500" data-aos-delay="900">
              <img src={`${path}/images/github.png`} alt="skill" />
              <p>GitHub</p>
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="1000"
            >
              <img src={`${path}/images/scss.png`} alt="skill" />
              <p>Scss</p>
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="1100"
            >
              <img src={`${path}/images/styled-components.png`} alt="skill" />
              <p>styled-components</p>
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="1200"
            >
              <img
                className="tailwind-icon"
                src={`${path}/images/tailwind.png`}
                alt="skill"
              />
              <p>Tailwind CSS</p>
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="1300"
            >
              <img src={`${path}/images/figma.png`} alt="skill" />
              <p>Figma</p>
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="1400"
            >
              <img src={`${path}/images/bootstrap.png`} alt="skill" />
              <p>Bootstrap</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
