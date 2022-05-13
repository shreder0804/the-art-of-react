import React from "react";

const _05_defaultProps = ({ name }) => {
  return (
    <>
      <div style={{ color: "green" }}>defaultProps의 name은 {name}입니다.</div>
    </>
  );
};

// 컴포넌트에 defaultProps를 설정하면 기본으로 보여주는 매개변수를 웹에 보여줌
_05_defaultProps.defaultProps = {
  name: "기본 이름",
};

export default _05_defaultProps;
