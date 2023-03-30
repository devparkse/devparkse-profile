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
            <li
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <img src={`${path}/images/hanriver.jpeg`} alt="hanriver" />
              <div className="img-hover">
                <p className="img-title"># 한강 자전거</p>
                <p className="img-desc">
                  서울 가면 필수 코스!
                  <br />
                  신나게 자전거 탄 후
                  <br />
                  돗자리 깔고 치킨 & 라면!
                </p>
              </div>
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <img src={`${path}/images/hongkong.png`} alt="hongkong" />
              <div className="img-hover">
                <p className="img-title"># 홍콩 & 마카오</p>
                <p className="img-desc">
                  홍콩의 맛있는 디저트들,
                  <br />
                  마카오의 화려한 명소들
                  <br />또 가고 싶다!
                </p>
              </div>
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <img src={`${path}/images/jeju.jpeg`} alt="jeju" />
              <div className="img-hover">
                <p className="img-title"># 제주 오설록</p>
                <p className="img-desc">
                  티뮤지엄 구경 후
                  <br />
                  녹차 아이스크림 먹고
                  <br />
                  녹차밭에서
                </p>
              </div>
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <img src={`${path}/images/pump.png`} alt="pump" />
              <div className="img-hover">
                <p className="img-title"># 오락실 펌프</p>
                <p className="img-desc">
                  주기적으로 뛰어줘야 하는
                  <br />
                  오락실 게임 중 Best 😍
                  <br />
                  유산소 운동엔 이만한 게 없지
                </p>
              </div>
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <img src={`${path}/images/theater.jpeg`} alt="theater" />
              <div className="img-hover">
                <p className="img-title"># 영화관(feat.팝콘)</p>
                <p className="img-desc">
                  팝콘 먹는 재미도 빠질 수 없지
                  <br />
                  영화 시작 전에 다 먹은 건
                  <br />
                  비밀 😉
                </p>
              </div>
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <img src={`${path}/images/eworld.jpeg`} alt="eworld" />
              <div className="img-hover">
                <p className="img-title"># 이월드 케이블카</p>
                <p className="img-desc">
                  해질 때까지 있어야 하는 이유!
                  <br />
                  짧아서 더 예쁘고
                  <br />
                  아쉽게 느껴지는 😊
                </p>
              </div>
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="700"
            >
              <img src={`${path}/images/aquarium.jpeg`} alt="aquarium" />
              <div className="img-hover">
                <p className="img-title"># 대구아쿠아리움</p>
                <p className="img-desc">
                  아름다웠던 인어공주님
                  <br />
                  동심의 세계로~!
                  <br />
                  가오리도 함께 'ㅡ'
                </p>
              </div>
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="800"
            >
              <img src={`${path}/images/bird.gif`} alt="bird" />
              <div className="img-hover">
                <p className="img-title"># 토코투칸</p>
                <p className="img-desc">
                  모형 아님 주의!
                  <br />
                  모형이랑 똑같이 생겨서
                  <br />
                  움직이는 걸 봐야 구별 가능 🤣
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Life;
