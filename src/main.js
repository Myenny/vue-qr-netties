import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import Bulma from 'bulma/css/bulma.css'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.scss'

import {
    library,
    dom
} from '@fortawesome/fontawesome-svg-core'
// add fas, fab, far packs to library
import {
    fas
} from '@fortawesome/free-solid-svg-icons'
import {
    fab
} from '@fortawesome/free-brands-svg-icons'
import {
    far
} from '@fortawesome/free-regular-svg-icons'

library.add(fab, fas, far)

dom.watch()

Vue.use(Bulma)
Vue.use(Buefy)
Vue.use(Vuesax)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')