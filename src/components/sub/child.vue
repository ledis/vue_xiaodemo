<template>
	<transition name="model">
		<div class="model" >
			<div class="model-mask" @click="close"></div>
			<div class="modal-wrapper">
				<div class="modal-header">
          <slot name="header">
            {{headerTitle}}
          </slot>
        </div>

        <div class="modal-body">
          <slot name="body">
            default body
          </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <button class="modal-default-button" @click="close">
              OK
            </button>
          </slot>
        </div>
			</div>
		</div>
	</transition>
</template>
<script>
export default{
	props:['headerTitle'],
	methods:{
		close(){
			this.$emit('closeModel');
		}
	}
}
</script>
<style scoped>
.model{
	position: fixed;
  z-index: 96;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.model-mask{
	position: fixed;
  z-index: 97;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  transition: opacity .3s ease;
}
.modal-wrapper{
	position: relative;
	width:80%;
  height: auto;
  margin: 0 auto;
  margin-top: 100px;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  z-index:98;
}
.model-enter-active, .model-leave-active{
	transition: opacity .5s;
	opacity:1;
}
.model-enter, .model-leave-to {
	opacity: 0
}
</style>