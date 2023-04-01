import React from "react";

const Visual = () => {
  const path = process.env.PUBLIC_URL;

  return (
    <div className="visual scroll">
      <div className="inner">
        {/* 첫인상 남기기(사진/대표단어) */}
        <div className="visual-intro">
          <p>안녕하세요 : )</p>
          <p>
            새로운 것에 대한 <b>도전정신</b>과<br />
            원활한 <b>의사소통 능력</b>을 가진
          </p>
          <p className="visual-txt">
            <b className="visual-name">프론트엔드 개발자 박시은</b>입니다.
          </p>
        </div>
        {/* <img src={`${path}/images/비주얼.png`} alt="visual" /> */}
        {/* <img src="/images/visual.png" alt="visual" /> */}
      </div>
    </div>
  );
};

export default Visual;
