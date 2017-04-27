<template>
  <div class="container">    
    <div class="gallery"><component :is="viewcontet" keep-alive></component></div>
    <div class="introduce">
        <h2>Apple/苹果 iPhone 6S</h2>
        <hr />
        <div class="options">
          <dl class="descr">
            <dt>描述：</dt>
            <dd><span>3D Touch、1200万像素照片、4k视频，强大功能于一身。</span></dd>
          </dl>
          <dl class="price">
            <dt>价格：</dt>
            <dd class="pomegranage"><strong>￥<span>5288</span></strong></dd>
          </dl>
          <dl class="outward">
            <dt>外观：</dt>
            <dd>
              <ul>
                <li v-for="(item,index) in info" :class="{active:current==index}" @click="colorToggle(index,item.show)"><span>{{item.color}}</span></li>             
              </ul>
            </dd>
          </dl>
          <dl class="ram">
            <dt>存储容量:</dt>
            <dd>
            <ul>
              <li v-for="(size,index) in store" :class="{active:act==index}" @click="ramToggle(index)"><span>{{size}}</span></li>              
            </ul>
            </dd>
          </dl>
        </div>
        <hr />
        <button class="add-cart"> <span class="icon-cart"></span> 加入购物车 </button>    
    </div>    
  </div>
</template>

<script type="es6">
  const cont01 = "<img src='../assets/img/iphone-gold.png' alt='iphone 6s 金色'>"
  const cont02 = "<img src='../assets/img/iphone-gray.png' alt='iphone 6s 金色'>"
  const cont03 = "<img src='../assets/img/iphone-sliver.png' alt='iphone 6s 金色'>"
  const cont04 = "<img src='../assets/img/iphone-rosegold.png' alt='iphone 6s 金色'>"
  /**/
  const color01 = {template: "<img src='http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png' alt='iphone 6s 金色'>"}
  const color02 = {template: "<img src='http://o8yu724qs.bkt.clouddn.com/iphone6s-gray-select-2015.png' alt='iphone 6s 金色'>"}
  const color03 = {template: "<img src='http://o8yu724qs.bkt.clouddn.com/iphone6s-gold-select-2015.png' alt='iphone 6s 金色'>"}
  const color04 = {template: "<img src='http://o8yu724qs.bkt.clouddn.com/iphone6s-rosegold-select-2015.png' alt='iphone 6s 金色'>"}
  export default {    
    data(){
      return {
       info:[
        {cont:cont01,color:"银色",show:color01},
        {cont:cont02,color:"深空灰色",show:color02},
        {cont:cont03,color:"金色",show:color03},
        {cont:cont04,color:"玫瑰金色",show:color04},
       ],
       store:["16GB","64GB","128GB"],
       current:0,
       act:0,
       viewcontet:color01,
      }
    },    
    
    methods: { 
      colorToggle(index,show){
        this.current =index;
        this.viewcontet = show;
      },
       ramToggle(index){
        this.act =index;
      }     
    }
  }
  //<img src="../assets/img/iphone-gold.png" alt="iphone 6s 金色">
</script>
<style lang="scss">
.clearfix{ zoom:1;
  &::after{ content:""; clear: both;; display:block; height: 0; }
}
.container{ display: table; margin:20px auto 0;
  .gallery{float: left;  padding: 0 15px; }
  .introduce{ float: left; padding: 0 15px;
    h2{ font-style:4px; padding-top: 20px; }
    .options{
      dl{margin-bottom: 20px;          
        dt{ width: 64px;color: #95a5a6; padding: 4px 4px 4px 0; float: left; text-align: right; }
        dd{ padding: 4px; margin-left: 64px; }
        &.price{ 
          dd{ color:#c0392b; }
        }
        &.outward,&.ram{ @extend .clearfix;
          li{ border: 2px solid #eee; padding: 4px 8px; margin-right:4px; float: left; text-align: center;  
            &.active{ border: 2px solid #c0392b; }
          }          
        }        
      }
    }
    .add-cart{ width:100%; border:0 none; border-radius: 4px; background: #d9534f; color: #fff; padding: 6px 0; text-align: center; font-weight: 400; display: block; 
      span{ width: 14px; height: 14px; background:url(../assets/img/icon-cart.png) no-repeat; display: inline-block;margin-right: 4px; }
    }
  }
}
  
</style>
