<template>
<div id="wrapper">
	<left-nav></left-nav>
    <div id="page-wrapper">
        <div class="graphs">
        	<div class="row">
                <div class="col-md-12">
                    <h2 class="page-header">
                        待审核消息列表 <small>The List of messages to be audited</small>
                    </h2>
                </div>
            </div>
            <div class="row">                    
                <div class="col-md-8 col-sm-12 col-xs-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <table width="100%" height="100%">
                                <tbody>
                                    <tr>
                                        <td width="80">用户ID:</td>
                                        <td width="20%"><input type="text" class="form-control" placeholder="请填写用户ID" id="usernameBox"></td>
                                        <td>
                                            &nbsp;&nbsp;<input type="button" class="btn btn-default btn-width" value="&nbsp;&nbsp;查&nbsp;&nbsp;找&nbsp;&nbsp;" id="filterQuery">
                                            &nbsp;&nbsp;<input type="button" class="btn btn-default btn-width" value="&nbsp;&nbsp;重&nbsp;&nbsp;置&nbsp;&nbsp;" id="filterReset">
                                            &nbsp;&nbsp;<input type="button" class="btn btn-primary btn-width" target="dialog" title="全部通过" value="&nbsp;&nbsp;全部通过&nbsp;&nbsp;">
                                            &nbsp;&nbsp;<input type="button" class="btn-inverse btn btn-width" target="dialog" title="全部不通过" value="&nbsp;&nbsp;全部不通过&nbsp;&nbsp;">
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
                                            <th>用户ID</th>
                                            <th>用户昵称</th>
                                            <th>用户级别</th>
                                            <th>消息编号</th>
                                            <th>消息类型</th>
                                            <th>内容</th>
                                            <th>创建时间</th>
                                            <th>操作</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in approveList" v-if="!isSearch">
                                            <td><input type="checkbox"></td>
                                            <td>{{item.createUser}}</td>
                                            <td>{{item.nickName}}</td>
                                            <td>{{item.userType}}</td>
                                            <td>{{item.messageNo}}</td>
                                            <td>{{item.messageType}}</td>
                                            <th>{{item.message}}</th>
                                            <td>{{item.createDate}}</td>
                                            <td><a>通过</a> &nbsp&nbsp<a>不通过</a></td>
                                        </tr>
                                        <tr v-if="isSearch">
                                            <td>22</td>
                                            <td>EE</td>
                                            <th>时间</th>
                                            <td>WW</td>
                                            <td><a>审核通过</a> &nbsp&nbsp<a>不通过</a></td>
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
		components:{
			leftNav:leftNav
		},
		store,
        vuex:{
            getters:{
                approveList:(state)=>{
                    return state.approveList
                }
            }
        },
        ready:()=>{
            let opt = {
                className:'contain-page',
                maxNum:100,
                fn:function(){}
            }
            store.dispatch('pagination',opt)
        }
	}
</script>
</template>