export const PASSWORD = process.env.OWNER_PSWD || 'password123';

export function login(password) {
  if (typeof window !== "undefined" && password === PASSWORD) {
    sessionStorage.setItem("isLoggedIn", "true");
    return true;
  }
  return false;
}

export function logout() {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem("isLoggedIn");
  }
}

export function isLoggedIn() {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem("isLoggedIn") === "true";
}
