import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "./authApi";

interface Auth {
  isUserLogin: boolean;
}

const initialState: Auth = {
  isUserLogin: false,
};

const userInfo = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    userLogin: (state: Auth, action: PayloadAction) => {
      state.isUserLogin = true;
    },
    userLogout: (state: Auth, action: PayloadAction) => {
      state.isUserLogin = false;
    },
  },
  extraReducers: (builder: any) => {
    // login with RTK query
    builder
      .addMatcher(
        authApi.endpoints.login.matchFulfilled,
        (state: Auth, action: PayloadAction<any>) => {
          state.isUserLogin = true;
        }
      )
      .addMatcher(
        authApi.endpoints.login.matchRejected,
        (state: Auth, action: PayloadAction<any>) => {}
      );
    // logout
  },
});

const { reducer, actions } = userInfo;
export const { userLogin, userLogout } = actions;
export default reducer;
