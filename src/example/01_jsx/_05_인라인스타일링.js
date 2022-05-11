import React from "react";
import "./css/_05_인라인스타일링.css";

export default function _05_인라인스타일링() {
  // 변수에 스타일을 지정하여 JSX에 넣을 수 있다.
  const name = "react";
  const name02 = "vue";
  const name03 = "angular";
  const style = {
    backgroundColor: "green",
    fontSize: "1.2rem",
    fontWeight: "bold",
  };
  return (
    <>
      <div style={style}>{name}</div>
      {/* 태그 내부에 직접적으로 인라인 스타일링도 가능하다. */}
      {/* 객체 형식으로 스타일을 표기할 땐 하이픈(-) 대신 카멜 표기법으로 표기한다. */}
      <div style={{ backgroundColor: "blue", fontSize: "1.5rem", color: "yellow", fontWeight: "bold", padding: "13px", margin: "10px" }}>{name02}</div>
      {/* 보통은 외부에 따로 css를 만들어 className을 사용하여 적용한다 */}
      <div className="box01">{name03}</div>
    </>
  );
}
