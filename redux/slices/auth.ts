import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { LoginResponseDto } from "@/app/(auth)/signin/signin-form";

interface AuthState {
  user: LoginResponseDto | null;
}

const initialState: AuthState = {
  user: null,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserLoginDetails: (_, action: PayloadAction<LoginResponseDto>) => {
      return {
        user: action.payload,
      };
    },
  },
});

export const { setUserLoginDetails } = AuthSlice.actions;

export const selectUser = (state: RootState) => state.auth.user;

export default AuthSlice.reducer;
