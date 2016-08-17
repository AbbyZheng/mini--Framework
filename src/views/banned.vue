<template>
<div id="wrapper">
	<left-nav></left-nav>
    <div id="page-wrapper">
        <div class="graphs">
        	<div class="row">
                <div class="col-md-12">
                    <h2 class="page-header">
                        禁言用户列表 <small> Someone Has Been Banned</small>
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
                                            <th>用户ID</th>
                                            <th>用户昵称</th>
                                            <th>禁言日期</th>
                                            <th>操作</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in banList" v-if="!isSearch">
                                            <td><input type="checkbox"></td>
                                            <td>{{item.token}}</td>
                                            <td>{{item.nickName}}</td>
                                            <td>2016/08/16</td>
                                            <td><a>取消禁言</a></td>
                                        </tr>
                                        <tr v-if="isSearch">
                                            <td><input type="checkbox"></td>
                                            <td>{{item.token}}</td>
                                            <td>{{item.nickName}}</td>
                                            <td>2016/08/16</td>
                                            <td><a>取消禁言</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>  
                            <!-- 分页 -->
                            <div class="col-md-12" v-show="showPagenation">
                                <div class="contain-page fr" id="pagination"></div>
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
            showPagenation:true
        }),
		components:{
			leftNav:leftNav
		},
		store,
        vuex:{
            getters:{
                banList:(state)=>{
                    return state.banList
                }
            }
        },
        ready:()=>{
            let opt = {
                className:'contain-page',
                maxNum:10,
                fn:function(){}
            }
            store.dispatch('pagination',opt)
        }
	}
</script>
</template>