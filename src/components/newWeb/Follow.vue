<template>
	<div class="content mt40">
		<div class="newsList">
    	<ul>
        <li v-for="(item, index) in arrList">
        	<a href="javascript:;">
              <h2>{{index+1}} .{{item.title}}</h2>
              <p>{{item.detail}}</p>
            </a>
        </li>     
      </ul>
    </div>
	</div>
</template>
<script>
export default{
	data(){
		return{
			arrList:[]
		}
	},
	mounted(){
		this.fetchData();
	},
	methods:{
		fetchData(){
			var _this=this;
			this.$axios.get('src/data/follow.data').then(function(res){
				_this.arrList=res.data;
			}).catch(function(err){
				console.log(err);
			});
		}
	}
}
</script>
<style scoped> 
.mt40{
	margin-top:0.6rem;
}
.newsList{width:6.4rem; margin:0 auto;}
.newsList ul{ padding:0 0.4rem;}
.newsList ul li{ color:#494d4d; padding:0.2rem 0; border-bottom:1px dashed #ccc;}
.newsList ul li:last-child{border-bottom:0;}
.newsList ul li h2{max-height:0.9rem; font-size:0.33rem; overflow:hidden;}
.newsList ul li p{max-height:1.8rem; margin-top:0.05rem;overflow:hidden;}
</style>