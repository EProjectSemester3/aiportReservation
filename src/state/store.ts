import { configureStore } from "@reduxjs/toolkit"
import { IAppState } from "./models"
import userReducer from "./userSlice"

export function makeStore() {
  return configureStore<IAppState>({
    reducer: {
      user: userReducer,
    },
  })
}

const store = makeStore()

export default store

export type AppDispatch = typeof store.dispatch
