import {
  configureStore,
  isRejectedWithValue,
  MiddlewareAPI,
  Middleware,
} from "@reduxjs/toolkit";
import authReducer from "./components/auth/authSlice";
import { authApi } from "./components/auth/authApi";
import modalReduer from "./components/customModal/modalSlice";
import dialogReducer from "./components/customDialog/dialogSlice";
import timetableReducer from "./components/timetable/timetableSlice";

const rootReducer = {
  auth: authReducer,
  modal: modalReduer,
  dialog: dialogReducer,
  timetable: timetableReducer,
  [authApi.reducerPath]: authApi.reducer,
};
const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      console.log("rtkQueryErrorLogger", action);
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
