import VueClickOutsideComponent from './../dist/vue-click-outside-component.js'
import btn from './btn.vue'
import txt from './txt.vue'
import Vue from 'vue'

Vue.use(VueClickOutsideComponent)

new Vue({
    el: '#app',
    components: {
        btn,
        txt
    }
})