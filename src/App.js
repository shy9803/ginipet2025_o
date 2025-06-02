import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './layout/Header'; // 헤더
import Footer from './layout/Footer'; // 푸터
import Main from './components/Main'; // 메인
import Intro from './components/Intro'; // 브랜드 소개 페이지
import Info from './components/Info'; // 반려견 정보 페이지
import Event from './components/Event'; // 이벤트 페이지
import Customer from './components/Customer'; // 고객지원 페이지
import Login from './components/Login'; // 로그인 페이지
import Join from './components/Join'; // 회원가입 페이지
import Order from './components/Order'; // 주문조회 페이지
import Cart from './components/Cart'; // 장바구니 페이지

import './styles/reset.css';
import './styles/common.css';
import './styles/layout.css'; //header, footer CSS
import './styles/form.css';

function App() {
  return (
    <>
      {/* frontend */}
      <BrowserRouter>
        <Header />

        {/* 상단 내비게이션 메뉴 클릭시 해당 콤포넌트와 이름이 일치하는 페이지가 나오게... */}
        <Routes>
          <Route path='/ginipet' element={<Main />} />
          {/* 메인 외 메뉴 */}
          <Route path='/intro' element={<Intro />} />
          <Route path='/info' element={<Info />} />
          <Route path='/event' element={<Event />} />
          <Route path='/customer' element={<Customer />} />

          {/* 회원가입, 로그인 컴포넌트 */}
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Join />} />
          {/* 주문조회, 장바구니 컴포넌트 */}
          <Route path='/order' element={<Order />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
