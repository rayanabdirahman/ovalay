export interface SignUpModel {
  username: string
  name: string
  email: string
  password: string
  role?: string
}

export interface JwtUserPayload {
  _id: string | object
}

export interface JwtPayload {
  user: JwtUserPayload
}
