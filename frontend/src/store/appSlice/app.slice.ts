import { ESupportCountry } from "@/model/common.model";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IAppSlice {
  country: ESupportCountry;
}

const initialState = {
  country: ESupportCountry.EN,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCurrentCountry: (
      state: IAppSlice,
      action: PayloadAction<ESupportCountry>
    ) => ({
      ...state,
      country: action.payload,
    }),
  },
});

export const { setCurrentCountry } = appSlice.actions;

export default appSlice.reducer;
