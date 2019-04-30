/**
 * state
 * @author guobin201314@gmail.com on 2019-04-28
 */
import { RootStateTypes } from './types';
import { userService } from '@/service/user-service';
import { Project } from '@/types/Project';

const state: RootStateTypes = {
  author: 'admin',
  token: userService.token,
  login: userService.isLogin,
  user: userService.user,
  project: Project.getProject()
};

export default state;
