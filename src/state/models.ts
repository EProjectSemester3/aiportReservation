import { User } from "src/models"

export interface UserState {
  value: User | null
}

export interface IAppState {
  user: UserState
}
