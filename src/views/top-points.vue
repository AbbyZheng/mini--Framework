<template>
<div id="wrapper">
	<left-nav></left-nav>
    <div id="page-wrapper">
        <div class="graphs">
        	<div class="row">
                <div class="col-md-12">
                    <h2 class="page-header">
                        置顶消息 <small> Top Points</small>
                    </h2>
                </div>
            </div>
            <!-- <div class="row">
	        	<div class="col-md-8 col-md-12">       
	                <div class="panel panel-default">
	                	<div class="panel-heading">
	                		当前置顶消息：
	                	</div>
	                    <div class="panel-body">
					        <div class="alert alert-info">
					            {{topMsgList[0].message}}
					        </div>
						</div>
	              </div>
	            </div>
	        </div> -->
	        <div class="row">                    
                <div class="col-md-8 col-sm-12 col-xs-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <table width="100%" height="100%">
                                <tbody>
                                    <tr>
                                        <td width="80">创建人昵称:</td>
                                        <td width="20%"><input type="text" class="form-control" placeholder="创建人昵称" id="usernameBox"></td>
                                        <td>
                                            &nbsp;&nbsp;<input type="button" class="btn btn-default btn-width" value="&nbsp;&nbsp;查&nbsp;&nbsp;找&nbsp;&nbsp;" id="filterQuery">
                                            &nbsp;&nbsp;<input type="button" class="btn btn-default btn-width" value="&nbsp;&nbsp;重&nbsp;&nbsp;置&nbsp;&nbsp;" id="filterReset">
                                            &nbsp;&nbsp;<input type="button" class="btn btn-primary btn-width" target="dialog" title="全部取消" value="&nbsp;&nbsp;全部取消&nbsp;&nbsp;">
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> 
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover" id="study-credits">
                                    <thead>
                                        <tr>
                                            <td>选择</td>
                                            <th class="sorting">创建人ID</th>
                                            <th>创建人昵称</th>
                                            <th class="sorting">消息ID</th>
                                            <th>消息内容</th>
                                            <th>消息类型</th>
                                            <th class="sorting">创建时间</th>
                                            <th>操作</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in topMsgList" v-if="!isSearch">
                                            <td><input type="checkbox"></td>
                                            <td>{{item.createUser}}</td>
                                            <td>{{item.nickName}}</td>
                                            <td>{{item.messageNo}}</td>
                                            <th>{{item.message}}</th>
                                            <td>{{item.messageType}}</td>
                                            <td>{{item.createDate}}</td>
                                            <td><a @click="deleteTopMsg(item.sequenceNo,$index)">取消置顶</a></td>
                                        </tr>
                                        <tr v-if="isSearch">
                                            <td>22</td>
                                            <td>EE</td>
                                            <td>22</td>
                                            <th>时间</th>
                                            <td>WW</td>
                                            <td>33</td>
                                            <td><a>取消置顶</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div> 
                            <!-- 分页 -->
                            <div class="col-md-12">
                                <div class="contain-page fr"></div>
                            </div>                   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
	import {store} from '../store/store.js'
	import leftNav from '../components/left-nav.vue'

	export default {
		data:()=>({
			
		}),
		components:{
			leftNav:leftNav
		},
		store,
		vuex:{
			getters:{
				topMsgList:(state)=>{
                    return state.topMsgList
                }
			},
			actions:{
				deleteTopMsg(state,sequenceNo,index){
					let opt = {
						sequenceNo:sequenceNo,
						reqNo:'delTop'
					}
					state.dispatch('deleteTopMsg',opt)
				}
			}
		},
		ready:()=>{
            let opt = {
                className:'contain-page',
                maxNum:1,
                fn:function(){}
            }
            store.dispatch('pagination',opt)
        },
        methods:{

        }
	}
</script>
</template>