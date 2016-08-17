<style type="text/css">
	.containerHolder{
		padding:5px;
		overflow: hidden;
	}
	.container{
		width: 90%;
		min-height: 600px;
	}
	.topmsg{
		width: 100%;
	  	height: 100px;
	  	border: 1px solid #ddd;
	  	background: #ffffff;
	  }
	.msg{
		margin-top: 10px;
		width: 100%;
		min-height: 400px;
    background: #fff;
		border: 1px solid #e0e0e0;
		box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
	}
	.containerHolder ul li{
		list-style: none;
	}
	button:hover{
		background: red;
	}
  .pubfayanbox {
  padding: 7px 8px 0;
  /*background: url("../images/pubfayanbg.png") repeat 0 0;*/
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
.pubfayanbox .zhulibox {
  font-size: 12px;
  color: #fc0;
  height: 22px;
  margin-bottom: 6px;
}
.pubfayanbox .zhulibox a {
  margin-right: 3px;
}
.pubfayanbox .gongnengbtn {
  overflow: hidden;
  zoom: 1;
  margin-bottom: 6px;
}
.pubfayanbox .gongnengbtn a {
  float: left;
  margin-right: 8px;
  width: 62px;
  height: 26px;
  line-height: 26px;
  font-size: 12px;
  color: #cdcdce;
  text-align: center;
}
.pubfayanbox .gongnengbtn a:hover {
  color: #e8e7e9;
}
.pubfayanbox .gongnengbtn a.emoji {
  padding-left: 26px;
  /*width: 36px;*/
  background: url("../images/pubfayanpic01.png") no-repeat 0 0;
}
.pubfayanbox .gongnengbtn a.dingbtn {
  background: url("../images/pubfayanpic01.png") no-repeat 0 -52px;
}
.pubfayanbox .gongnengbtn a.clearbtn {
  padding-left: 24px;
  width: 38px;
  background: url("../images/pubfayanpic01.png") no-repeat 0 -78px;
}
.pubfayanbox .gongnengbtn a.clearbtn:hover {
  background: url("../images/pubfayanpic01.png") no-repeat 0 -104px;
}
.pubfayanbox .gongnengbtn a.baodianbtn {
  padding-left: 27px;
  width: 62px;
  background: url("../images/pubfayanpic01.png") no-repeat 0 -130px;
}
#sendImage {
  width: 52px;
  left: -70px;
  position: relative;
  opacity: 0;
  overflow: hidden;
}
</style>
<template>
<div class="containerHolder">
  <!-- <div class="container"> -->
    <!-- <div class="topmsg">
      <ul id="tops">
        <li>
          <span class="time"></span> <span class="user"></span><span class="topsdirlog"></span>
          <button class="btn btn-primary ban">取消置顶</button>              
        </li>
      </ul>
    </div> -->
    <div class="msg">
      <div class="noMore" v-show="noMore">没有更多了……</div>          
      <ul>
        <li>
          <span class="time"></span>  <span class="user"></span><br/><br/>
          <span class="dirlog"><em></em><span></span></span>
          <!-- <span class="huifu">回复</span>
          <button class="btn btn-primary ban" v-if="userType">禁言</button>
          <button class="btn btn-primary ban">置顶</button> 
          <button class="btn btn-primary ban">删除消息</button>     -->          
        </li>            
      </ul>
    </div>
    <div class="send">
      <div>
        <div class="pubfayanbox">                                               
          <div class="gongnengbtn">
            <a style="cursor:pointer" class="emoji">表情</a>
              <a style="cursor:pointer" class="dingbtn">顶一个</a>
              <a style="cursor:pointer" class="dingbtn">赞一个</a>
              <a style="cursor:pointer" class="dingbtn">送花</a>
              <label for="sendImage">
                <a style="cursor:pointer" class="dingbtn">image</a>
                <input id="sendImage" type="file" value="image">                    
              </label>      
          </div>              
        </div>
      </div>
      <textarea rows="6" class="form-control1 control2" id="textareaChat" placeholder="输入内容"></textarea>
      <button class="btn btn-primary submit">提交</button>
    </div>
  <!-- </div> -->
</div> 
</template>
<script>
	export default{

	}
</script>