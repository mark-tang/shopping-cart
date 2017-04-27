<template>
  <div class="container">    
    <div class="gallery"><img :src="iPhone6S.activeStyleUrl"></div>
    <div class="information">
        <h2 v-text="iPhone6S.name"></h2>
        <hr />
        <div class="options" v-for="item in phone">
          <dl class="descr">
            <dt>描述：</dt>
            <dd><div v-text="item.desc"></div></dd>
          </dl>
          <dl class="price">
            <dt>价格：</dt>
            <dd class="pomegranage"><strong>￥<span v-text="iPhone6S.price"></span></strong></dd>
          </dl>
          <dl class="outward">
            <dt>外观：</dt>
            <dd>
              <ul>
                <li v-for="(value,key,index) in item.style"  @click="changeStyle(value,key)" :class="{active:iPhone6S.activeStyleUrl==value}">
                  <span>{{key}}</span>
                </li>                      
              </ul>
            </dd>
          </dl>
          <dl class="ram">
            <dt>存储容量:</dt>
            <dd>
            <ul>
              <li v-for="(value,key,index) in item.storage"  @click="ramToggle(value,key)" :class="{active:iPhone6S.price==value}">
                <span>{{key}}</span>
              </li>
            </ul>
            </dd>
          </dl>
          <dl class="quanlity" v-if="iPhone6S.quanlity">
            <dt>购买数量</dt>
            <dd><span class="minus" @click="minusNum()">-</span><input type="text" class="num" :value="iPhone6S.buyNum" v-model="iPhone6S.buyNum"/><span class="add" @click="addNum()">+</span></dd>
          </dl>
        </div>
        <hr />
        <button class="handle-btn" @click="addItem()" :disabled="iPhone6S.isSelected"><span class="icon icon-cart"></span> 加入购物车 </button>       
    </div>    
  </div>
</template>

<script type="es6">
  import {mapState} from 'vuex' 
  import cell from '../jsons/phone.js'
  export default {  
    computed:{
      ...mapState(['iPhone6S','cart']),         
    },    
    created(){
      this.load();   
      this.$store.commit('saveInitialVal',cell);  
    },   
    data(){
      return {
        phone:[],        
      }
    },
    methods: { 
      load(){        
        this.phone = cell;
        this.$store.commit('setIniti',cell);                               
      },
      changeStyle(value,key){  
        this.$store.commit('setStyle',{value,key});

      },
      ramToggle(value,key){      
        this.$store.commit('setStorage',{value,key});         
      },
      addItem(){        
        this.$store.commit('setAddItem');       
      },
      addNum(){
        //alert(enterVal);
        this.$store.commit('setAddNum');
      },
      minusNum(){
        this.$store.commit('setMniusNum');
      }
    }
  }
</script>
<style lang="scss" scope>
.clearfix{ zoom:1;
  &::after{ content:""; clear: both;; display:block; height: 0; }
}
.container{ 
  .gallery{float: left; box-sizing: border-box; width: 50%; 
    img{ display: table; margin: 0 auto; }
  }
  .information{ float: left; padding: 0 15px;box-sizing: border-box; width: 50%;
    h2{ font-style:4px; padding-top: 20px; }
    .options{
      dl{margin-bottom: 20px;           
        dt{ width: 64px;color: #95a5a6; padding: 0 4px 0 0; float: left; text-align: right; line-height: 29px; }
        dd{ padding:0 4px; margin-left: 64px; 
          div,strong{ line-height: 29px; }
        }
        &.price{dd{ color:#c0392b; }}
        &.outward,&.ram{ @extend .clearfix;
          ul{@extend .clearfix;}
          li{ border: 2px solid #eee; padding: 0 8px; margin-right:4px; float: left; text-align: center;line-height: 25px;  
            &.active{ border: 2px solid #c0392b; }
          }          
        } 
      }
      .quanlity{
        span{display: inline-block;  padding:0 12px; color: #999; background: #f5f5f5; line-height: 30px; margin-right: 1px;}
        .minus{ border-radius: 3px 0 0 3px; cursor: pointer; }
        .add{ border-radius: 0 3px 3px 0; cursor: pointer; }
        .num{color:#3d4245; border: 1px solid #eee; padding: 0 3px; line-height:27px; width: 45px; margin:0 3px; text-align: center;}
      }
    }      
   .icon-cart{ background-image:url(../assets/img/icon-cart.png);}
  }
}  
</style>
