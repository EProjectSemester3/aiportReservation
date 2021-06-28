import { TokenInfo } from "src/models/TokenInfo"
import { AxiosInstance, AxiosRequestConfig } from "axios"
import { BaseResult, LoginRequest } from "./models"
import { User, UserRegister } from "src/models"

export class APIService {
  constructor(private _axios: AxiosInstance) {
    this._axios.interceptors.request.use(
      async (cfg): Promise<AxiosRequestConfig> => {
        const token = localStorage.getItem("token")
        if (token) {
          cfg.headers["Authorization"] = "Bearer " + token
        }
        return cfg
      },
    )
  }

  public async login(request: LoginRequest): Promise<boolean> {
    const resp = await this._axios.post<TokenInfo>("/User/login", request, {
      validateStatus: (status: number) => status === 200 || status === 401,
    })

    if (resp.status === 200) {
      localStorage.setItem("token", resp.data.token)
      return true
    }

    return false
  }

  public async register(request: UserRegister): Promise<BaseResult> {
    const resp = await this._axios.post<BaseResult>(
      "/User/register",
      request,
      {
        validateStatus: (status: number) => status === 201 || status === 400,
      },
    )
    return resp.data
  }

  public async currentUser(): Promise<User> {
    const resp = await this._axios.get<User>("/User/me", {
      validateStatus: (status: number) => status === 200,
    })
    return resp.data
  }
}
