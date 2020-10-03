export interface SignUpModel {
  username: string
  name: string
  email: string
  password: string
  role?: string
}

export interface SignInModel {
  email: string
  password: string
}

export type ApiSuccessResponse = {
  status: string
  code: number
  data: {}
}