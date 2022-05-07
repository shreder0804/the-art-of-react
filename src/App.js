import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './example/Home';
import _01_텍스트출력하기 from './example/01_jsx/_01_텍스트출력하기';
import _02_요소감싸기 from './example/01_jsx/_02_요소감싸기';
import _03_변수표현 from './example/01_jsx/_03_변수표현';
import _04_조건부연산자 from './example/01_jsx/_04_조건부연산자';

function App() {
  const title = {
    name: ['_01_텍스트출력하기', '_02_요소감싸기', '_03_변수표현', '_04_조건부연산자'],
    src: ['print-text', 'element-cover', 'variable-expression', 'conditional-operator'],
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
              <Link to={`/${title.src[0]}`}>
                <li>{title.name[0]}</li>
              </Link>
              <Link to={`/${title.src[1]}`}>
                <li>{title.name[1]}</li>
              </Link>
              <Link to={`/${title.src[2]}`}>
                <li>{title.name[2]}</li>
              </Link>
              <Link to={`/${title.src[3]}`}>
                <li>{title.name[3]}</li>
              </Link>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path={`/${title.src[0]}`} element={<_01_텍스트출력하기 />} />
          <Route exact path={`/${title.src[1]}`} element={<_02_요소감싸기 />} />
          <Route exact path={`/${title.src[2]}`} element={<_03_변수표현 />} />
          <Route exact path={`/${title.src[3]}`} element={<_04_조건부연산자 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
