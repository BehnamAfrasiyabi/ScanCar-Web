/**
 * ScanCar-Web shared auth helpers.
 * Token key matches shop.html so login and checkout share the same session.
 */
(function (global) {
  const TOKEN_KEY = 'scancar.webToken';
  const API_KEY = 'SCANCAR_API';

  function apiBase() {
    return String(localStorage.getItem(API_KEY) || 'http://127.0.0.1:8000').replace(/\/$/, '');
  }

  function getToken() {
    return localStorage.getItem(TOKEN_KEY) || '';
  }

  function setToken(token) {
    if (token) localStorage.setItem(TOKEN_KEY, token);
    else localStorage.removeItem(TOKEN_KEY);
  }

  async function api(path, opts) {
    opts = opts || {};
    const headers = Object.assign(
      { 'Content-Type': 'application/json', Accept: 'application/json' },
      opts.headers || {}
    );
    const t = getToken();
    if (t) headers.Authorization = 'Bearer ' + t;
    const res = await fetch(apiBase() + path, Object.assign({}, opts, { headers }));
    const body = await res.json().catch(function () { return {}; });
    if (!res.ok || body.ok === false) {
      const err = new Error(body.message || body.error || ('HTTP ' + res.status));
      err.code = body.error;
      err.status = res.status;
      throw err;
    }
    return body.data !== undefined ? body.data : body;
  }

  async function requestOtp(phone) {
    return api('/api/auth/otp/request', {
      method: 'POST',
      body: JSON.stringify({ phone: String(phone || '').trim() }),
    });
  }

  async function verifyOtp(phone, code) {
    const data = await api('/api/auth/otp/verify', {
      method: 'POST',
      body: JSON.stringify({
        phone: String(phone || '').trim(),
        code: String(code || '').trim(),
      }),
    });
    if (data && data.token) setToken(data.token);
    return data;
  }

  async function me() {
    return api('/api/auth/me');
  }

  async function logout() {
    try {
      if (getToken()) await api('/api/auth/logout', { method: 'POST', body: '{}' });
    } finally {
      setToken(null);
    }
  }

  async function updateProfile(payload) {
    return api('/api/auth/profile', {
      method: 'POST',
      body: JSON.stringify(payload || {}),
    });
  }

  /** Redirect to login if not authenticated. Returns user or null. */
  async function requireAuth(loginUrl) {
    loginUrl = loginUrl || 'login.html';
    if (!getToken()) {
      const next = encodeURIComponent(location.pathname.split('/').pop() || 'account.html');
      location.href = loginUrl + '?next=' + next;
      return null;
    }
    try {
      return await me();
    } catch (e) {
      setToken(null);
      const next = encodeURIComponent(location.pathname.split('/').pop() || 'account.html');
      location.href = loginUrl + '?next=' + next;
      return null;
    }
  }

  function queryParam(name) {
    const u = new URL(location.href);
    return u.searchParams.get(name) || '';
  }

  global.ScanCarAuth = {
    apiBase: apiBase,
    getToken: getToken,
    setToken: setToken,
    api: api,
    requestOtp: requestOtp,
    verifyOtp: verifyOtp,
    me: me,
    logout: logout,
    updateProfile: updateProfile,
    requireAuth: requireAuth,
    queryParam: queryParam,
    TOKEN_KEY: TOKEN_KEY,
  };
})(window);
