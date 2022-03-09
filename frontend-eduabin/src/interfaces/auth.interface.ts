
export interface AuthRegister {
  name: string
  email: string
  password: string
}

export interface AuthLogin {
  email: string
  password: string
}

export interface IUser {
  name: string;
  user_type: string | number;
  id: number;
  email: string;
  remuneration: [];
  paid_courses: []
}
