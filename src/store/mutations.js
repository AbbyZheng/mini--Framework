import {getUrl,BASECONFIG,SOCKETURL} from '../services/fecthConfig.js';
import pagination from "../scripts/pagination.js"
import {COOKIE} from "../scripts/cookie.js";
import $ from "jquery";
import io from "socket.io-client";
import 'whatwg-fetch';

export const mutations = {
	ENTRY (state){
		state.currentView = 'login'
	},
	NAVIGATE_VIEW (state, view){
	  if(['login', 'main'].indexOf(view) !== -1) return state.currentView = view
	  if(!state.account.uname) return state.currentView = 'login'
	  state.currentView = view
	},
	async GETIP(state){
		let url = getUrl("GETADDR");
		try {
		  let data = await (await fetch(url)).json();
		  state.miniPort = data.port;
		  state.miniIp = data.ip;
		} catch(err) {
		  console.log("GETIP error:" + err);
		}
	},
	async LOGIN (state,account,password){
		let url = getUrl("LOGIN");
		let param = 'account='+account+'&password='+password;
		let headers = {
			"Content-Type": "application/x-www-form-urlencoded"
		};
		try {
		  let data = await (await fetch(url,{method:'POST',headers:headers,body:param})).json();
		  state.sessionId = data.sessionId;
		  state.teacherName = data.teacherName;
		  state.teacherNo = data.teacherNo;
		  state.expireData = data.expireData;
		  COOKIE.setCookie('teacherName',data.teacherName);
		  COOKIE.setCookie('sessionId',data.sessionId);		  
		  // console.log(state.sessionId)
		  mutations.NAVIGATE_VIEW(state,'main')
		  mutations.connectSocket(state)//登录成功自动链接socket
		} catch(err) {
			alert('登录失败！')
		  console.log("GETIP error:" + err);
		}
	},
	gotoPage(state,view,num){
		state.currentView = view
		state.num = num
	},
	navStyle(state){
		state.isChildList = true
		state.isVideoList = true
		document.querySelectorAll('#side-menu li a').forEach((item,i)=>{
            if(state.num==i){
                item.classList.add('active-menu')
            }else{
                item.classList.remove('active-menu')
            }
        })
	},
	pagination(state,opt){
		let param = {
            items_per_page:10,//每页显示数据条数
            num_display_entries:3,//页面显示页码数
            num_edge_entries:1,
            num_valibale_page: 2,
            prev_text:"上一页",
            next_text:"下一页",
            callback: opt.fn  //回调函数
        }
        $('.'+opt.className).pagination(opt.maxNum,param)
	},
	// socket开始
	connectSocket(state){
		let href = 'http://' + state.miniIp + ':'+ state.miniPort + '/admin?roomNo='+BASECONFIG.ROOMNO
		state.miniSocket = io(href);
		state.miniSocket.on('connect', () => {
			console.log(href)
	  		console.log('socket is connected')
	  		mutations.getTopMessageList(state,'gettop');
	  		mutations.banList(state,'ban');
	  		mutations.getApproveList(state,'approvemsg');
		});
		state.miniSocket.on('message',(data)=>{
			let newdata = JSON.parse(data);
			console.log(newdata)
			if(newdata && newdata.code == 1 && newdata.list && newdata.list.length>=0){
				if(newdata.reqNo && newdata.reqNo == 'gettop'){
					state.topMsgList = newdata.list;
				}
				if(newdata.reqNo == 'ban'){
					state.banList = newdata.list;
				}
				if(newdata.reqNo == 'approvemsg'){
					state.approveList = newdata.list;
				}
			}
		});
		state.miniSocket.on('broadcast',(data)=>{
			let newdata = JSON.parse(data);
			console.log(newdata)
			if(newdata.cmd && newdata.cmd=='deletetop'){
				state.topMsgList.forEach((item,i)=>{
					if(item.sequenceNo == newdata.data){
						state.topMsgList.splice(i,1)
					}
				})
			}
			if(newdata.cmd == 'settop'){
				state.topMsgList = state.topMsgList.concat([newdata.data])
			}
		})
		state.miniSocket.on('disconnect',()=>{
			cosnole.log('未连接')
		})
	},
	getTopMessageList(state,reqNo){
		let param = {
			reqNo:reqNo,
			path:SOCKETURL.TOPLIST,
			channel:BASECONFIG.CHANNEL,
			sessionId:state.sessionId,
			roomNo:BASECONFIG.ROOMNO,
			sequenceNo:''
		}
		state.miniSocket.emit('request' , param)
	},
	deleteTopMsg(state,opt){
		let params = {
			reqNo:opt.reqNo,
			path:SOCKETURL.DELETETOP,
			channel:BASECONFIG.CHANNEL,
			sessionId:state.sessionId,
			roomNo:BASECONFIG.ROOMNO,
			sequenceNo:opt.sequenceNo
		}
		state.miniSocket.emit('request' , params)
	},
	banList(state,reqNo){
		let params = {
			reqNo:reqNo,
			path:SOCKETURL.BANLIST,
			channel:BASECONFIG.CHANNEL,
			sessionId:state.sessionId,
			roomNo:BASECONFIG.ROOMNO,
			sequenceNo:'',
			token: ''
		}
		state.miniSocket.emit('request' , params)
	},
	getApproveList(state,reqNo){
		let params = {
			reqNo:reqNo,
			path:SOCKETURL.APPROVE,
			channel:BASECONFIG.CHANNEL,
			sessionId:state.sessionId,
			roomNo:BASECONFIG.ROOMNO,
			sequenceNo:'',
			token: ''
		}
		state.miniSocket.emit('request' , params)
	}
}