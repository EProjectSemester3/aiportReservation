import { ReactNode } from "react"
import { NavLink } from "react-router-dom"
import { useAppSelector, useUser } from "src/state/hooks"
import { isAdmin } from "src/state/userSlice"

export interface HeaderComponentProps {
  children?: ReactNode
}

export function HeaderComponent(props: HeaderComponentProps) {
  const user = useUser()
  const isShowManage = useAppSelector(isAdmin)

  return (
    <div className="header position-fixed top-0 start-0 bg-white w-100 shadow">
      <div className="row justify-content-around h-100">
        <div className="col-3 d-flex align-items-center">
          <NavLink to="/" exact>
            <h1 className="w-auto m-0 fw-bold">tr.vl+</h1>
          </NavLink>
        </div>
        <ul className="w-auto mb-0 d-flex align-items-center fs-5">
          {isShowManage && (
            <li>
              <NavLink to="/manage" exact>
                Manage
              </NavLink>
            </li>
          )}
          <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          {user ? (
            <>
              <li>
                Hello,&nbsp;
                <NavLink to="/profile" exact>
                  {user.firstName + user.lastName}
                </NavLink>
                !
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  )
}
