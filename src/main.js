import Vue from 'vue'
import Vant from 'vant'
import App from './App.vue'
import 'vant/lib/index.css'
import 'vant/lib/icon/local.css';
import './assets/css/common.scss';
import router from './router/index'
import store from './store/index'
import { apiHost, fileUrl, request } from './request'
import {
    Lazyload,
    Toast
} from 'vant';

// 事件传播
Vue.prototype.$eventHub = Vue.prototype.$eventHub || new Vue()
    // 域名
Vue.prototype.$host = apiHost;
// 文件地址
Vue.prototype.$fileUrl = fileUrl;
// 请求
Vue.prototype.$request = request;
// 音频播放
Vue.prototype.playAudio = (audio) => {
    let playAudio = document.getElementById('setAudioPlay');
    playAudio.setAttribute('src', audio);
    playAudio.play();
}
Vue.config.productionTip = false

Vue.use(Vant);
Vue.use(Lazyload, {
    lazyComponent: true,
    //   loading: require('./assets/img/loading.jpg'),
    try: 1
});
Vue.use(Toast);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
})