/* eslint-disable jsx-a11y/anchor-is-valid */
import { ReactNode } from "react"
import { Link, NavLink } from "react-router-dom"
import { useAppSelector, useUser } from "src/state/hooks"
import { isAdmin } from "src/state/userSlice"
import "../../../node_modules/bootstrap/js/src/dropdown"
import styles from "./mainLayout.module.scss"

export interface HeaderComponentProps {
  children?: ReactNode
}

export function HeaderComponent(props: HeaderComponentProps) {
  const user = useUser()
  const isShowManage = useAppSelector(isAdmin)

  return (
    <div
      className={`${styles.header} position-fixed top-0 start-0 bg-white w-100 shadow`}>
      <div className="row justify-content-around h-100">
        <div className="col-3 d-flex align-items-center">
          <NavLink to="/" exact>
            <h1 className="w-auto m-0 fw-bold">tr.vl+</h1>
          </NavLink>
        </div>
        <ul className={`${styles.parent__layout} w-auto mb-0 d-flex align-items-center fs-5`}>
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
              <div className="dropdown">
                <button
                  className="btn btn-transparent dropdown-toggle fs-3 shadow-none"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"></button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1">
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/sign-out">
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
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
