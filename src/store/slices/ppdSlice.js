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
    incrementWatchCounter: (state, action) => {
      state.list = state.list.map((entry) => {
        if (entry.id === action.payload) {
          return { ...entry, views: entry.views + 1 };
        } else {
          return entry;
        }
      });
    },
    updateFilter: (state, action) => {
      state.filterValue = action.payload;
    },
  },
});

export default ppdSlice.reducer;

export const { addPPD, updateFilter, incrementWatchCounter } = ppdSlice.actions;
