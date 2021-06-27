export interface LoginRequest {
  username: string
  password: string
  rememberMe: boolean
}

export interface BaseResult {
  message: string
  status: boolean
}
