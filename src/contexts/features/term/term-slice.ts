import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TermState {
  submitTerm: string;
  term: string;
  herbId: number;
  activeMenu: boolean;
}
const initialState: TermState = {
  submitTerm: "herb",
  term: "",
  herbId: 1,
  activeMenu: true,
};

const termSlice = createSlice({
  name: "term",
  initialState,
  reducers: {
    setSubmitTerm(state, action: PayloadAction<string>) {
      state.submitTerm = action.payload;
    },
    setTerm(state, action: PayloadAction<string>) {
      state.term = action.payload.trim();
    },
    setActiveMenu(state, action: PayloadAction<boolean>) {
      state.activeMenu = action.payload;
    },
    setHerbId(state, action: PayloadAction<number>) {
      state.herbId = action.payload;
    },
  },
});

export const { setSubmitTerm, setTerm, setHerbId, setActiveMenu } =
  termSlice.actions;
export default termSlice.reducer;
