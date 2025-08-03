export function login() {
  if (typeof window !== "undefined") {
    sessionStorage.setItem("isLoggedIn", "true");
  }
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