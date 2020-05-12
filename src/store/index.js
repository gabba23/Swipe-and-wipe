import Vue from 'vue'
import Vuex from 'vuex'
import { dbMenuAdd } from '../firebase'
import { dbOrders } from '../firebase'

//import { db } from '../firebase'
//eslint-disable-next-line
import firebase from 'firebase'
import 'firebase/firestore'

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    counter: 1,
    basketItems: [
   
    ],

    menuItems: [
   
    ],
    orderItems: [ // order item array (check firestore also)
      {
        /*      
        orderNr: 1,
        name : "name 1",
        price: 230,
        quantity: 2,
        status: "inprogress" 
        */
       }
    ],
    currentUser: null
  },
  mutations: {
    // delete order item
   /*
    deleteOrderItem: (state, item) => {
      
      dbOrders.doc(id).delete().then(() => {
        console.log("Document successfully deleted!");
      }).catch(function(error) {
      });
    },
    */
    // Testing checkout upload
    //eslint-disable-next-line
    addCheckoutItem: (state , basketItems) => {
      dbOrders.add({
        archive: false,  // tilføj
        storeOrder: false,  // tilføj
        orderNumber: state.counter++,  //firebase.firestore.FieldValue.increment(1),
        status: "incomplete" ,  // skift
        orderLines: state.basketItems
      })
    
    // console.log("test data being send", dbOrders)
    },
    addBasketItems: (state, basketItems) => {
      if(basketItems instanceof Array) {
        basketItems.forEach(item => {
          if(state.basketItems.find(itemInArray => item.name === itemInArray.name)) {
            item = state.basketItems.find(itemInArray => item.name === itemInArray.name);
            item.quantity++
          }
          else {
            state.basketItems.push({
              name: item.name,
              price: item.price,
              quantity: 1
            })
            console.log("basketitem", basketItems)
          }
        })
      } 
    },
    userStatus (state, user) {
      if(user) {
        state.currentUser = user
      }
      else {
        state.currentUser = null
      }
    },
    // IMport firebase
    setMenuItems: state => {
      let menuItems = []
 
      dbMenuAdd.onSnapshot((snapshotItems) => {
        menuItems = []  // empty it, or it will duplicate the stuff on delete
        snapshotItems.forEach((doc) => {
          var menuItemData = doc.data();
          menuItems.push({ 
            // Spread operator istedet for at gøre det for hvert enkelte
            ...menuItemData, // spread operator - grabbing all the items (person, due, title, content, etc)
            id: doc.id 
          })
         // console.log("Test:", menuItemData, "id: ", doc.id)
        })
        state.menuItems = menuItems
      })
    },
    setOrderItems: state => {
      let orderItems = []
 
      dbOrders.onSnapshot((snapshotItems) => {
        orderItems = []  // empty it, or it will duplicate the stuff on delete
        snapshotItems.forEach((doc) => {
          var orderItemData = doc.data();
          orderItems.push({ 
            // Spread operator istedet for at gøre det for hvert enkelte
            ...orderItemData, // spread operator - grabbing all the items (person, due, title, content, etc)
            id: doc.id 
          })
         // console.log("Test:", menuItemData, "id: ", doc.id)
        })
        state.orderItems = orderItems
      })
    }
  },
  actions: {
    // action for delete orderitem
  //  setDeleteOrderItem(context) {
   //   context.commit('deleteOrderItem')
  //  },
    // action for Checkout
    setCheckoutItem(context) {
      context.commit('addCheckoutItem')
    },
    setUser(context, user) {  
  //  setUser({ commit }, user) {
      context.commit('userStatus', user)
      // commit('userStatus', user)
    },
    // IMport firebase - executer og gemmer data fra firestore gennem mutation og gemmes i state
    setMenuItems: context => {
      context.commit('setMenuItems')
    },
    setOrderItems: context => {
      context.commit('setOrderItems')
    }
  },
  getters: {
    getBasketItems: state => state.basketItems,
    currentUser: state => state.currentUser,
    // IMport firebase - peger på state hvor firebase fyres ind i
    getMenuItems: state => state.menuItems,
    getOrderItems: state => state.orderItems
  }
})
