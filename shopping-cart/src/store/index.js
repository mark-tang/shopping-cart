/*
 * Created by Tang on 2017/03/20.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
Vue.use(Vuex);
Vue.use(VueResource)

const store = new Vuex.Store({
  state: {     
    iPhone6S: {     
      isSelected: true,      
      activeStyleUrl: 'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png',        
      buyNum:1,      
      sum:0,
      total:0,
    },    
    cart:[],
    initial:[]
  },
  getters: {
  },
  mutations: {
    setIniti:(state,cell)=>{
      state.iPhone6S.price = cell[0].price;
    },   
    setStyle: (state, {value,key})=> {
      state.iPhone6S.activeStyleUrl=value;
      state.iPhone6S.activeColor = key;
    },
    setStorage: (state, {value,key})=>{     
      state.iPhone6S.price=value;    
      state.iPhone6S.isSelected=false;
      state.iPhone6S.quanlity=true;
      state.iPhone6S.activeStorage= key;    

    },
    setAddNum:(state)=>{
      state.iPhone6S.buyNum++;
    },
    setMniusNum:(state)=>{
      if(state.iPhone6S.buyNum>1){
        state.iPhone6S.buyNum--;
      }
      else{
        state.iPhone6S.buyNum=1;
      }
    },
    setAddItem:(state) =>{  
      //Add shopping list
      const activeStyle = state.iPhone6S.activeColor === undefined ? '银色' : state.iPhone6S.activeColor;
      const type = activeStyle + '，' +  state.iPhone6S.activeStorage;   
      var cartlist = {  
        cartInfo: type,
        quanlity: state.iPhone6S.buyNum,
        price:state.iPhone6S.price,
        singleTotal:state.iPhone6S.price*state.iPhone6S.buyNum
      }
      state.cart.push(cartlist); 
      //total quanlity & total price
      state.iPhone6S.sum += Number(state.iPhone6S.buyNum);
      state.iPhone6S.total += state.iPhone6S.price*Number(state.iPhone6S.buyNum);
       //initial
      state.iPhone6S.buyNum = 1;       
      state.iPhone6S.price = state.initial[0].price; 
      state.iPhone6S.activeStyleUrl='http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png'      
      state.iPhone6S.isSelected = true;
      state.iPhone6S.quanlity = false;
    },
    removeItem:(state,index)=>{
      //total quanlity & total price
      state.iPhone6S.sum -=state.cart[index].quanlity;
      state.iPhone6S.total -=state.cart[index].singleTotal;
      state.cart.splice(index,1);
    },
    saveInitialVal:(state,cell)=>{
      state.initial=cell;      
    },  
  },
  actions: {    
  }
});
export default store
