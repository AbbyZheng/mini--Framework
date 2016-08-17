<style type="text/css">
	body{
		height:100%;
	}
	.userphoto{
		background: url(../images/1.png) no-repeat;
		background-size: 32px 32px;
		display: inline-block;
		position: relative;
		top:10px;
	}
	.chatbg{
		background: #f5f5f5;
	}
	.float_width{
		float: left;
		width: 60%;
	}
	.float_width_right{
		float: right;
		width: 35%;
	}
</style>
<template>
<div id="wrapper">
	<left-nav></left-nav>
    <div id="page-wrapper">
        <div class="graphs">
        	<div class="row">
                <div class="col-md-12">
                    <h2 class="page-header">
                        用户互动区 <small> Viewpoints</small>
                    </h2>
                </div>
            </div>
            <div class="row">
	        	<div class="col-md-8 col-md-12">   
	                <div class="panel panel-default">
	                    <div class="panel-body chatbg">
	                        <chat></chat>
	                	</div>
	                </div>
	                <div class="clearfix"> </div>
	            </div>
	        </div>
        </div>
    </div>
</div>
</template>
<script>
	import store from '../store/store.js'
	import leftNav from '../components/left-nav.vue'
	import chat from '../components/chat.vue'


	export default {
		components:{
			chat: chat,
			leftNav:leftNav
		},
		store: store

	}
</script>