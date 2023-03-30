import React from "react";

const Contact = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <section className="contact scroll">
      <div className="inner">
        <h2
          className="contact-title"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          CONTACT
        </h2>
        <div className="contents">
          <ul className="contact-list">
            <li data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
              <a
                href="https://open.kakao.com/o/sK6EnFcf"
                target="_blank"
                rel="noopener noreferrer"
                alt="kakaotalk"
              >
                <img src={`${path}/images/kakaotalk.png`} alt="kakaotalk" />
              </a>
            </li>
            <li data-aos="fade-up" data-aos-duration="500" data-aos-delay="400">
              <a
                href="https://github.com/devparkse"
                target="_blank"
                rel="noopener noreferrer"
                alt="github"
              >
                <img src={`${path}/images/github.png`} alt="github" />
              </a>
            </li>
          </ul>
          <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
            <i className="fa-regular fa-envelope"></i> &nbsp;pmj8856@naver.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
