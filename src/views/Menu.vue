<template>
    <v-container fluid>
        <v-row align="center"
              justify="center">

            <v-col offset-md="6" md="8">
                <h1>The toilet papers</h1>
                <div class="pa-2" id="info" >
                <v-container class="image_height" fill-height fluid>
                  <v-row no-gutters >
                    <v-col
                      cols="12"
                      sm="4"
                      v-for="item in menuItems" :key="item.name"
                    >
                      <v-card
                        class="pa-2 ma-2"
                        style="overflow-y: auto; height:550px"
                      >
                        <v-img class="image_height" v-bind:src="item.image" ></v-img>
                        <span id="td_name" > {{ item.name }} </span> <br>
                        <span id="menu_item_description" > {{ item.description }} </span> 
                        <v-divider></v-divider>
                        <p class="mt-6">{{ item.price }} kr.</p>
                          <v-btn small text @click="addToBasket(item)" color="warning" dark class="mt-12">
                            Add to cart
                              <v-icon color="orange">
                                  add_shopping_cart
                              </v-icon>
                          </v-btn>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
//eslint-disable-next-line
import { dbMenuAdd } from '../firebase';
//eslint-disable-next-line
//import store from '../store/index.js'

    export default {
    data () {
      return {
        basketDump: [],
        alignmentsAvailable: [
          'start',
          'center',
          'end',
          'baseline',
          'stretch',
        ],
        alignment: 'center',
        dense: false,
        justifyAvailable: [
          'start',
          'center',
          'end',
          'space-around',
          'space-between',
        ],
         justify: 'center',
        
      }
    },

   beforeCreate() {
      this.$store.dispatch('setMenuItems')
    },

    methods: {
        addCheckOutItem() {
          this.$store.dispatch('setCheckOutItem')
      },
        addToBasket(item) {
          /*  if(this.basket.find(itemInArray => item.name === itemInArray.name)) {
                item = this.basket.find(itemInArray => item.name === itemInArray.name);
                this.increaseQtn(item);
            }
            else {
                this.basket.push({
                    name: item.name,
                    price: item.price,
                    quantity: 1
                }) 
        }*/
    this.basketDump.push({
            name: item.name,
            price: item.price,
            quantity: 1
        });
        this.$store.commit('addBasketItems', this.basketDump);
        this.basketDump = [];
    },
    increaseQtn(item) {
        item.quantity++
    },
    decreaseQtn(item) {
        item.quantity--;

        if( item.quantity === 0 ) {
            this.basket.splice(this.basket.indexOf(item), 1)
        }
    }
    },
    computed: {
      basket() {
       // return this.$store.state.basketItems
       return this.$store.getters.getBasketItems
      },//eslint-disable-next-line
       menuItems() {
        return this.$store.getters.getMenuItems
      },
      subTotal () {
        var subCost = 0;
        for(var items in this.basket) {
            var individualItem = this.basket[items];
            subCost += individualItem.quantity * individualItem.price;
        }
        return subCost
        },
      total () {
          var deliveryPrice = 10;
          var totalCost = this.subTotal;
          return totalCost + deliveryPrice
      }
    }
  }
</script>

<style scoped>
.col h1{
    border: 5px solid #1e272c;
    padding: 5px;
    margin-bottom: 5px;
    color: #ffffff;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 16px;
    text-align: right;
  }
  .col:last-child  h1{
    text-align: left;
  }
    #info {
        background-color: #1e272c;
    }

    tr th {
        font-weight: 300;
    }
    #td_name {
        font-weight: bold;
    }

    tr td {
        padding: 10px 10px 10px 16px;
    }

    #menu_item_description {
        font-style: italic;
        font-weight: 300;
       /* color: map-get($colorz, darkgray);*/
        font-size: 13px;
    }

    #td_menuitem_img {
      max-width: 40px;
      max-height: 40px;
      padding: 0;
    }

    #basket_checkout {
        font-size: 13px;
    }
    #basket_checkout p:first-child {
        line-height: 2px;
    }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'montseratt', sans-serif;
  }
  main {
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    background-color: #EEE;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .products {
    display: flex;
    max-width: 1280px;
    padding: 25px;
    margin: 0 auto;
  }



  .box
{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 8px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
}
.card
{
    margin-top: 80px;
    height: 300px;
    transition: 0.5s;
}
.card:hover
{
    border: 1px solid red;
    border-radius: 30px;
}
.card .cardImg
{
    height: 150px;
    width: 90%;
    position: relative;
    top: -15px;
    left: 5%;
}
.card .cardImg img
{
    width: 100%;
    height: 100%;
}

.card .info
{
    text-align: center;
}
.card .info h3
{
    color: rgb(70, 66, 66);
}
.card .info p
{
    color: rgb(41, 201, 49);
}

.ligne
{
    display: flex;
}



.image_height {
  max-height: 40%;
}
</style>