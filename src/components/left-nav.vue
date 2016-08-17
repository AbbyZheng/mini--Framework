<template>
	<!-- Navigation -->
    <nav class="top1 navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
        <div class="navbar-header">
            <a class="navbar-brand">直播室播主后台</a>
        </div>
        <!-- /.navbar-header -->
        <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-comments-o"></i><span class="badge">4</span></a>
            </li>
            <li class="dropdown">
                <a @click="showSetList" class="dropdown-toggle avatar" data-toggle="dropdown"><i class="userphoto"></i><span class="badge">9</span></a>
                <ul class="dropdown-menu" v-show="isSetList">
                    <li class="dropdown-menu-header text-center">
                        <strong>{{teacherName}}</strong>
                    </li>
                    <li class="m_2"><a href="#"><i class="fa fa-bell-o"></i> Updates <span class="label label-info">42</span></a></li>
                    <li class="m_2"><a href="#"><i class="fa fa-envelope-o"></i> Messages <span class="label label-success">42</span></a></li>
                    <li class="m_2"><a href="#"><i class="fa fa-tasks"></i> Tasks <span class="label label-danger">42</span></a></li>
                    <li><a href="#"><i class="fa fa-comments"></i> Comments <span class="label label-warning">42</span></a></li>
                    <li class="dropdown-menu-header text-center">
                        <strong>Settings</strong>
                    </li>
                    <li class="m_2"><a href="#"><i class="fa fa-user"></i> Profile</a></li>
                    <li class="m_2"><a href="#"><i class="fa fa-wrench"></i> Settings</a></li>
                    <li class="m_2"><a href="#"><i class="fa fa-usd"></i> Payments <span class="label label-default">42</span></a></li>
                    <li class="m_2"><a href="#"><i class="fa fa-file"></i> Projects <span class="label label-primary">42</span></a></li>
                    <li class="divider"></li>
                    <li class="m_2"><a href="#"><i class="fa fa-shield"></i> Lock Profile</a></li>
                    <li class="m_2"><a href="#"><i class="fa fa-lock"></i> Logout</a></li>
                </ul>
            </li>
        </ul>
    </nav>
    <nav class="navbar-default sidebar" role="navigation">
        <div class="sidebar-nav navbar-collapse">
            <ul class="nav" id="side-menu">
                <li>
                    <a @click = 'gotoPage("main",0)' class="active-menu"><i class="fa fa-home fa-fw nav_icon"></i>互动区</a>
                </li>
                <li>
                    <a @click = 'gotoPage("topPoints",1)'><i class="fa fa-star nav_icon"></i>置顶消息列表</a>
                </li>
                <li>
                    <a @click = 'gotoPage("banned",2)'><i class="fa fa-warning nav_icon"></i>禁言用户管理</a>
                </li>
                <li>
                    <a @click = 'gotoPage("approvePoints",3)'><i class="fa fa-table nav_icon"></i>待审核消息列表</a>
                </li>
                <li>
                    <a @click = 'showChildList(4)'><i class="fa fa-comment nav_icon"></i>纸条消息<span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level" v-show="isChildList">
                        <li>
                            <a @click = 'gotoPage("noteMessages",5)'>待回复纸条列表</a>
                        </li>
                        <li>
                            <a @click = 'gotoPage("reviewPoints",6)'>已回复纸条列表</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a @click = 'gotoPage("strategy",7)'><i class="fa fa-bullhorn nav_icon"></i>喊单(策略)管理</a>
                </li>
                <li>
                    <a @click = 'gotoPage("viewpoints",8)'><i class="fa fa-coffee nav_icon"></i>观点管理</a>
                </li>
                <li>
                    <a @click = 'showChildList(9)'><i class="fa fa-video-camera nav_icon"></i>视频管理<span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level" v-show="isVideoList">
                        <li>
                            <a @click = 'gotoPage("reviewPoints",5)'>节目名称</a>
                        </li>
                        <li>
                            <a @click = 'gotoPage("reviewPoints",6)'>节目单</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
    import {store} from '../store/store.js'
    import {gotoPage,navStyle} from '../store/action.js'
	export default {
        data:()=>({
            isSetList:false,
            isChildList:false,
            isVideoList:false
        }),
        store,
        vuex:{
            getters:{
                teacherName:(state)=>{
                    return state.teacherName
                }
            },
            actions:{
                gotoPage:gotoPage,
                navStyle:navStyle
            }
        },
        ready:()=>{
            store.dispatch('navStyle');
        },
        methods:{
            showSetList(){
                this.isSetList = !this.isSetList;
            },
            showChildList(page){
                if(page==4){
                    store.isChildList = !store.isChildList;
                    this.isChildList = store.isChildList
                    this.isVideoList = false
                }
                else if(page==9){
                    store.isVideoList = !store.isVideoList;
                    this.isVideoList = store.isVideoList;
                    this.isChildList = false;
                }
                document.querySelectorAll('#side-menu li a').forEach((item,i)=>{
                    item.classList.remove('active-menu')
                    if(i==page && (this.isChildList || this.isVideoList)){
                        item.classList.add('active-menu')
                    }
                })
            }
        }
	}
</script>