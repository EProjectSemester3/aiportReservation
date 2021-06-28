import { Action, ThunkAction } from "@reduxjs/toolkit"
import { User } from "src/models"

export interface UserState {
  value: User | null
}

export interface IAppState {
  user: UserState
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  IAppState,
  unknown,
  Action<string>
>
