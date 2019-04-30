/**
 * actions
 * @author guobin201314@gmail.com on 2019-04-28
 */

import { ActionTree } from 'vuex';
import { RootStateTypes } from './types';

const actions: ActionTree<RootStateTypes, any> = {
  SET_AUTHOR_ASYNC({commit, state}, data: string) {
    commit('SET_AUTHOR', data);
  },
};

export default actions;
