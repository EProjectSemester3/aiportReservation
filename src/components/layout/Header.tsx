import { ReactNode } from "react"
import { NavLink } from "react-router-dom"

export interface HeaderComponentProps {
  children?: ReactNode
}

export function HeaderComponent(props: HeaderComponentProps) {
  return (
    <div className="header position-fixed top-0 start-0 bg-white w-100 p-2 shadow">
      <div className="row justify-content-around">
        <h1 className="w-auto">AirportReservation</h1>
        <ul className="w-auto mb-0 d-flex align-items-center fs-4">
          <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}
