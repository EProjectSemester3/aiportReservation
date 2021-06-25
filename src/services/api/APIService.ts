import { TokenInfo } from "src/models/TokenInfo";
import { AxiosInstance, AxiosRequestConfig } from "axios";
import { LoginRequest } from './models';

export class APIService{
    constructor(private _axios: AxiosInstance) {
        this._axios.interceptors.request.use(
            async (cfg): Promise<AxiosRequestConfig> => {
                const token = localStorage.getItem("token");
                if (token) {
                    cfg.headers['Authorization'] = 'Bearer ' + token;
                }
                return cfg;
            }
        )
    }

    public async login(request: LoginRequest): Promise<boolean>{
        const resp = await this._axios.post<TokenInfo>("/api/User/authenticate", request,
            {
                validateStatus: (status: number) => status === 200 || status === 401
            }
        )

        if (resp.status === 200) {
            localStorage.setItem("token", resp.data.token)
            return true
        }

        return false
    }
}