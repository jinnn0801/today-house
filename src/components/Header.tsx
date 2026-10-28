import { Link } from 'react-router-dom';
import { useCartStore } from '../stores/cartStore';
import { useAuthStore } from '../stores/authStore';

export default function Header() {
  const cartCount = useCartStore((s) =>
    s.items.reduce((sum, i) => sum + i.quantity, 0)
  );
  const { user, logout } = useAuthStore();

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">오늘의 인테리어</Link>
        <nav className="nav">
          <Link to="/products">스토어</Link>
          <Link to="/cart">장바구니 ({cartCount})</Link>
          {user ? (
            <>
              <span>{user.name}님</span>
              <button onClick={logout}>로그아웃</button>
            </>
          ) : (
            <>
              <Link to="/login">로그인</Link>
              <Link to="/signup">회원가입</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}