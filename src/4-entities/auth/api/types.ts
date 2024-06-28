import { ERoles } from '@/5-shared/access'

export interface ILoginResponse {
  access_token: string
  refresh_token: string
}

export interface IMeResponse {
  user_id: number
  email: string
  first_name: string
  last_name: string
  role: ERoles
}

export interface ILoginForm {
  email: string
  password: string
}
