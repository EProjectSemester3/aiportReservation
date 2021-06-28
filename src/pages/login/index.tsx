import { useCallback } from "react"
import { LoginComponent } from "src/components/pages/login"
import { LoginRequest } from "src/services/api/models"
import apiService from "src/services/api"
import { useHistory } from "react-router"
import { useAppDispatch } from "src/state/hooks"
import { userIdentify } from "src/state/userSlice"

export default function LoginPageContainer() {
  const history = useHistory()
  const dispatch = useAppDispatch()
  const onHandleLogin = useCallback(
    async (value: LoginRequest): Promise<void> => {
      const resp = await apiService.login(value)
      if (resp) {
        const currentUser = await apiService.currentUser()
        console.log(currentUser)
        dispatch(userIdentify(currentUser))
        history.push({ pathname: "/" })
      }
    },
    [dispatch, history],
  )

  return <LoginComponent onSubmitLogin={onHandleLogin} />
}
