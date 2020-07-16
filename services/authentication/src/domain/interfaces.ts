export interface JwtPayload {
  user: JwtUserPayload
}

export interface JwtUserPayload {
  _id: string | object
  username: string
  firstName: string
  lastName: string
  email: string
}

export interface SignUpModel {
  username: string
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface LoginModel {
  email: string
  password: string
}
