export const BASECONFIG = {
	CHANNEL:'web',
  	ROOMNO:'R10000315'
}
export const URL = {
	DOMAIN:{
	    development:'http://test.minilive.baidao.com',
	    test:'http://test.minilive.baidao.com',
	    production:'http://api.baidao.com'
	},
	BOZHU:{
	    LOGIN:'/api/v1/admin/account/'+BASECONFIG.CHANNEL+'/login.json',
	    LOGOUT:'/api/v1/admin/account/'+BASECONFIG.CHANNEL+'/logout.json',
	    MESSAGES:'/api/v1/admin/message/list/'+BASECONFIG.CHANNEL+'/'+BASECONFIG.ROOMNO+'/{sessionId}/{direction}.json',
	    USERSEND:'v1/message/{channel}/{roomNo}/{token}/send.json',
	    SEND:'/api/v1/admin/message/'+BASECONFIG.CHANNEL+'/'+BASECONFIG.ROOMNO+'/{sessionId}/send.json',
	    DELETE:'/api/v1/admin/message/'+BASECONFIG.CHANNEL+'/'+BASECONFIG.ROOMNO+'/{sessionId}/{sequenceNo}/deleteMessage.json',
	    BAN:'/api/v1/admin/customer/'+BASECONFIG.CHANNEL+'/'+BASECONFIG.ROOMNO+'/{token}/ban.json',
	    UNBAN:'/api/v1/admin/customer/'+BASECONFIG.CHANNEL+'/'+BASECONFIG.ROOMNO+'/{token}  /unban.json',
	    BANLIST:'/api/v1/admin/customer/ban/'+BASECONFIG.CHANNEL+'/'+BASECONFIG.ROOMNO+'/list.json',
	    SETTOP:'/api/v1/admin/message/'+BASECONFIG.CHANNEL+'/'+BASECONFIG.ROOMNO+'/{messageId}/settop.json',
	    DELETETOP:'/api/v1/admin/message/'+BASECONFIG.CHANNEL+'/'+BASECONFIG.ROOMNO+'/{messageId}/deleteTop.json',
	    TOPLIST:'/api/v1/admin/message/top/'+BASECONFIG.CHANNEL+'/'+BASECONFIG.ROOMNO+'/{sessionId}/list.json',
	    GETADDR:'/api/v1/server/'+BASECONFIG.CHANNEL+'/getaddr.json',
	    SHENHE:'/api/v1/admin/message/'+BASECONFIG.CHANNEL+'/'+BASECONFIG.ROOMNO+'/{sessionId}/approve.json'
	}
};
export const SOCKETURL = {
   MESSAGES:'v1/admin/message/list/{channel}/{roomNo}/{sessionId}/{direction}.json',
   USERSEND:'v1/message/{channel}/{roomNo}/{token}/send.json',
   SEND:'v1/admin/message/{channel}/{roomNo}/{sessionId}/send.json',
   DELETE:'v1/admin/message/{channel}/{roomNo}/{sessionId}/{sequenceNo}/deleteMessage.json',
   BAN:'v1/admin/customer/{channel}/{roomNo}/{token}/ban.json',
   UNBAN:'v1/admin/customer/{channel}/{roomNo}/{token}  /unban.json',
   BANLIST:'v1/admin/customer/ban/{channel}/{roomNo}/list.json',
   SETTOP:'v1/admin/message/{channel}/{roomNo}/{messageId}/settop.json',
   DELETETOP:'v1/admin/message/{channel}/{roomNo}/{sequenceNo}/deleteTop.json',
   TOPLIST:'v1/admin/message/top/{channel}/{roomNo}/{sessionId}/list.json',
   APPROVE:'v1/admin/message/list/{channel}/{roomNo}/{sessionId}/approve.json'
}
export const getUrl = (name,param)=>{
	let urlStr = URL.BOZHU[name];
	if(!urlStr){
		return ''
	}
	let env = process.env.NODE_ENV || 'development'
    urlStr = URL.DOMAIN[env] + urlStr
    let key
    for(key in param){
    	let val = param[key];
    	urlStr = urlStr.replace('{'+key+'}',val)
    }
    return urlStr
}