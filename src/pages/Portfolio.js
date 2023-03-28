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
                  <li className="project-name">담화마켓</li>
                  <li className="project-desc">전통주 배달 주문 서비스</li>
                  <li className="project-txt">
                    프론트엔드 & 백엔드 협업 1차 프로젝트
                    <br />
                    2023. 01. 11 ~ 2023. 02. 06
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
                <div>
                  <a
                    href="https://github.com/devparkse/hansalim"
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
                    <img src={`${path}/images/youtube.png`} alt="github" />
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
                  <li className="project-name">담화마켓</li>
                  <li className="project-desc">전통주 배달 주문 서비스</li>
                  <li className="project-txt">
                    프론트엔드 & 백엔드 협업 1차 프로젝트
                    <br />
                    2023. 01. 11 ~ 2023. 02. 06
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
                <div>
                  <a
                    href="https://github.com/devparkse/hansalim"
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
                    <img src={`${path}/images/youtube.png`} alt="github" />
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
                  src="https://www.youtube.com/embed/h9yIKvujfy4"
                  title="담화마켓 프로젝트"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="portfolio-right">
                <ul className="portfolio-team-list">
                  <li className="project-name">담화마켓</li>
                  <li className="project-desc">전통주 배달 주문 서비스</li>
                  <li className="project-txt">
                    프론트엔드 & 백엔드 협업 1차 프로젝트
                    <br />
                    2023. 01. 11 ~ 2023. 02. 06
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
                <div>
                  <a
                    href="https://github.com/devparkse/hansalim"
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
                    <img src={`${path}/images/youtube.png`} alt="github" />
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
                  <li className="project-name">담화마켓</li>
                  <li className="project-desc">전통주 배달 주문 서비스</li>
                  <li className="project-txt">
                    프론트엔드 & 백엔드 협업 1차 프로젝트
                    <br />
                    2023. 01. 11 ~ 2023. 02. 06
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
                <div>
                  <a
                    href="https://github.com/devparkse/hansalim"
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
                    <img src={`${path}/images/youtube.png`} alt="github" />
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
