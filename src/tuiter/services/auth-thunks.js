import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service";

export const loginThunk = createAsyncThunk(
  "users/login", async (credentials) => {
    const user = await authService.login(credentials);
    console.log("hellllllllllllllllll");
    console.log(user);
    return user;
  }
 );
 
export const registerThunk = createAsyncThunk(
    "users/register", async (username,password) => {
      const user = await authService.register(username,password);
      console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>");
      console.log(user);
      return user;
    }
   );
export const profileThunk = createAsyncThunk(
    "auth/profile", async () => {
    const response = await authService.profile();
    return response.data;
   });
   export const logoutThunk = createAsyncThunk(
    "auth/logout", async () => {
    return await authService.logout();
   });
   export const updateUserThunk = createAsyncThunk(
    "users/updateUser", async (user) => {
      await authService.updateUser(user);
      return user;
   });
   

