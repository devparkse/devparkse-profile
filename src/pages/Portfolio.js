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
                    담당한 부분
                    <br />
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
                    담당한 부분
                    <br />
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
                    담당한 부분
                    <br />
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
                    담당한 부분
                    <br />
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
                <div className="pro-study-wrap">
                  <img src={`${path}/images/portfolio.png`} alt="portfolio" />
                  <div className="pro-study-desc">
                    <p className="study-title">개인 포트폴리오 제작</p>
                    <div className="skill-wrap">
                      <span>HTML</span>
                      <span>Scss</span>
                      <span>React</span>
                    </div>
                    <div className="btn-wrap">
                      <a
                        href="https://devparkse-profile.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        alt="portfolio-app"
                      >
                        <span className="shortcut-btn">
                          <i className="fa-solid fa-up-right-from-square"></i>
                          &nbsp; Work
                        </span>
                      </a>
                      <a
                        href="https://github.com/devparkse/devparkse-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        alt="portfolio-github"
                      >
                        <span className="shortcut-btn">
                          <i className="fa-brands fa-github"></i>&nbsp; GitHub
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="pro-study-wrap">
                  <img src={`${path}/images/todolist.png`} alt="todolist" />
                  <div className="pro-study-desc">
                    <p className="study-title">TodoList App</p>
                    <div className="skill-wrap">
                      <span>Firebase</span>
                      <span>Redux-Thunk</span>
                      <span>TypeScript</span>
                    </div>
                    <div className="btn-wrap">
                      <a
                        href="https://ts-todo-five.vercel.app/login"
                        target="_blank"
                        rel="noopener noreferrer"
                        alt="todolist-app"
                      >
                        <span className="shortcut-btn">
                          <i className="fa-solid fa-up-right-from-square"></i>
                          &nbsp; Work
                        </span>
                      </a>
                      <a
                        href="https://github.com/devparkse/ts-todo"
                        target="_blank"
                        rel="noopener noreferrer"
                        alt="todolist-app-github"
                      >
                        <span className="shortcut-btn">
                          <i className="fa-brands fa-github"></i>&nbsp; GitHub
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="pro-study-wrap">
                  <img
                    src={`${path}/images/wonderplace.png`}
                    alt="wonderplace"
                  />
                  <div className="pro-study-desc">
                    <p className="study-title">원더플레이스 클론코딩</p>
                    <div className="skill-wrap">
                      <span>HTML</span>
                      <span>CSS</span>
                      <span>JavaScript</span>
                    </div>
                    <div className="btn-wrap">
                      <a
                        href="https://wonderplace-clone.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        alt="wonderplace-clone"
                      >
                        <span className="shortcut-btn">
                          <i className="fa-solid fa-up-right-from-square"></i>
                          &nbsp; Work
                        </span>
                      </a>
                      <a
                        href="https://github.com/devparkse/wonderplace-clone"
                        target="_blank"
                        rel="noopener noreferrer"
                        alt="wonderplace-github"
                      >
                        <span className="shortcut-btn">
                          <i className="fa-brands fa-github"></i>&nbsp; GitHub
                        </span>
                      </a>
                      <a
                        href="https://wonderplace.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        alt="wonderplace-origin"
                      >
                        <span className="shortcut-btn">
                          <i className="fa-brands fa-chrome"></i>
                          &nbsp; Origin
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="pro-study-wrap">
                  <img
                    src={`${path}/images/hyundaigroup.png`}
                    alt="hyundaigroup"
                  />
                  <div className="pro-study-desc">
                    <p className="study-title">현대그룹 클론코딩</p>
                    <div className="skill-wrap">
                      <span>HTML</span>
                      <span>CSS</span>
                      <span>JavaScript</span>
                    </div>
                    <div className="btn-wrap">
                      <a
                        href="https://hyundai-clone.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        alt="hyundaigroup-clone"
                      >
                        <span className="shortcut-btn">
                          <i className="fa-solid fa-up-right-from-square"></i>
                          &nbsp; Work
                        </span>
                      </a>
                      <a
                        href="https://github.com/devparkse/hyundai-clone"
                        target="_blank"
                        rel="noopener noreferrer"
                        alt="hyundaigroup-github"
                      >
                        <span className="shortcut-btn">
                          <i className="fa-brands fa-github"></i>&nbsp; GitHub
                        </span>
                      </a>
                      <a
                        href="https://www.hyundaigroup.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        alt="hyundaigroup-origin"
                      >
                        <span className="shortcut-btn">
                          <i className="fa-brands fa-chrome"></i>
                          &nbsp; Origin
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="pro-study-wrap">
                  <img src={`${path}/images/hansalim.png`} alt="hansalim" />
                  <div className="pro-study-desc">
                    <p className="study-title">한살림 클론코딩</p>
                    <div className="skill-wrap">
                      <span>HTML</span>
                      <span>CSS</span>
                      <span>JavaScript</span>
                    </div>
                    <div className="btn-wrap">
                      <a
                        href="https://hansalim.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        alt="hansalim-clone"
                      >
                        <span className="shortcut-btn">
                          <i className="fa-solid fa-up-right-from-square"></i>
                          &nbsp; Work
                        </span>
                      </a>
                      <a
                        href="https://github.com/devparkse/hansalim"
                        target="_blank"
                        rel="noopener noreferrer"
                        alt="hansalim-github"
                      >
                        <span className="shortcut-btn">
                          <i className="fa-brands fa-github"></i>&nbsp; GitHub
                        </span>
                      </a>
                      <a
                        href="https://shop.hansalim.or.kr/shopping/spMain.do"
                        target="_blank"
                        rel="noopener noreferrer"
                        alt="hansalim-origin"
                      >
                        <span className="shortcut-btn">
                          <i className="fa-brands fa-chrome"></i>
                          &nbsp; Origin
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="pro-study-wrap">
                  <img
                    src={`${path}/images/dosiraktong.png`}
                    alt="dosiraktong"
                  />
                  <div className="pro-study-desc">
                    <p className="study-title">도시락통 클론코딩</p>
                    <div className="skill-wrap">
                      <span>HTML</span>
                      <span>CSS</span>
                      <span>JavaScript</span>
                    </div>
                    <div className="btn-wrap">
                      <a
                        href="https://devparkse.github.io/dosiraktong/"
                        target="_blank"
                        rel="noopener noreferrer"
                        alt="dosiraktong-clone"
                      >
                        <span className="shortcut-btn">
                          <i className="fa-solid fa-up-right-from-square"></i>
                          &nbsp; Work
                        </span>
                      </a>
                      <a
                        href="https://github.com/devparkse/dosiraktong"
                        target="_blank"
                        rel="noopener noreferrer"
                        alt="dosiraktong-github"
                      >
                        <span className="shortcut-btn">
                          <i className="fa-brands fa-github"></i>&nbsp; GitHub
                        </span>
                      </a>
                      <a
                        href="https://dosiraktong.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        alt="dosiraktong-origin"
                      >
                        <span className="shortcut-btn">
                          <i className="fa-brands fa-chrome"></i>
                          &nbsp; Origin
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="pro-study-wrap">
                  <img src={`${path}/images/stx.png`} alt="stx" />
                  <div className="pro-study-desc">
                    <p className="study-title">STX건설 클론코딩</p>
                    <div className="skill-wrap">
                      <span>HTML</span>
                      <span>CSS</span>
                    </div>
                    <div className="btn-wrap">
                      <a
                        href="https://stx-sable.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        alt="stx-clone"
                      >
                        <span className="shortcut-btn">
                          <i className="fa-solid fa-up-right-from-square"></i>
                          &nbsp; Work
                        </span>
                      </a>
                      <a
                        href="https://github.com/devparkse/stx"
                        target="_blank"
                        rel="noopener noreferrer"
                        alt="stx-github"
                      >
                        <span className="shortcut-btn">
                          <i className="fa-brands fa-github"></i>&nbsp; GitHub
                        </span>
                      </a>
                      <a
                        href="http://www.stxconst.co.kr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        alt="stx-origin"
                      >
                        <span className="shortcut-btn">
                          <i className="fa-brands fa-chrome"></i>
                          &nbsp; Origin
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
