/**
 * mutations
 * @author guobin201314@gmail.com on 2019-04-28
 */

import { MutationTree } from 'vuex';
import { RootStateTypes } from './types';
import { User } from '@/types';

const mutations: MutationTree<RootStateTypes> = {
  SET_AUTHOR(state: RootStateTypes, data: string) {
    state.author = data;
  },
  SET_TOKEN(state: RootStateTypes, data: string) {
    state.token = data;
  },
  SET_LOGIN(state: RootStateTypes, data: boolean) {
    state.login = data;
  },
  SET_USER(state: RootStateTypes, data: User) {
    state.user = data;
  }
};

export default mutations;
