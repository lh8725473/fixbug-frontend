import { httpService } from './http-service';
import { AxiosInstance } from 'axios';

/**
 * auth-service
 * @author guobin201314@gmail.com on 2019-04-20
 */

export class UserService {
  private http: AxiosInstance;

  constructor() {
    this.http = httpService;
  }

  login(username: string, password: string) {
    return this.http.post('/user/login', { username, password });
  }

  register(username: string, password: string, email: string) {
    return this.http.post('/user/register', { username, password, email });
  }

  logout() {}

  getUserInfo() {}
}

export const userService = new UserService();
