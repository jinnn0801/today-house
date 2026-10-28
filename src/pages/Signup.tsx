import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';

export default function Signup() {
  const navigate = useNavigate();
  const signup = useAuthStore((s) => s.signup);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!email || !name || !password || !confirm) {
      setError('모든 항목을 입력해주세요.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('올바른 이메일 형식이 아닙니다.');
      return;
    }
    if (password.length < 8) {
      setError('비밀번호는 8자 이상이어야 합니다.');
      return;
    }
    if (password !== confirm) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    const result = signup(email, password, name);
    if (result) {
      setError(result);
      return;
    }
    alert('회원가입이 완료되었습니다. 로그인해주세요.');
    navigate('/login');
  };

  return (
    <div className="auth-box">
      <h2 className="page-title">회원가입</h2>

      <input
        className="auth-input"
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="auth-input"
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="auth-input"
        type="password"
        placeholder="비밀번호 (8자 이상)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        className="auth-input"
        type="password"
        placeholder="비밀번호 확인"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
      />

      {error && <p className="auth-error">{error}</p>}

      <button className="btn-primary auth-btn" onClick={handleSubmit}>
        가입하기
      </button>

      <p className="auth-link">
        이미 계정이 있으신가요? <Link to="/login">로그인</Link>
      </p>
    </div>
  );
}