// 함수형 컴포넌트(화살표 함수 방식) 선언 방법
import React from "react";

// 화살표 함수와 export default 선언을 동시에 할 수 없다.
const _02_함수형컴포넌트 = () => {
  const name = "황재성";
  return (
    <>
      <div>이 예제는 함수형 컴포넌트 예제입니다</div>
      <h1>{name}</h1>
    </>
  );
};

export default _02_함수형컴포넌트;
