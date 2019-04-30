import { AxiosInstance } from 'axios';
import { httpService } from './http-service';

/**
 * auth-service
 * @author guobin201314@gmail.com on 2019-04-20
 */

export class UserService {
  private http: AxiosInstance;

  constructor() {
    this.http = httpService;
  }

  public login(username: string, password: string) {
    return this.http.post('/user/login', { username, password });
  }

  public register(username: string, password: string, email: string) {
    return this.http.post('/user/register', { username, password, email });
  }

  public logout() {}

  public getUserInfo() {}
}

export const userService = new UserService();
