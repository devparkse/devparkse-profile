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
              <p className="skill-txt">HTML5</p>
              <p className="hover-txt">
                웹 표준성을 준수하여 시맨틱 마크업 작업을 수행할 수 있습니다.
                검색 엔진 최적화(SEO)를 개선할 수 있습니다.
              </p>
            </li>
            <li data-aos="fade-up" data-aos-duration="500" data-aos-delay="400">
              <img src={`${path}/images/css.png`} alt="skill" />
              <p className="skill-txt">CSS3</p>
              <p className="hover-txt">
                주어진 디자인에 따라 레이아웃을 구성할 수 있습니다. 인터랙션 CSS
                작업과 반응형 웹 디자인이 가능합니다.
              </p>
            </li>
            <li data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
              <img src={`${path}/images/js.png`} alt="skill" />
              <p className="skill-txt">JavaScript</p>
              <p className="hover-txt">
                ES6를 꾸준히 학습함으로써 새로운 기술과 개선된 문법을 사용하여
                개발 생산성을 높이려 노력합니다. React 와 같은 JavaScript
                라이브러리를 사용할 수 있습니다.
              </p>
            </li>
            <li data-aos="fade-up" data-aos-duration="500" data-aos-delay="600">
              <img
                className="react-icon"
                src={`${path}/images/react.png`}
                alt="skill"
              />
              <p className="skill-txt">React</p>
              <p className="hover-txt">
                useState, useEffect 와 같은 Hook 을 사용하여 상태 관리 및
                컴포넌트에서 발생하는 다양한 이벤트에 대한 작업을 수행할 수
                있습니다. Axios를 사용하여 API 서버로 요청을 보내고 받은 응답
                데이터를 처리할 수 있습니다.
              </p>
            </li>
            <li data-aos="fade-up" data-aos-duration="500" data-aos-delay="700">
              <img
                className="redux-icon"
                src={`${path}/images/redux.png`}
                alt="skill"
              />
              <p className="skill-txt">Redux</p>
              <p className="hover-txt">
                Redux Toolkit의 createSlice 함수를 사용하여 일반적인 리듀서
                코드의 양을 줄이고 더 적은 코드로 리덕스 상태를 조작할 수 있도록
                할 수 있습니다.
              </p>
            </li>
            <li data-aos="fade-up" data-aos-duration="500" data-aos-delay="800">
              <img src={`${path}/images/ts.png`} alt="skill" />
              <p className="skill-txt">TypeScript</p>
              <p className="hover-txt">
                변수와 함수의 데이터 타입을 명시함으로써 코드 가독성을
                향상시키고 안정적인 코드를 작성할 수 있습니다.
                <br />또 코드에서 발생하는 오류를 미리 방지하여 코드 유지
                보수성을 높일 수 있습니다.
              </p>
            </li>
            <li data-aos="fade-up" data-aos-duration="500" data-aos-delay="900">
              <img src={`${path}/images/github.png`} alt="skill" />
              <p className="skill-txt">GitHub</p>
              <p className="hover-txt">
                Pull Request로 코드 변경 사항 검토 및 병합할 수 있습니다. GitHub
                Pages를 사용하여 정적 웹사이트를 호스팅 할 수 있습니다. 다른
                사용자와 코드 작업 공유, 관리하여 협업할 수 있습니다.
              </p>
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="1000"
            >
              <img src={`${path}/images/scss.png`} alt="skill" />
              <p className="skill-txt">Scss</p>
              <p className="hover-txt">
                반복 사용되는 스타일을 믹스인으로 정의하고 값을 변수에 저장하여
                재사용할 수 있습니다. CSS 규칙을 중첩하여 불필요한 코드의 반복을
                줄여 가독성, 유지보수성을 높일 수 있습니다.
              </p>
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="1100"
            >
              <img src={`${path}/images/styled-components.png`} alt="skill" />
              <p className="skill-txt">styled-components</p>
              <p className="hover-txt">
                변수를 사용하여 스타일을 구성할 수 있습니다. 스타일링된
                컴포넌트를 다른 컴포넌트에서 재사용할 수 있습니다. 이를 통해 CSS
                코드의 중복을 방지하고 유지 보수성을 향상시킬 수 있습니다.
              </p>
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="1200"
            >
              <img src={`${path}/images/antd.png`} alt="skill" />
              <p className="skill-txt">Ant Design</p>
              <p className="hover-txt"></p>
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="1300"
            >
              <img
                className="tailwind-icon"
                src={`${path}/images/tailwind.png`}
                alt="skill"
              />
              <p className="skill-txt">Tailwind CSS</p>
              <p className="hover-txt">
                필요한 스타일 클래스만 포함되도록 구성하여 불필요한 CSS 코드를
                제거하고, 페이지 로딩 속도를 개선할 수 있습니다. 필요한 스타일
                클래스를 직접 추가하거나, 사전에 정의된 클래스를 변경하여
                커스터마이징할 수 있습니다.
              </p>
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="1400"
            >
              <img src={`${path}/images/figma.png`} alt="skill" />
              <p className="skill-txt">Figma</p>
              <p className="hover-txt">
                디자인에 맞게 와이어 프레임을 구성할 수 있습니다. 팀원들과
                동시에 작업할 수 있어 팀원 간의 협업이 용이해지며 디자인 작업의
                생산성을 높일 수 있음을 알고 있습니다.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
