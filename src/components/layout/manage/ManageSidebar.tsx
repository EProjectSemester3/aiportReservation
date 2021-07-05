/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, NavLink } from "react-router-dom"
import MetisMenu from "@metismenu/react"

const SideBarManage = () => {
  return (
    <div className="position-fixed h-100 sidebar start-0 top-0">
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark h-100"
        style={{ width: "280px" }}>
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-4 fw-bold">tr.vl+</span>
        </Link>
        <hr />
        <MetisMenu>
          <li>
            <NavLink to="/admin" exact className="parent">
              Home
            </NavLink>
          </li>
          <li>
            <Link to="#" className="has-arrow parent">
              Manage Service
            </Link>
            <ul>
              <NavLink to="/admin/manage-airline">Airline</NavLink>
              <NavLink to="/admin/manage-city">City</NavLink>
              <NavLink to="/admin/manage-flight">Flight</NavLink>
            </ul>
          </li>
          <NavLink to="/admin/manage-user" className="parent">
            User
          </NavLink>
        </MetisMenu>
        <hr />
        <div className="dropdown">
          <a>
            Log out <i className="fa fa-sign-out" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default SideBarManage
