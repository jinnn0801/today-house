import { create } from 'zustand';
import type { User } from '../types';

interface StoredUser extends User {
  password: string;
}

interface AuthState {
  user: User | null;
  signup: (email: string, password: string, name: string) => string | null;
  login: (email: string, password: string) => string | null;
  logout: () => void;
}

const USERS_KEY = 'clone_users';
const SESSION_KEY = 'clone_session';

const getUsers = (): StoredUser[] =>
  JSON.parse(localStorage.getItem(USERS_KEY) || '[]');

const getSession = (): User | null => {
  const raw = localStorage.getItem(SESSION_KEY);
  return raw ? JSON.parse(raw) : null;
};

// 반환값: 에러 메시지(실패) 또는 null(성공)
export const useAuthStore = create<AuthState>((set) => ({
  user: getSession(),
  signup: (email, password, name) => {
    const users = getUsers();
    if (users.some((u) => u.email === email)) {
      return '이미 가입된 이메일입니다.';
    }
    users.push({ email, password, name });
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    return null;
  },
  login: (email, password) => {
    const found = getUsers().find(
      (u) => u.email === email && u.password === password
    );
    if (!found) return '이메일 또는 비밀번호가 올바르지 않습니다.';
    const user = { email: found.email, name: found.name };
    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    set({ user });
    return null;
  },
  logout: () => {
    localStorage.removeItem(SESSION_KEY);
    set({ user: null });
  },
}));