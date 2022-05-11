// 클래스형 컴포넌트 선언방법
import React, { Component } from "react";

class _01_클래스형컴포넌트 extends Component {
  render() {
    const name = "황재성";
    return (
      <>
        <h3>이 컴포넌트는 클래스형 컴포넌트입니다.</h3>
        <h4>{name}</h4>
      </>
    );
  }
}

export default _01_클래스형컴포넌트;
