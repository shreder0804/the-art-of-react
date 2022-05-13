// props 구현(클래스형 컴포넌트)
import React, { Component } from "react";
import Proptypes from "prop-types";
import "./css/_08_CLASS_props.css";

class _08_CLASS_props extends Component {
  render() {
    const { name, age } = this.props;

    return (
      <>
        {/* props.children을 사용하면 컴포넌트 태그 사이의 내용을 보여준다 */}
        <div className="title">클래스형 컴포넌트입니다.</div>
        <div className="username">Proptypes의 이름은 {name}입니다.</div>
        <div className="userage">나이는 {age}입니다.</div>
      </>
    );
  }
}

_08_CLASS_props.defaultProps = {
  name: "기본 이름",
  age: 15,
};

_08_CLASS_props.propTypes = {
  name: Proptypes.string,
  age: Proptypes.number.isRequired,
};

export default _08_CLASS_props;
