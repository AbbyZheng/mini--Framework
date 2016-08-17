<template>
<div id="wrapper">
	<left-nav></left-nav>
    <div id="page-wrapper">
        <div class="graphs">
        	<div class="row">
                <div class="col-md-12">
                    <h2 class="page-header">
                        喊单管理 <small> My Strategy</small>
                    </h2>
                </div>
            </div>
            <!-- 喊单列表 -->
            <div class="row">
	        	<div class="col-md-8 col-md-12">   
	                <div class="panel panel-default">
				        <div class="panel-heading">
                            <table width="100%" height="100%">
                                <tbody>
                                    <tr>
										<td width="70" style="padding:5px">单号:</td>
										<td width="180"><input type="text" class="form-control" placeholder="单号" id="code"></td>
										<td width="70" style="padding:5px">方向:</td>
										<td width="180">
											<select class="form-control" id="direction">
												<option value="" selected="selected">请选择多/空</option>
												<option value="1">多</option>
												<option value="0">空</option>
											</select>
										</td>
										<td width="70" style="padding:5px">品种:</td>
										<td width="180">
											<select class="form-control" id="tradingVarieties">
												<option value="" selected="selected">请选择交易品种</option>
												
													<option value="PMEC.GDPD">PMEC.GDPD--粤贵钯</option>
												
													<option value="PMEC.GDPT">PMEC.GDPT--粤贵铂</option>
												
													<option value="PMEC.GDAG">PMEC.GDAG--粤贵银</option>
												
											</select>
										</td> 
										<td></td>
									</tr>
									<tr>
										<td colspan="7" style="padding:5px">
											<input type="button" class="btn bg-color-blueDark txt-color-white" value="&nbsp;&nbsp;查&nbsp;&nbsp;询&nbsp;&nbsp;" data-loading-text="查询中..." id="filterQuery">
											<input type="button" class="btn btn-default" value="&nbsp;&nbsp;重&nbsp;&nbsp;置&nbsp;&nbsp;" data-loading-text="查询中..." id="filterReset">	
											<input type="button" class="btn btn-primary" value="&nbsp;&nbsp;新&nbsp;&nbsp;建&nbsp;&nbsp;" target="dialog" @click="addTrade" title="喊单">
											
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
                                            <th class="sorting">喊单编号</th>
                                            <th class="sorting">方向</th>
                                            <th class="sorting">交易品种</th>
                                            <th class="sorting">建仓价格</th>
                                            <th class="sorting">平仓价格</th>
                                            <th class="sorting">平仓价格</th>
                                            <th class="sorting">仓位</th>
                                            <th class="sorting">止盈点</th>
                                            <th class="sorting">止损点</th>
                                            <th class="sorting">作者</th>
                                            <th class="sorting">喊单时间</th>
                                            <th>操作</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>11029</td>
                                            <td>多</td>
                                            <td>越贵银</td>
                                            <td>21320</td>
                                            <td>23156</td>
                                            <td>11029</td>
                                            <td>多</td>
                                            <td>越贵银</td>
                                            <td>21320</td>
                                            <td>23156</td>
                                            <td>2016-05-06</td>
                                            <td><a @click="updateTrade">修改</a></td>
                                        </tr>
                                         <tr>
                                            <td>11029</td>
                                            <td>多</td>
                                            <td>越贵银</td>
                                            <td>21320</td>
                                            <td>23156</td>
                                            <td>11029</td>
                                            <td>多</td>
                                            <td>越贵银</td>
                                            <td>21320</td>
                                            <td>23156</td>
                                            <td>2016-05-06</td>
                                            <td><a @click="updateTrade">修改</a></td>
                                        </tr>
                                        <!-- <tr v-for="item in searchData" v-if="isSearch">
                                            <td>{{item.eid}}</td>
                                            <td>{{item.ename}}</td>
                                            <td>{{item.year}}-{{item.month}}</td>
                                            <td>{{item.sum}}</td>
                                            <td><a v-on:click="openUsingScore(item.eid,item.sum)">更新积分</a> <a v-on:click="openDetailePage(item.eid)">明细</a></td>
                                        </tr> -->
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
          	<!-- 喊单弹窗 -->
          	<div class="overlay" v-show="isOverlay"></div>
          	<div class="modal-dialog" v-show="isTrade">
	          	<div class="modal-content">
	          		<div class="modal-header"><button @click="closeWin" type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button><h4 class="modal-title" id="myModalLabel">喊单</h4></div>
				    <div class="modal-body">
						<fieldset>
							<div class="form-group">
								<label class="col-md-3 control-label">方向:</label>
								<div class="col-md-7">
									<select class="form-control" id="direction1" name="direction">
										<option value="1">多</option>
										<option value="0">空</option>
									</select>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label">交易品种:</label>
								<div class="col-md-7">
									<select class="form-control validate[required]" id="pingzhong" name="tradingVarieties">
										<option value="" selected="selected">请选择交易品种</option>
										
											<option value="PMEC.GDPD">PMEC.GDPD--粤贵钯</option>
										
											<option value="PMEC.GDPT">PMEC.GDPT--粤贵铂</option>
										
											<option value="PMEC.GDAG">PMEC.GDAG--粤贵银</option>
										
									</select>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label">建仓价格:</label>
								<div class="col-md-7">
									<input type="text" id="createTradingPrice" name="createTradingPrice" class="form-control validate[required,custom[number]]" value="">
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label">仓位:</label>
								<div class="col-md-7">
									<input type="text" id="position" name="position" class="form-control validate[required,min[1],max[100],custom[integer]]" value="">
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label">止盈点:</label>
								<div class="col-md-7">
									<input type="text" id="targetProfitPoint" name="targetProfitPoint" class="form-control validate[required,custom[number]]" value="">
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label">止损点:</label>
								<div class="col-md-7">
									<input type="text" id="targetLosePoint" name="targetLosePoint" class="form-control validate[required,custom[number]]" value="">
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label">备注:</label>
								<div class="col-md-4">
									<textarea name="remark" rows="2" cols="40" class="form-control validate[maxSize[200]]" style="width: 320px;"></textarea>
								</div>
							</div>
						</fieldset>
					</div>
					<div class="modal-footer">
						<button type="submit" class="btn btn-primary" data-loading-text="执行中...">确定</button>
						<button type="button" class="btn btn-default" @click="closeWin">取消</button>
					</div>
				</div>
			</div>
			<!-- 修改弹窗 -->
			<div class="modal-dialog" v-show="isUpdateTrade">
	          	<div class="modal-content">
	          		<div class="modal-header"><button @click="closeWin" type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button><h4 class="modal-title" id="myModalLabel">修改喊单</h4></div>
				    <div class="modal-body">
						<fieldset>
							<div class="form-group">
								<label class="col-md-3 control-label">方向:</label>
								<div class="col-md-7">
									<select class="form-control" id="direction1" name="direction">
										<option value="1">多</option>
										<option value="0">空</option>
									</select>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label">交易品种:</label>
								<div class="col-md-7">
									<select class="form-control validate[required]" id="pingzhong" name="tradingVarieties">
										<option value="" selected="selected">请选择交易品种</option>
										
											<option value="PMEC.GDPD">PMEC.GDPD--粤贵钯</option>
										
											<option value="PMEC.GDPT">PMEC.GDPT--粤贵铂</option>
										
											<option value="PMEC.GDAG">PMEC.GDAG--粤贵银</option>
										
									</select>
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label">建仓价格:</label>
								<div class="col-md-7">
									<input type="text" id="createTradingPrice" name="createTradingPrice" class="form-control validate[required,custom[number]]" value="">
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label">仓位:</label>
								<div class="col-md-7">
									<input type="text" id="position" name="position" class="form-control validate[required,min[1],max[100],custom[integer]]" value="">
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label">止盈点:</label>
								<div class="col-md-7">
									<input type="text" id="targetProfitPoint" name="targetProfitPoint" class="form-control validate[required,custom[number]]" value="">
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label">止损点:</label>
								<div class="col-md-7">
									<input type="text" id="targetLosePoint" name="targetLosePoint" class="form-control validate[required,custom[number]]" value="">
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-3 control-label">备注:</label>
								<div class="col-md-4">
									<textarea name="remark" rows="2" cols="40" class="form-control validate[maxSize[200]]" style="width: 320px;"></textarea>
								</div>
							</div>
						</fieldset>
					</div>
					<div class="modal-footer">
						<button type="submit" class="btn btn-primary" data-loading-text="执行中...">确定</button>
						<button type="button" class="btn btn-default" @click="closeWin">取消</button>
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
			isOverlay:false,
			isTrade:false,
			isUpdateTrade:false
		}),
		components:{
			leftNav:leftNav
		},
		store,
		methods:{
			addTrade(){
				this.isOverlay = true;
				this.isTrade = true;
			},
			closeWin(){
				this.isOverlay = false;
				this.isTrade = false;
				this.isUpdateTrade = false;
			},
			updateTrade(){
				this.isOverlay = true;
				this.isUpdateTrade = true;
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