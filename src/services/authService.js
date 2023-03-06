import http from "../http-common";

const login = (data) => {
  return http.post("/user/login", data);
};

const regsiter = (data) => {
  return http.post("/user/register", data);
};

const authService = {
  login,
  regsiter,
};

export default authService;
