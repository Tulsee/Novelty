import jwt_decode from "jwt-decode";
async function authHeader() {
  const data = await localStorage.getItem("authToken");
  const token = JSON.parse(data);
  let decoded = jwt_decode(token);
  return decoded;
}
export { authHeader };
