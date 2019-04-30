/**
 * mutations
 * @author guobin201314@gmail.com on 2019-04-28
 */

import { MutationTree } from 'vuex';
import { RootStateTypes } from './types';

const mutations: MutationTree<RootStateTypes> = {
  SET_AUTHOR(state: RootStateTypes, data: string) {
    state.author = data;
  },
  SET_TOKEN(state: RootStateTypes, data: string) {
    state.token = data;
  },
};

export default mutations;
