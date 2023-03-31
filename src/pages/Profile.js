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
          "저는 열린 사고로 협업하는{" "}
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
              src={`${path}/images/visual.png`}
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
              <p className="desc-title">함께 일하고 싶은 동료가 되기 위해</p>
              <p>개발자는 혼자 일하지 않고 협업을 베이스로 일을 합니다.</p>
              <p>
                개발자뿐만 아니라 디자이너, 마케터와 같은 개발자 이외의 직군과도
                소통이 원활히 이루어져야 합니다.
              </p>
              <p>
                원활한 의사소통을 통해 일이 효율적으로 진행될 수 있게
                노력합니다.
              </p>
              <br />
              <p className="desc-title">더 나은 개발자가 되기 위해</p>
              <p>
                새로운 것에 대한 호기심과 도전의식, 더 성장하고자 하는 열망이
                있습니다.
              </p>
              <p>어떻게든 해내겠다는 의지와 쉽게 포기하지 않는 끈기를 가지고</p>
              <p>
                동료들과 지속적으로 의견을 나누며 끝까지 해결하여 더 좋은 기능과
                <br />
                개발 환경을 만들 수 있는 개발자가 되겠습니다.
              </p>
            </div>
            <div className="profile-etc">
              <div className="profile-edu">
                <p className="etc-title">Education</p>
                <p className="edu-title">
                  기업 요구를 반영한 프로젝트 중심 프론트엔드 React(리액트)
                  개발자 양성 과정
                </p>
                <p>2022-10-28 ~ 2023-04-13</p>
                <p>그린컴퓨터아트학원</p>
              </div>
              <div className="profile-license">
                <p className="etc-title">License</p>
                <p>워드프로세서1급</p>
                <p>정보기술자격(ITQ) 한글엑셀 A등급</p>
                <p>정보기술자격(ITQ) 한글액세스 A등급</p>
                <p>1종보통 운전면허</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
