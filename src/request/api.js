import request from "./request";

export const RegisterApi = (params) => request.post("/register", params);

// 登录
export const LoginApi = (params) => request.post("/login", params);

// 获取文章列表
export const ArticleListApi = (params) => request.get("/article", { params });

// 添加文章
export const ArticleAddApi = (params) => request.post("/article/add", params);
