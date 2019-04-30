import { AxiosInstance } from 'axios';
import { httpService } from './http-service';
import store from '@/store';
import { UserData } from '@/types';

/**
 * auth-service
 * @author guobin201314@gmail.com on 2019-04-20
 */

export class UserService {
  private http: AxiosInstance;

  public isLogin: boolean;
  public token: string | null;
  public user: any;

  constructor() {
    this.http = httpService;
    this.initState();
  }

  public login(username: string, password: string): Promise<boolean> {
    return this.http.post('/user/login', {username, password}).then((res: any) => {
      this.setUserData(res);
      return true;
    });
  }

  public register(username: string, password: string, email: string) {
    return this.http.post('/user/register', {username, password, email});
  }

  public logout() {
    localStorage.clear();
    this.initState();
    this.setUserData({
      user: null,
      token: ''
    });
  }

  private setUserData(user: UserData) {
    if (user.token) {
      store.commit('SET_LOGIN', true);
    } else {
      store.commit('SET_LOGIN', false);
    }
    localStorage.setItem('token', user.token);
    store.commit('SET_TOKEN', user.token);
    localStorage.setItem('user', JSON.stringify(user.user));
    store.commit('SET_USER', user.user);
  }

  private initState() {
    if (localStorage.getItem('user')) {
      this.isLogin = !!localStorage.getItem('token');
      this.token = localStorage.getItem('token');
      this.user = localStorage.getItem('user');
    } else {
      this.isLogin = false;
      this.token = '';
      this.user = null;
    }
  }

}

export const userService = new UserService();
