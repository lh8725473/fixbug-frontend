/**
 * getters
 * @author guobin201314@gmail.com on 2019-04-28
 */

import { GetterTree } from 'vuex';
import { RootStateTypes } from './types';

const getters: GetterTree<RootStateTypes, any> = {
  author: (state: RootStateTypes) => state.author,
  token: (state: RootStateTypes) => state.token,
};

export default getters;
