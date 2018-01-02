<template>
  <div id="app">
    <!-- <loading v-if="loading"></loading> -->
    <nav-header v-show="headShow"></nav-header>
    <transition name="fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <footer-view v-show="footerShow"></footer-view>
  </div>
</template>

<script>
import navHeader from '@/components/newWeb/Nav.vue'
import footerView from '@/components/newWeb/Footer.vue'
import {mapGetters} from 'vuex'
export default {
  name: 'app',
  components:{
    navHeader,
    footerView,

  },
  computed:{
    ...mapGetters([
      'headShow',
      'footerShow',

    ])
  },
  mounted:function(){
    var path=this.$route.path.substring(1);
    this.headerChange(path);
    this.footerChange(path);
  },
  watch:{
    $route(to){
      var path=to.path.substring(1);
      this.headerChange(path);
      this.footerChange(path);
    }
  },
  methods:{
    headerChange(path){
      if(path=='user-info' || path=='user-login' || path=='user-reg' || path.indexOf('article')!=-1){
        this.$store.dispatch('hideHeader');
      }else{
        this.$store.dispatch('showHeader');
      }
    },
    footerChange(path){
      if(path.indexOf('article')==-1){
        this.$store.dispatch('showFooter');
      }else{
        this.$store.dispatch('hideFooter');
      }
    }
  }
}
</script>

<style>
#app {
  
}
</style>
