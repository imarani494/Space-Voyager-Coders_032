export const IS_LOGIN = "IS_LOGIN";

export const isLogin = (payload) => {
  return {
    type: IS_LOGIN,
    payload,
  };
};
