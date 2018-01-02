<template>
	<div class="foot-btn">
		<ul>
	    	<router-link class="home" active-class="active" to="/home" tag='li'>
	    		<a href="javascript:;"></a>
	    	</router-link>
	    	<router-link class="write" to='/follow' tag='li'>
	    		<a href="javascript:;"></a>
	    	</router-link>
	    	<router-link class="my" active-class="active" to="/user-info" tag='li'>
	    		<a href="javascript:;"></a>
	    	</router-link>
	    </ul>
	</div>
</template>
<script>
export default{

}
</script>
<style scoped> 
.foot-btn{
	width:100%;
	height:0.8rem;
	background:#fff;
	position:fixed;
	left:0;
	bottom:0;
	border-top:1px solid #9e9a95;
	margin:0 auto;
}
.foot-btn ul{
	width:6.4rem;
	height:0.8rem;
	padding:0 0.4rem;
	box-sizing:border-box;
	margin:0 auto;
}
.foot-btn li{
	float: left;
}
.foot-btn li a{
	display:block;
	width:100%;
	height:100%;
}
.foot-btn .home{width:1.86rem;height:0.8rem; background:url(../../assets/img/home1.png) center center no-repeat; background-size:0.44rem 0.59rem; }
.foot-btn .home.active{
	background:url(../../assets/img/home.png) center center no-repeat; background-size:0.44rem 0.59rem;
}
.foot-btn .write{width:1.86rem;height:0.8rem; background:url(../../assets/img/write.png) center center no-repeat; background-size:0.82rem 0.81rem; }
.foot-btn .my{width:1.86rem;height:0.8rem;background:url(../../assets/img/my.png) center center no-repeat;background-size:0.39rem 0.63rem;}
.foot-btn .my.active{width:1.86rem;height:0.8rem;background:url(../../assets/img/my1.png) center center no-repeat;background-size:0.39rem 0.63rem;}
</style>