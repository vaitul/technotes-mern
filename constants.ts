export const SERVER_CONST = {
  PORT: process.env.PORT || 3500,
};

export const ROUTES_CONST = {
  ANY: "*",
  ROOT: "/",
  ROOT_FILE: "^/$|index(.html)?",
};

export const ORIGINS = {
  ALLOWED: [
    "http://localhost:3000",
    "http://localhost:3500",
    "https://www.mysite.com",
    "https://mysite.com",
  ],
};
