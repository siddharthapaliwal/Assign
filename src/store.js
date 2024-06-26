import { configureStore } from "@reduxjs/toolkit";
import { reducerFun } from "./reducer";

export const data = configureStore({
    reducer:{
        xyz:reducerFun//0
    }
})