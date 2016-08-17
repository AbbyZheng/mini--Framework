export const gotoPage = function({dispatch,state},view,num){
	dispatch('gotoPage',view,num)
	dispatch('navStyle')
}
export const navStyle = function({dispatch,state}){
	dispatch('navStyle')
}
