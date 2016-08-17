export const COOKIE = {
	delCookie(name){
		let exp = new Date();
	    exp.setTime(exp.getTime() - 1);
	    let cval = this.getCookie(name);
	    if (cval != null){
	    	document.cookie = name + "=" + cval + ";expires="+ exp.toGMTString();
	    }
	},
	getCookie(c_name){
		if (document.cookie.length > 0){
			let c_start = document.cookie.indexOf(c_name + "=");
		    if(c_start != -1){
		    	c_start = c_start + c_name.length + 1;
		    	let c_end = document.cookie.indexOf(";", c_start);
		    	if(c_end == -1){
		    		c_end = document.cookie.length
		    	}
		    	return unescape(document.cookie.substring(c_start, c_end))
		    }
		}
	    return ""
	},
	setCookie(c_name, value, hours){
		let expires = "";
		if (hours){
			let exdate = new Date();
			exdate.setHours(exdate.getHours() + hours)
			expires = exdate.toGMTString()
		}
		document.cookie = c_name+ "="+ escape(value)+ ";expires="+expires
	}
}

