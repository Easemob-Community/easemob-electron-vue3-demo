import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import './styles/element/index.scss' // 先导入自定义SCSS
import store from './store'
import router from './router'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
createApp(App).use(store).use(router).use(ElementPlus, { locale: zhCn }).mount('#app')
