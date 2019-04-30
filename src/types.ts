/**
 * types
 * @author guobin201314@gmail.com on 2019-04-29
 */

export interface User {
  _id: string;
  username: string;
  password: string;
  email: string;
  createdTime: string;
  updatedTime: string;
  __v: number;
}

export interface UserData {
  token: string;
  user: User | null;
}
