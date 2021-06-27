import { useCallback } from "react"
import { LoginComponent } from "src/components/pages/login"
import { LoginRequest } from "src/services/api/models"
import apiService from "src/services/api"
import { useHistory } from "react-router"

export default function LoginPageContainer() {
  const history = useHistory()
  const onHandleLogin = useCallback(
    async (value: LoginRequest): Promise<void> => {
      const resp = await apiService.login(value)
      if (resp) {
        history.push({ pathname: "/" })
      }
    },
    [history],
  )

  return <LoginComponent onSubmitLogin={onHandleLogin} />
}
