<template>
    <v-container  fluid>
     <v-row align="center"
     justify="center">
            <v-col offset-md="6" md="4">
                <h1>Current Basket</h1>
                <div class="pa-2" id="info">
                    <v-simple-table id="menu-table" > <!-- v-if="basket.length > 0" -->
                        <template v-slot:default>
                          <thead>
                            <tr>
                              <th class="text-left" stlye="width: 30%">Quantity</th>
                              <th class="text-left" style="width: 50%;">Name of an item</th>
                              <th class="text-left" style="width: 20%;">Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="item in basket" :key="item.name">
                              <td>
                                <v-icon color="orange" @click="increaseQtn(item)">add_box</v-icon>
                                    {{item.quantity}}
                                <v-icon color="orange" @click="decreaseQtn(item)">indeterminate_check_box</v-icon>
                              </td>
                              <td>{{ item.name }}</td>
                              <td>{{ item.price }}</td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>

                      <v-simple-table >  <!-- v-else -->
                          <p>The basket is empty</p>
                      </v-simple-table>

                      <v-divider></v-divider>
                      <v-row id="basket_checkout" class="mt-4" style=" margin:0;">
                          <v-col>
                            <p>Subtotal:</p>
                            <p>Delivery:</p>
                            <p>Total amount:</p>
                          </v-col>
                          <v-col class="text-right">
                              <p> {{ subTotal }} DKK</p>
                              <p>10 DKK</p>
                              <p><b> {{total}}  DKK</b></p>
                          </v-col>
                      </v-row>
                      <v-row style="margin:0;">
                        <v-spacer></v-spacer>
                        <v-btn color="#415764" @click="addCheckOutItem()">Chekcout</v-btn>
                      </v-row>
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




 .products{
        margin-top: 7rem;
        
        padding-bottom: 3rem;
    }








     .product {
    flex: 1 1 33.333%;
    width: 100%;
    padding: 25px;
  }
  .product-inner {
    position: relative;
    padding: 25px;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    perspective: 1000px;
  }
  .product-inner.green {
    background-image: linear-gradient(to bottom right, #24D484, #116432);
  }
  .product-inner.blue {
    background-image: linear-gradient(to bottom left, #24D484, #2474C4 70%);
  }
  .product-inner.pink {
    background-image: linear-gradient(to bottom right, #F444A4, #1168D4);
  }
  .product-text-wrap {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    overflow: hidden;
    perspective: 1000px;
  }
  
  .product-text-wrap h2 {
    color: #313131;
    font-size: 128px;
    font-weight: 900;
    opacity: 0.2;
    transform-origin: center;
  }
  .product-image-wrap {
    position: relative;
    z-index: 1;
    transform-origin: center;
  }
  .product-image-wrap .image {
    width: 100%;
    filter: drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.25));
  }
  .product-detail {
    background-color: #FFF;
    padding: 25px;
    margin: 0px -25px -25px;
  }
  .product-detail h2 {
    font-size: 24px;
    font-weight: 700;
    color: #676767;
    margin-bottom: 15px;
  }
  .product-detail p {
    font-size: 14px;
    line-height: 1.5;
    font-weight: 300;
    color: #676767;
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