import App from './App.vue';
import Vue from './el-ui';
import './registerServiceWorker';
import store from './store/index';
import router from './views/router';
// element 组件
import { Loading, Message, MessageBox, Notification } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/common.scss';

Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
Vue.prototype.$msgbox = MessageBox;

Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;

Vue.config.productionTip = false;
router.beforeEach((to: any, from: any, next: () => void) => {
  if (to.meta.auth) {
    if (store.state.login) {
      next();
    } else {
      router.push({
        path: '/login'
      });
    }
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
