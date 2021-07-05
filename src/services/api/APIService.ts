import { TokenInfo } from "src/models/TokenInfo"
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import { BaseResult, LoginRequest } from "./models"
import { User, UserRegister, AirlineResult, Airline } from "src/models"

export class APIService {
  constructor(private _axios: AxiosInstance) {
    this._axios.interceptors.request.use(
      async (cfg): Promise<AxiosRequestConfig> => {
        const token = sessionStorage.getItem("token")
        if (token) {
          cfg.headers["Authorization"] = "Bearer " + token
        }
        return cfg
      },
    )
  }

  public async login(request: LoginRequest): Promise<boolean> {
    const resp = await this._axios.post<TokenInfo>("/Auth/login", request, {
      validateStatus: (status: number) => status === 200 || status === 401,
    })

    if (resp.status === 200) {
      sessionStorage.setItem("token", resp.data.token)
      return true
    }

    return false
  }

  public async register(request: UserRegister): Promise<BaseResult> {
    const resp = await this._axios.post<BaseResult>("/Auth/register", request, {
      validateStatus: (status: number) => status === 201 || status === 400,
    })
    return resp.data
  }

  public async currentUser(): Promise<User> {
    const resp = await this._axios.get<User>("/Auth/me", {
      validateStatus: (status: number) => status === 200,
    })
    return resp.data
  }

  public async getAirline(): Promise<AirlineResult> {
    const resp = await this._axios.get<AirlineResult>("/Airline", {
      validateStatus: (status: number) => status === 200,
    })
    return resp.data
  }

  public async createAirline(airlineName: string): Promise<AxiosResponse> {
    const resp = await this._axios.post<Airline>(
      "/Airline",
      {
        airlineName: airlineName,
        airlineId: 0,
      },
      {
        validateStatus: (status: number) => status === 201,
      },
    )
    return resp
  }

  public async updateAirline(value: Airline): Promise<AxiosResponse> {
    const resp = await this._axios.put<Airline>(
      `/Airline/${value.airlineId}`,
      value,
      {
        validateStatus: (status: number) => status === 200,
      },
    )
    return resp
  }
}
