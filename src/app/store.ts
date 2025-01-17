import {
  configureStore,
  createSlice,
} from "@reduxjs/toolkit";
import { Company } from "../types/model";

const initialData: Array<Company> = [];

export const appSlice = createSlice({
  name: "companies",
  initialState: {
    companies: initialData,
  },
  reducers: {
    newValue: (state, action) => {
      state.companies = action.payload;
    },
  },
});

export const treeSlice = createSlice({
  name: "tree",
  initialState: {
    tree: null,
  },
  reducers: {
    newTree: (state, action) => {
      state.tree = action.payload;
    },
  },
});

export const { newValue } = appSlice.actions;
export const { newTree } = treeSlice.actions;

export const store = configureStore({
  reducer: {
    companies: appSlice.reducer,
    tree: treeSlice.reducer,
  },
});
