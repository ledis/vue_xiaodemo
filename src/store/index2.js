import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state={
	count:10
}
const mutations={
	increment(state){ //处理数据的变化
		state.count++;
	},
	decrement(state){
		state.count--;
	}
}

const actions={
	increment({commit}){ //处理你要干什么，异步请求，判断，流程控制
		commit('increment');
	},
	decrement({commit}){
		commit('decrement');
	},
	clickOdd({commit,state}){
		if(state.count%2==0){
			commit('increment');
		}
	},
	clickAsync({commit}){
		return new Promise((resolve,reject)=>{
			setTimeout(function(){
				commit('increment');
				resolve();
			},1000);
		})
	}
}

const getters={
	count(state){
		return state.count;
	},
	getOdd(state){
		return state.count%2==0?"偶数":"奇数"
	}
}
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})