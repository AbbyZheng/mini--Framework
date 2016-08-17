<template>
<div id="login_main">
    <div class="login">
        <h1>登录</h1>
        <input type="text" name="username" placeholder="用户名" required="required" class="login_input" v-model="account"/>
        <input type="password" name="password" placeholder="密码" required="required" class="login_input" v-model="password"/>
        <input type="button" class="btn btn-primary btn-block btn-large" v-on:click="login" value="登录"/>
        <main></main>
    </div>
</div>
</template>
<script>
	import {store} from '../store/store.js';
	import {COOKIE} from "../scripts/cookie.js";

	export default{
		data:()=>({
			account:'test',
			password:'111111'
		}),
		store,
		vuex:{
			actions:{
				login(store){
					if(!this.account){
						alert('请输入用户名')
					}
					if(!this.password){
						alert('请输入密码！')
					}
					store.dispatch('LOGIN',this.account,this.password)
				}
			}
		},
		ready:()=>{
			// let isSession = COOKIE.getCookie('sessionId');
			// if(isSession){
			// 	store.dispatch('NAVIGATE_VIEW','main');
			// 	store.dispatch('connectSocket')
			// }
			store.dispatch("GETIP")
		}
	}
</script>