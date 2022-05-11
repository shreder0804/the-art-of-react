import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./example/Home";
import _01_텍스트출력하기 from "./example/01_jsx/_01_텍스트출력하기";
import _02_요소감싸기 from "./example/01_jsx/_02_요소감싸기";
import _03_변수표현 from "./example/01_jsx/_03_변수표현";
import _04_조건부연산자 from "./example/01_jsx/_04_조건부연산자";
import _05_인라인스타일링 from "./example/01_jsx/_05_인라인스타일링";
import _01_클래스형컴포넌트 from "./example/02_component/_01_클래스형컴포넌트";

function App() {
  const title01 = {
    describe: "jsx",
    name: ["_01_텍스트출력하기", "_02_요소감싸기", "_03_변수표현", "_04_조건부연산자", "_05_인라인스타일링"],
    src: ["print-text", "element-cover", "variable-expression", "conditional-operator", "inline-style"],
  };
  const title02 = {
    describe: "component",
    name: ["_01_클래스형컴포넌트"],
    src: ["class-component"],
  };

  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <nav>
            <ul>
              <Link to={`/`}>
                <li>Home</li>
              </Link>
              <Link to={`/${title01.src[0]}`}>
                <li>{title01.name[0]}</li>
              </Link>
              <Link to={`/${title01.src[1]}`}>
                <li>{title01.name[1]}</li>
              </Link>
              <Link to={`/${title01.src[2]}`}>
                <li>{title01.name[2]}</li>
              </Link>
              <Link to={`/${title01.src[3]}`}>
                <li>{title01.name[3]}</li>
              </Link>
              <Link to={`/${title01.src[4]}`}>
                <li>{title01.name[4]}</li>
              </Link>
              <Link to={`/${title02.src[0]}`}>
                <li>{title02.name[0]}</li>
              </Link>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path={`/${title01.src[0]}`} element={<_01_텍스트출력하기 />} />
          <Route exact path={`/${title01.src[1]}`} element={<_02_요소감싸기 />} />
          <Route exact path={`/${title01.src[2]}`} element={<_03_변수표현 />} />
          <Route exact path={`/${title01.src[3]}`} element={<_04_조건부연산자 />} />
          <Route exact path={`/${title01.src[4]}`} element={<_05_인라인스타일링 />} />
          <Route exact path={`/${title02.src[0]}`} element={<_01_클래스형컴포넌트 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
