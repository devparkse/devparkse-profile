import React from "react";
import Anime from "../assets/Anime";

const Visual = () => {
  const path = process.env.PUBLIC_URL;

  return (
    <div className="visual scroll">
      <div className="inner">
        {/* 첫인상 남기기(사진/대표단어) */}
        <div className="visual-intro">
          <p className="visual-intro-greet">안녕하십니까 :)</p>
          <p className="visual-intro-txt">
            <b className="underline-1">새로운 것</b>에 대한&nbsp;
            <b className="underline-2">도전정신</b>
            과&nbsp;
            <b className="underline-3">원활한 의사소통 능력</b>을 가진
          </p>
          <p className="visual-intro-txt">
            프론트엔드 개발자 <b className="visual-name">박시은</b>입니다.
          </p>
        </div>
        <img src={`${path}/images/visual.png`} alt="visual" />
        {/* <img src="/images/visual.png" alt="visual" /> */}
      </div>
    </div>
  );
};

export default Visual;
