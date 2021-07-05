import React from "react"
import { User } from "src/models"
import styles from "./profile.module.scss"

export interface ProfileComponentProps {
  user: User
}

export default function ProfileComponent(props: ProfileComponentProps) {
  const { user } = props

  console.log(user)

  return (
    <div className={`${styles.profile} h-100`}>
      <div className="container h-100">
        <div className="row align-items-center h-100 g-4 gx-5">
          <div className={`${styles.profile__boxUser} col-4`}>
            <div className="row bg-white rounded-3 p-3 shadow">
              <div className="col-12 py-3">
                <div className={`${styles.avatar} rounded-circle m-auto`}>
                  <img
                    src="https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-12 d-flex align-items-center">
                <div>
                  <h2 className="fs-3 fw-bold">{`${user.firstName} ${user.lastName}`}</h2>
                  <p className="fs-6 fw-regular mb-2">
                    Username: {user.userName}
                  </p>
                  <p className="fs-6 fw-regular mb-2">Birthday: {user.dob}</p>
                  <p className="fs-6 fw-regular mb-2">
                    Phone Number: {user.phoneNumber}
                  </p>
                  <p className="fs-6 fw-regular mb-2">Email: {user.email}</p>
                  <button className="btn btn-primary">Edit Profile</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-7">
            <div className=" p-3 rounded bg-white">
              <h2>First Name</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
