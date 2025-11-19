// Simple API client wrapping fetch with base URL and token handling
const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'https://gat-zm1r.onrender.com';

export function getAuthToken() {
  return localStorage.getItem('tp_token') || '';
}

export function setAuthToken(token) {
  localStorage.setItem('tp_token', token);
}

async function request(path, { method = 'GET', headers = {}, body, auth = false, form = false } = {}) {
  const url = `${BASE_URL}${path}`;
  const h = new Headers(headers);
  if (!form) h.set('Content-Type', 'application/json');
  if (auth) {
    const token = getAuthToken();
    if (token) h.set('Authorization', `Bearer ${token}`);
  }
  const res = await fetch(url, {
    method,
    headers: h,
    body: form ? body : body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) {
    let msg = 'Request failed';
    try {
      const data = await res.json();
      msg = data?.detail || JSON.stringify(data);
    } catch (_) {}
    throw new Error(msg || `${res.status} ${res.statusText}`);
  }
  const ct = res.headers.get('content-type') || '';
  if (ct.includes('application/json')) return res.json();
  return res.text();
}

export const api = {
  // Auth
  register: (email, password) => request('/auth/create-user', { method: 'POST', body: { email, password } }),
  login: (email, password) => {
    const body = new URLSearchParams();
    body.set('email', email);
    body.set('password', password);
    body.set('scope', '');
    return request('/auth/token', { method: 'POST', auth: false, form: true, body });
  },
  userInfo: () => request('/auth/user-info', { auth: true }),

  // Dashboard
  notifications: () => request('/dash/notification', { auth: true }),
  recentTrades: (status) => request(`/dash/recent-trades${status ? `?status=${encodeURIComponent(status)}` : ''}`, { auth: true }),
  transfer: (from_wallet, to_wallet, amount) => request('/dash/transfer', { method: 'POST', auth: true, body: { from_wallet, to_wallet, amount } }),

  // Arbitrage
  arbExchanges: () => request('/arb/arbitrage-exc'),
  arbSymbols: () => request('/arb/arbitrage-symbol'),
  arbScanner: (exchanges = [], symbols = [], min_profit = 0.001) => {
    const params = new URLSearchParams();
    for (const e of exchanges) params.append('exchanges', e);
    for (const s of symbols) params.append('symbols', s);
    params.set('min_profit', String(min_profit));
    return request(`/arb/opportunity-scanner?${params.toString()}`);
  },
};
