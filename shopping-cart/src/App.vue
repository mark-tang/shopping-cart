<template>
  <div id="app">
    <header>
      <h1>Shopping Cart</h1>
      <div class="nav">
          <router-link :to="{path:'/index'}">iPhone 6S</router-link>
          <router-link :to="{path:'/cart'}">购物车<span class="text-danger" v-if="cart.length>0" v-text="iPhone6S.sum"></span></router-link>          
      </div>
    </header>
    <div class="main">      
      <router-view></router-view>
    </div>  
  </div>
</template>

<script type="es6">
  import {mapState,mapGetters} from 'vuex' 
  import {Tabbar} from 'mint-ui';
  export default {
    name: 'app',
    computed:{
      ...mapState(['iPhone6S','cart']),
    }
  }
</script>
<style lang="scss">
  @import "./assets/css/style"; 
  .router-fade-enter-active, .router-fade-leave-active {
      transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active {
      opacity: 0;
  }
</style>

