import Vue from 'vue'
import Vuex from 'vuex'

import {mutations} from './mutations.js'

Vue.use(Vuex)

const state = {
	count: 0,
	currentView : null,
	num:0,
	miniPort:'',//socket 请求的port
	miniIp:'',//socket请求的ip
	sessionId:'',//老师登录后的sessionid
	teacherName:'',//老师名字
	teacherNo:'',//老师编号
	expireData:'',//session过期时间
	isChildList:false,
    isVideoList:false,
    miniSocket:'',
    topMsgList:[],//置顶消息列表
    banList:[],//禁言用户列表
    approveList:[],//待审核信息列表	
}

export const store = new Vuex.Store({
	state,
	mutations
})
export const dispatch = store.dispatch