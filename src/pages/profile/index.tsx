import ProfileComponent from "src/components/pages/profile"
import { useUser } from "src/state/hooks"

export default function ProfilePageContainer() {
  const user = useUser()

  if (user === null) {
    return <></>
  }

  return <ProfileComponent user={user} />
}
