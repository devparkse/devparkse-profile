import React from "react";

const Profile = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <section className="profile scroll">
      <div className="inner">
        {/* 자기소개(인사팀) : 약력, 학력, 업무 경험, 교육, 성격, MBTI */}
        <h2 className="about-me" data-aos="fade-up" data-aos-duration="1000">
          ABOUT ME
        </h2>
        <p
          className="about-title"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          "저는 도전을 두려워하지 않으며 열린 사고로 협업하는&nbsp;
          <span
            className="title-name"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            박시은
          </span>{" "}
          입니다."
        </p>
        <div className="contents">
          <div
            className="profile-box-left"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <img
              src={`${path}/images/profile.png`}
              alt="profile"
              className="profile-img"
            />
          </div>
          <div
            className="profile-box-right"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div className="profile-desc">
              <div className="desc-pt1">
                <p className="desc-title">함께 일하고 싶은 동료가 되기 위해</p>
                <p>
                  개발자는 개발자뿐만 아니라 디자이너, 마케터와 같은 개발자
                  이외의 직군과도 소통이 원활히 이루어져야 합니다.
                </p>
                <p>
                  유연한 커뮤니케이션을 통해 일이 효율적으로 진행될 수 있게
                  노력합니다. 동료들과 지속적으로 의견을 나누며 끝까지 해결하여
                  더 좋은 기능과 개발 환경을 만들 수 있는 개발자가 되겠습니다.
                </p>
              </div>
              <p className="desc-title">더 나은 개발자가 되기 위해</p>
              <p>
                어려운 문제를 해결하는 도전을 즐기고 더 성장하고자 하는 열망이
                있습니다.
              </p>
              <p>
                어떻게든 해내겠다는 의지와 쉽게 포기하지 않는 끈기를 가지고
                문제를 방치하기보단 주도적으로 해결하려고 나섭니다. 제 장점인
                성실성, 꼼꼼함, 협동심을 살려 맡은 바 강한 책임감을 가지고
                수행합니다.
              </p>
            </div>
            <div className="profile-etc">
              <div className="profile-edu">
                <p className="etc-title">Education</p>
                <p className="edu-title">
                  [KDT] 기업 요구를 반영한 프로젝트 중심 백엔드 협업 프론트엔드
                  React 개발자 양성
                </p>
                <p>2022-10-28 ~ 2023-04-13</p>
                <p>그린컴퓨터아트학원</p>
              </div>
              <div className="profile-license">
                <p className="etc-title">License</p>
                <p>워드프로세서1급</p>
                <p>정보처리기능사</p>
                <p>정보기술자격(ITQ) 한글엑셀 A등급</p>
                <p>정보기술자격(ITQ) 한글액세스 A등급</p>
                <p>1종보통 운전면허</p>
              </div>
            </div>
            <div className="profile-link">
              <p className="link-title">
                프론트엔드 (React) & 백엔드 (Spring-Boot) 협업 프로젝트
              </p>
              <div className="shortcut-icon">
                <div>
                  <a
                    href="https://github.com/devparkse/KyoboBooks"
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="github"
                  >
                    <img src={`${path}/images/github.png`} alt="github" />
                  </a>
                  <div className="icon-title">
                    <span>미니 프로젝트</span>
                    <span className="pro-sub">(교보문고)</span>
                  </div>
                </div>
                <div>
                  <a
                    href="https://github.com/devparkse/damhwamarket"
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="github"
                  >
                    <img src={`${path}/images/github.png`} alt="github" />
                  </a>
                  <div className="icon-title">
                    <span>1차 프로젝트</span>
                    <span className="pro-sub">(배달, 음식주문 서비스)</span>
                  </div>
                </div>
                <div>
                  <a
                    href="https://github.com/devparkse/accountbook"
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="github"
                  >
                    <img src={`${path}/images/github.png`} alt="github" />
                  </a>
                  <div className="icon-title">
                    <span>2차 프로젝트</span>
                    <span className="pro-sub">(일정 관리 서비스)</span>
                  </div>
                </div>
                <div>
                  <a
                    href="https://github.com/devparkse/nct-lms"
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="github"
                  >
                    <img src={`${path}/images/github.png`} alt="github" />
                  </a>
                  <div className="icon-title">
                    <span>3차 프로젝트</span>
                    <span className="pro-sub">(성적 관리 서비스)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
