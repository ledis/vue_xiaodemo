<template>
	<div class="parent">
		<button @click="showModal">按钮</button>
		<child v-if="showModel" header-title="温馨提示"  @close="showModel = false" @closeModel="closeModel">
			<div slot="body">
				<p>你是傻逼吗?</p>
				<p>你是！</p>
			</div>
		</child>
	</div>
</template>
<script>
import child from '@/components/sub/child'
export default{
	components:{child},
	data(){
		return{
			showModel:false
		}
	},
	methods:{
		showModal(){
			this.showModel=true
		},
		closeModel(){
			this.showModel=false
		}
	}
}
</script>
<style>

</style>