export interface User {
  id: string
  username: string
  firstName?: string
  lastName?: string
  role?: string[]
  email?: string
  phone: string
  dob: Date
  emailVerified?: boolean
}

export interface UserRegister {
  firstName: string
  lastName: string
  dob: Date
  email: string
  phone: string
  username: string
  password: string
}
