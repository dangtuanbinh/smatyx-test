import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dialogObj } from "../../../utils/types/modal";

const initialState: dialogObj = {
  content: null,
  title: null,
  isOpen: false,
  maskClosable: true,
  confirmText: "확인",
  closeText: "취소",
  type: "info", // info, confirm-non-content, confirm-all
  actionConfirm: () => {},
  actionCancel: () => {},
  actionAfterClose: () => {},
};

const customDialog = createSlice({
  name: "customModal",
  initialState,
  reducers: {
    openDialog: (state: dialogObj, action: PayloadAction<dialogObj>) => {
      state.isOpen = true;
      state.maskClosable = action.payload?.maskClosable;
      state.content = action.payload.content || initialState.content;
      state.title = action.payload.title || initialState.title;
      state.type = action.payload.type || initialState.type;
      state.confirmText =
        action.payload.confirmText || initialState.confirmText;
      state.closeText = action.payload.closeText || initialState.closeText;
      state.actionConfirm =
        action.payload.actionConfirm || initialState.actionConfirm;
      state.actionCancel =
        action.payload.actionCancel || initialState.actionCancel;
      state.actionAfterClose =
        action.payload.actionAfterClose || initialState.actionAfterClose;
    },
    closeDialog: (state: dialogObj, action: PayloadAction) => {
      state.isOpen = false;
    },
  },
});

const { reducer, actions } = customDialog;
export const { openDialog, closeDialog } = actions;
export default reducer;
