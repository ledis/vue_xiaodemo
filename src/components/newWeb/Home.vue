<template>
	<div class="content mt40">
		<div class="banner">
			<swiper :options="swiperOption"  ref="mySwiper">  
	        <!-- 这部分放你要渲染的那些内容 -->  
	        <swiper-slide>
	        	<img src="../../assets/images/img_1.jpg" alt=""/>
	        	<div class="text-box">
	          	<h2>还可以降低首付款健身房11111</h2>
	              <p>刘德华11 / 文</p>
	          </div>
	        </swiper-slide>
			    <swiper-slide>
			    	<img src="../../assets/images/img_2.jpg" alt=""/>
	        	<div class="text-box">
	          	<h2>还可以降低首付款健身房2222</h2>
	              <p>刘德华22 / 文</p>
	          </div>
			    </swiper-slide>
	        <!-- 这是轮播的小圆点 -->  
	        <div class="swiper-pagination banner-pagination" slot="pagination"></div>  
	    </swiper>
		</div>
		<div class="newsList">
			<ul>
				<li v-for="(item,index) in arrList">
					<router-link :to="'/article/'+item.id">
						<h2>{{index+1}} . {{item.title}}</h2>
		        <p>{{item.detail}}</p>
		      </router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default{
	components: {  
      swiper,  
      swiperSlide  
  },  
	data(){
		return{
			swiperOption:{
				//是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true  
        //notNextTick: true,  
				autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        speed:400,
        autoHeight: true,
				loop : true,
				pagination: {
          el: '.banner-pagination',
          clickable: true
        }
			},
			arrList:[]
		}
	},
	computed: {
    
  },
	mounted(){
		this.fetchData();
	},
	methods:{
		fetchData(){
			var _this=this;
			this.$axios.get('src/data/index.data').then(function(res){
				_this.arrList=res.data;
				console.log(res.data)
			}).catch(function(error){
				console.log(error);
			})
		}
	}
}
</script>
<style scoped> 
body{
	background:#f2f4f5;
}
.mt40{
	margin-top:0.6rem;
}
.banner{width:6.4rem;position: relative;overflow: hidden; z-index: 1}
.swiper-container,.swiper-wrapper{
	width:100%;
	height: 100%;
}
.banner .swiper-slide{width:100%;
height:100%;}
.banner .swiper-slide img{max-width:100%;width:100%; display:block;}
.banner .swiper-slide .text-box{width:6.4rem; padding:0 0.3rem;height:1.24rem; position:absolute; left:0; bottom:0; color:#fff; background:rgba(0,0,0,0.5);}
.text-box h2{ font-size:0.3rem; font-weight:normal; margin-top:0.22rem; line-height:100%; margin-bottom:0.22rem; overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
.text-box p{ line-height:100%;}

.banner-pagination{position:absolute; right:0.2rem;bottom:0.2rem;text-align: right;padding-right:0.3rem;}

.newsList{width:6.4rem; margin:0 auto;}
.newsList ul{ padding:0 0.4rem;}
.newsList ul li{ color:#494d4d; padding:0.2rem 0; border-bottom:1px dashed #ccc;}
.newsList ul li:last-child{border-bottom:0;}
.newsList ul li h2{max-height:0.9rem; font-size:0.33rem; overflow:hidden;}
.newsList ul li p{max-height:1.8rem; margin-top:0.05rem;overflow:hidden;}
</style>