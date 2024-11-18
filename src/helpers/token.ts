import cookies from "js-cookie";

export function getToken() {
  const cookie = cookies.get("access_token");

  return cookie;
}
