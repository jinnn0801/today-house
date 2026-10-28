import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function Layout() {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
<footer className="footer">
  <div className="footer-inner">
    <div className="footer-top">
      <strong className="footer-logo">오늘의 인테리어</strong>
      <div className="footer-links">
        <span>회사소개</span>
        <span>이용약관</span>
        <strong>개인정보처리방침</strong>
        <span>고객센터</span>
      </div>
    </div>

    <div className="footer-info">
      <p>상호명: 주식회사 오늘의인테리어 | 대표자: 이형진</p>
      <p>사업자등록번호: 000-00-00000 | 통신판매업 신고번호: 제2026-경기광주-0000호</p>
      <p>주소: 경기도 광주시 문형산길 47번길 21 </p>
      <p>고객센터: 0000-0000 (평일 10:00 ~ 17:00, 점심 12:00 ~ 13:00)</p>
      <p>이메일: jin01093698259@gmail.com</p>
    </div>

    <p className="footer-copy">
      © 2026 Today Interior. All rights reserved.
    </p>
  </div>
</footer>
    </>
  );
}