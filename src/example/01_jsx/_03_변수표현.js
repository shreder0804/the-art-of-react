import React from 'react';

export default function _03_변수표현() {
  const name = '황재성';
  return (
    <div>
      {/* 변수를 표현할 때는 중괄호 {} 안에 변수를 넣어 표현한다 */}
      <h1>{name}님 안녕하세요</h1>
    </div>
  );
}
