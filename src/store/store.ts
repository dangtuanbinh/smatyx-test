import {
  configureStore,
  isRejectedWithValue,
  MiddlewareAPI,
  Middleware,
} from "@reduxjs/toolkit";
import authReducer, { userLogout } from "./components/auth/authSlice";
import { authApi } from "./components/auth/authApi";

const rootReducer = {
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
};
const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      console.log("rtkQueryErrorLogger", action);
      // unauthorized
      if (action.payload.status === 401) {
        api.dispatch(userLogout());
        window.location.href = "/auth";
      }
    }
    return next(action);
  };

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([rtkQueryErrorLogger, authApi.middleware]),
});

export default store;
