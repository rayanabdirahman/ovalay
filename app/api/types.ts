// Api response interfaces
export type ApiSuccessResponse = {
  status: string
  code: number
  data: ApiSuccessDataResponse
}

export type ApiSuccessDataResponse = {
  token: string
  user: User
}

export type ApiErrorResponse = {
  status: string
  code: number
  error: string
}

export type User = {
  _id: string
  username: string
  firstName: string
  lastName: string
  email: string
}

export type SignUpModel = {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export type LoginModel = {
  email: string;
  password: string;
}