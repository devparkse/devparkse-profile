import React from "react";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Portfolio = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <section className="portfolio scroll">
      <div className="inner">
        {/* 개발 담당자 : 팀프로젝트, 개인 작업(5개 목표(퍼블리싱 -> 프론트)) */}
        <h2
          className="portfolio-title"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          PORTFOLIO
        </h2>
        <div className="contents">
          {/* 팀 프로젝트 */}
          <div className="portfolio-box">
            <h3
              className="portfolio-subtitle"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              TEAM PROJECT
            </h3>
            <div
              className="portfolio-team"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="portfolio-left">
                <video controls autoPlay name="media">
                  <source
                    src="https://user-images.githubusercontent.com/103413040/223362125-f9ffb27c-29b4-45b3-b91c-d050722efeec.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className="portfolio-right">
                <ul className="portfolio-team-list">
                  <li className="pro-green project-name">
                    우리의 꿈을 'Green' 문고
                  </li>
                  <li className="project-desc">
                    데이터 통신 및 출력하여 화면을 구성함으로써 교보문고
                    웹페이지의 기능 일부 구현
                  </li>
                  <li className="project-txt">
                    프론트엔드 & 백엔드 협업 미니 프로젝트
                    <br />
                    2022. 12. 16 ~ 2022. 12. 22
                  </li>
                  <li>
                    - 헤더의 각 아이콘 클릭시 해당 페이지로 이동
                    <br />- 구매 바 수량, 가격 연동
                    <br />- 로그인 페이지 UI
                  </li>
                  <li className="tech-stack">
                    JavaScript, React, Axios, styled-components
                  </li>
                </ul>
                <div className="shortcut-icon">
                  <a
                    href="https://github.com/devparkse/KyoboBooks"
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="github"
                  >
                    <img src={`${path}/images/github.png`} alt="github" />
                  </a>
                  <a
                    href="https://youtu.be/BHf63vyKI0g"
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="youtube"
                  >
                    <img src={`${path}/images/youtube.png`} alt="youtube" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="portfolio-team"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <div className="portfolio-left">
                <iframe
                  src="https://www.youtube.com/embed/h9yIKvujfy4"
                  title="담화마켓 프로젝트"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="portfolio-right">
                <ul className="portfolio-team-list">
                  <li className="pro-damhwa project-name">담화마켓</li>
                  <li className="project-desc">전통주 배달 주문 서비스</li>
                  <li className="project-txt">
                    프론트엔드 & 백엔드 협업 1차 프로젝트
                    <br />
                    2023. 01. 11 ~ 2023. 02. 03
                  </li>
                  <li>
                    - 전체 제품 출력, 제품 상세페이지 구현, 장바구니 추가
                    <br />- 장바구니 페이지 수량 변경, 삭제, 총가격 연동
                    <br />- Review 등록, 삭제, 출력
                  </li>
                  <li className="tech-stack">
                    JavaScript, React, React-Query, Axios, react-router-dom,
                    <br />
                    react-spinners, Tailwind CSS
                  </li>
                </ul>
                <div className="shortcut-icon">
                  <a
                    href="https://github.com/devparkse/damhwamarket"
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="github"
                  >
                    <img src={`${path}/images/github.png`} alt="github" />
                  </a>
                  <a
                    href="https://youtu.be/h9yIKvujfy4"
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="youtube"
                  >
                    <img src={`${path}/images/youtube.png`} alt="youtube" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="portfolio-team"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <div className="portfolio-left">
                <iframe
                  src="https://www.youtube.com/embed/zYGsGXkdSHo"
                  title="허니머니 프로젝트(커플 가계부)"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="portfolio-right">
                <ul className="portfolio-team-list">
                  <li className="pro-accountbook project-name">허니머니</li>
                  <li className="project-desc">
                    똑똑한 연애의 시작, 커플 가계부
                  </li>
                  <li className="project-txt">
                    프론트엔드 & 백엔드 협업 2차 프로젝트
                    <br />
                    2023. 02. 06 ~ 2023. 03. 02
                  </li>
                  <li>
                    &bull; 캘린더
                    <br />
                    &nbsp;- 월별 데이터 출력, 일별 수입 & 지출 상세페이지
                    <br />
                    &nbsp;- 수입 & 지출 등록(이미지 등록), 수정, 삭제 기능
                  </li>
                  <li className="tech-stack">
                    JavaScript, React, Axios, react-router-dom, nivo, yup
                    <br />
                    react-hook-form, styled-components, Tailwind CSS
                  </li>
                </ul>
                <div className="shortcut-icon">
                  <a
                    href="https://github.com/devparkse/accountbook"
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="github"
                  >
                    <img src={`${path}/images/github.png`} alt="github" />
                  </a>
                  <a
                    href="https://youtu.be/zYGsGXkdSHo"
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="youtube"
                  >
                    <img src={`${path}/images/youtube.png`} alt="youtube" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="portfolio-team"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <div className="portfolio-left">
                <iframe
                  src="https://www.youtube.com/embed/h9yIKvujfy4"
                  title="담화마켓 프로젝트"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="portfolio-right">
                <ul className="portfolio-team-list">
                  <li className="pro-skycastle project-name">SKY 캐슬</li>
                  <li className="project-desc">고3 성적 관리</li>
                  <li className="project-txt">
                    프론트엔드 & 백엔드 협업 3차 프로젝트
                    <br />
                    2023. 03. 06 ~ 2023. 04. 04
                  </li>
                  <li>
                    -
                    <br />-
                    <br />-
                  </li>
                  <li className="tech-stack">
                    JavaScript, React, Axios, react-router-dom,
                    <br />
                    styled-components,
                  </li>
                </ul>
                <div className="shortcut-icon">
                  <a
                    href="https://github.com/devparkse/KyoboBooks"
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="github"
                  >
                    <img src={`${path}/images/github.png`} alt="github" />
                  </a>
                  <a
                    href="https://youtu.be/BHf63vyKI0g"
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="youtube"
                  >
                    <img src={`${path}/images/youtube.png`} alt="youtube" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* 개인 스터디 프로젝트 */}
          <div className="portfolio-box">
            <h3 className="portfolio-subtitle">STUDY PROJECT</h3>
            {/* Swiper 배치 */}
            <Swiper
              loop={true}
              slidesPerView={1}
              spaceBetween={0}
              pagination={true}
              navigation={true}
              breakpoints={{
                860: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                960: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1180: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              modules={[Pagination, Navigation]}
              className="portfolio-slide"
            >
              <SwiperSlide>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/sample.png`} alt="portfolio" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/sample.png`} alt="portfolio" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/sample.png`} alt="portfolio" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/sample.png`} alt="portfolio" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/sample.png`} alt="portfolio" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/sample.png`} alt="portfolio" />
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
