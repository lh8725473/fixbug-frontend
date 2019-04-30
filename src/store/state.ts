/**
 * state
 * @author guobin201314@gmail.com on 2019-04-28
 */
import { RootStateTypes } from './types';
import { userService } from '@/service/user-service';

const state: RootStateTypes = {
  author: 'admin',
  token: userService.token,
  login: userService.isLogin,
  user: userService.user
};

export default state;
