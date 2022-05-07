import React from 'react';

export default function _02_요소감싸기() {
  return (
    <div>
      {/* JSX는 반드시 리턴할 때 <div></div>, <></>, <Fragment></Fragment> 요소로 감싸야 에러가 발생하지 않는다 */}
      <h1>렌더링을 제대로 하려면</h1>
      <h2>반드시 div나 {`<div></div>, <></>, <Fragment></Fragment>`} 요소로 감싸야 한다.</h2>
    </div>
  );
}
