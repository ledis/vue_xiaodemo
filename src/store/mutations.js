const state={
	headShow:true,
	footerShow:true
	/*loading:false*/
}

const mutations={
	showHeader(state){
		state.headShow=true
	},
	hideHeader(state){
		state.headShow=false
	},
	showFooter(state){
		state.footerShow=true
	},
	hideFooter(state){
		state.footerShow=false
	},
/*	showLoading(state){
		state.loading=true
	},
	hideLoading(state){
		state.loading=false
	}*/
}
const getters={
	headShow(state){
		return state.headShow;
	},
	footerShow(state){
		return state.footerShow;
	}
	// ,
	// loading(state){
	// 	return state.loading
	// }
}



export default{
	state,
	mutations,
	getters
}