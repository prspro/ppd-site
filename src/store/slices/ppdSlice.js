import { createSlice } from "@reduxjs/toolkit";
import { propertyList } from "../../data/property";

export const ppdSlice = createSlice({
  name: "ppd",
  initialState: {
    list: propertyList,
    searchValue: "",
  },
  reducers: {
    add: (state, action) => {
      state.list.push(action.payload);
    },
  },
});


export default ppdSlice.reducer;

export const { add } = ppdSlice.actions;
