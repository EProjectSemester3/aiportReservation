import { ReactNode, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { useUser } from "src/state/hooks"

export interface AnonymousProps {
  redirect?: string
  children: ReactNode
}

export function Anonymous(props: AnonymousProps) {
  const { children, redirect } = props
  const user = useUser()
  const history = useHistory()

  useEffect(() => {
    if (user) {
      history.push({
        pathname: redirect ? redirect : "/",
      })
    }
  }, [history, redirect, user])

  if (user) {
    return <></>
  }

  return <>{children}</>
}
