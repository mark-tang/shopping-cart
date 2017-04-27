<template>
  <div class="container container-cart">
      <div class="shopping-list"  v-if="cart.length>0">
        <div class="head"><span class="icon icon-red-cart"></span>购物车 <strong class="fr">总价：¥<span class="total" v-text="iPhone6S.total"></span></strong></div>
        <div class="content">
          <ul class="item-list">
            <li v-for="(item,index) in cart">
              <strong class="del" @click="deleteItem(index)">×</strong>
              Apple/苹果 iPhone6s             
              <span class="info" v-text="item.cartInfo"></span>            
              <span>¥<strong v-text="item.price"></strong></span>&nbsp;×&nbsp;
              <span class="num" v-text="item.quanlity"></span>
              <span class="fr singletotal"><strong v-text="item.singleTotal"></strong></span>
            </li>
          </ul>          
        </div>
        <div class="foot">
          <button class="handle-btn"> 结算<span class="icon icon-pay"></span></button>  
        </div>
      </div>
      <div class="tips" v-else>购物车是空的</div>
  </div>
</template>

<script type="es6">
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['iPhone6S','cart'])
    },   
    methods: { 
      deleteItem(index){
        this.$store.commit('removeItem',index);            
      }
    }
  }
</script>
<style lang="scss" scope>
  .container-cart{  
    .shopping-list{border: 1px solid #ebccd1;border-radius: 5px; 
      .head{ background:#f2dede; border-bottom: 1px solid #ebccd1; color: #a94442; padding: 10px 15px;
        .icon-red-cart{ background-image: url(../assets/img/icon-red-cart.png); margin-right: 3px; margin-top: -2px;}
        .total{ margin-left: 5px; }
      }
      .content{ padding: 15px;
        .item-list{
          li{ padding-bottom: 10px;
            span{ line-height: 1}
            .del{  background:#d9534f; color: #fff; width: 18px; height: 18px; text-align: center; line-height: 18px;  border-radius: 50%; margin-right: 8PX; cursor: pointer; display: inline-block; }
            .info{ background: #5cb85c; color: #fff; padding: 5px 3px; border-radius: 5px; display: inline-block;}
            .num{ background: #d9534f; color: #fff; padding: 3px; border-radius: 5px; display: inline-block; }
            .singletotal{ color: #c0392b; }
           }
        }
      }
      .foot{ background: #f5f5f5; padding: 10px 15px;
         .icon-pay{background-image:url(../assets/img/icon-pay.png);  vertical-align: top; margin-left: 3px;}
      }
    }
    .tips{ border: 2px dashed #aaa; border-radius: 4px; color:#d9534f;  line-height: 200px; text-align: center; }
  }
</style>
