import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITimetableEvent {
  id: string;
  title: string;
  start: any;
  end: any;
}

interface ITimetableList {
  data: ITimetableEvent[];
}

const initialState: ITimetableList = {
  data: [],
};

const customModal = createSlice({
  name: "customModal",
  initialState,
  reducers: {
    addEvent: (
      state: ITimetableList,
      action: PayloadAction<ITimetableEvent>
    ) => {
      state.data.push(action.payload);
    },
    editEvent: (state: ITimetableList, action: PayloadAction<any>) => {
      state.data = state.data.map((item) =>
        item.id === action.payload.id
          ? { ...item, title: action.payload }
          : item
      );
    },
    deleteEvent: (state: ITimetableList, action: PayloadAction<number>) => {
      state.data.splice(action.payload, 1);
    },
  },
});

const { reducer, actions } = customModal;
export const { addEvent, editEvent, deleteEvent } = actions;
export default reducer;
