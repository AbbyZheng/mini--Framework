import './styles/bootstrap.min.css'
import './styles/style.css'
import './styles/custom.css'
import './styles/font-awesome.css'
import Vue from 'vue'
import Vuex from 'vuex'
import {store} from './store/store.js'
import * as views from './views'

new Vue({
  el: 'body',
  store,
  components: {...views},
  vuex: {
    getters: {
      currentView: state => state.currentView
    }
  },
  created: () => store.dispatch('ENTRY')
})