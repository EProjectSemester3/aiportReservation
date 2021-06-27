import { ReactNode, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { useUser } from "src/state/hooks"

export interface AuthorizedProps {
  redirect?: string
  children: ReactNode
}

export function Authorized(props: AuthorizedProps) {
  const { redirect, children } = props
  const user = useUser()
  const history = useHistory()

  useEffect(() => {
    if (!user) {
      history.push({
        pathname: redirect ? redirect : "/",
      })
    }
  }, [history, redirect, user])

  if (!user) {
    return <></>
  }

  return <>{children}</>
}
