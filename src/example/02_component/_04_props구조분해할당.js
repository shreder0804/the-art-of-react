import React from "react";
import "./css/_04_props구조분해할당.css";

const _04_props구조분해할당 = ({ name, subject }) => {
  return (
    <>
      {/* 가독성을 높이기 위해 props 객체에 구조분해할당을 할 수 있다. */}
      <div>이 컴포넌트는 {name}입니다.</div>
      <div className="subject">지금 배우는 라이브러리는 {subject}입니다.</div>
    </>
  );
};

export default _04_props구조분해할당;
