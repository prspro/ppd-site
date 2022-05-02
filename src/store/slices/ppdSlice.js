import { createSlice } from "@reduxjs/toolkit";
import { propertyList } from "../../data/property";

export const ppdSlice = createSlice({
  name: "ppd",
  initialState: {
    list: propertyList,
    filterValue: "",
  },
  reducers: {
    addPPD: (state, action) => {
      state.list.push(action.payload);
    },
    updateFilter: (state, action) => {
      state.filterValue = action.payload;
    }
  },
});


export default ppdSlice.reducer;

export const { addPPD, updateFilter } = ppdSlice.actions;
