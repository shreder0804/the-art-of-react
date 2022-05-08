import React from 'react';

export default function _04_조건부연산자() {
  const name01 = '황재성';
  const name02 = '빵재성';
  const name03 = undefined;
  return (
    <div>
      {/* 리액트에서는 if 대신 조건부연산자(삼항연산자)를 사용한다 */}
      {name01 === '황재성' ? <h1>황재성입니다</h1> : <h1>황재성이 아닙니다</h1>}
      {/* 특정 조건을 만족하지 않을 땐 null을 사용하거나 && 연산자를 사용할 수 있다 */}
      {/* 아래의 두 코드는 같은 기능이다 */}
      {name02 === '황재성' ? <h1>황재성입니다</h1> : null}
      {name02 === '황재성' && <h1>황재성입니다</h1>}
      {/* undefined이면 아무 것도 나타나지 않는다 */}
      {name03}
      {/* undefined일 때 보여주고 싶은 문구가 있다면 || 연산자를 사용한다 */}
      {name03 || <h1>undefined입니다</h1>}
    </div>
  );
}
