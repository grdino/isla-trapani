
export const PASSWORD = process.env.NEXT_PUBLIC_OWNER_PASSWORD || 'password123';

export function login(password) {
  if (password === PASSWORD) {
    sessionStorage.setItem("isLoggedIn", "true");
    return true;
  }
  return false;
}

export function logout() {
  sessionStorage.removeItem("isLoggedIn");
}

export function isLoggedIn() {
  return sessionStorage.getItem("isLoggedIn") === "true";
}
