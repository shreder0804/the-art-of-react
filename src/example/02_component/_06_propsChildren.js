import React from "react";

const _06_propsChildren = ({ children }) => {
  return (
    <>
      {/* props.children을 사용하면 컴포넌트 태그 사이의 내용을 보여준다 */}
      <div>이 컴포넌트의 children은 {children}입니다.</div>
    </>
  );
};

export default _06_propsChildren;
