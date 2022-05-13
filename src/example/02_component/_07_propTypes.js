import React from "react";
import Proptypes from "prop-types";

const _07_propTypes = ({ name, age }) => {
  return (
    <>
      {/* props.children을 사용하면 컴포넌트 태그 사이의 내용을 보여준다 */}
      <div>Proptypes의 이름은 {name}입니다.</div>
      <div>나이는 {age}입니다.</div>
    </>
  );
};

{
  /* 
  propType는 props의 타입을 검증하는 기능이다.
  
  <사용 방법>
  1. import로 propType를 불러온다.
  2. defaultProps와 비슷한 방법으로 사용한다.
  3. 요소의 타입(string, number...)을 지정해두면 지정된 타입 이외는 브라우저 콘솔창에 에러를 발생시킨다.
  4. isRequired를 사용하면 props를 제대로 지정하지 않았을 때 에러가 발생한다.
*/
}

_07_propTypes.propTypes = {
  name: Proptypes.string,
  age: Proptypes.number.isRequired,
};

export default _07_propTypes;
