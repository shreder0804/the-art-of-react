import React from 'react';

export default function _04_조건부연산자() {
  const name = '황재성';
  return (
    <div>
      {/* 리액트에서는 if 대신 조건부연산자(삼항연산자)를 사용한다 */}
      {name === '황재성' ? <h1>황재성입니다</h1> : <h1>황재성이 아닙니다</h1>}
    </div>
  );
}
