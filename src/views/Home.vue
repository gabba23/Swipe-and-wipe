<template>
      <v-container fluid
      ma-0
      pa-0>
        <v-parallax
        height="800"
        src="../assets/tp_background.jpg"
        >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center" cols="12">
            <v-img src="../assets/tp.png" class="logo"></v-img>

            <hr class="line">
            <br>
            <h2 class="subheading">Get our best toilet paper for your bum!</h2>

            <v-btn class="ma-6" outlined color="white" to="/menu">See menu</v-btn>
          </v-col>
        </v-row>


        </v-parallax>
        
        

    <v-row>
      <v-col class="xs-12" wrap>
        <v-carousel>
          <v-carousel-item 
          v-for="kebab in kebabs"
          :src="kebab.imageUrl"
          :key="kebab.id"
          >
          <div class="title">
            {{ kebab.title }}
          </div>
         
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

    <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center" cols="12">
           
          
            <br>
            <h2 class="subheading">Best featured products of our Swipe and wipe toilet paper!</h2>
            <hr class="line">
            
          </v-col>
        </v-row>

  
    <main id="app" @mousemove="mousemove">
      <section class="products">
        <product 
        v-for="product in products"
        :key="product.color"
        :product="product"
        />
      </section>
    </main>


  </v-container>
</template>

<script>
import Product from '../components/Product'



export default {
  components: {
    Product
  },
  data () {
    return {
      isActive: false,
      kebabs: [
      { imageUrl: 'https://www.jetsetter.com/uploads/sites/7/2020/04/GettyImages-1131645709.jpg', id: '1', title: 'Toilet paper is love'},
      { imageUrl: 'https://i.cbc.ca/1.5536275.1587145935!/cumulusImage/httpImage/toilet-paper.jpg', id: '1', title: 'Toilet paper is life'},
      { imageUrl: 'https://i.insider.com/550b24a46da8115622cd5ecd?width=1100&format=jpeg&auto=webp', id: '1', title: 'Love your bum'},
      ],
      products: [
        {
          title: 'Swipe and wipe premium',
          color: 'green',
          bgtext: 'SW',
          src: require('../assets/tp_1.png')
        },
        {
          title: 'Swipe and wipe supreme',
          color: 'blue',
          bgtext: 'SW',
          src: require('../assets/tp_4.png')
        },
        {
          title: 'Swipe and wipe beginners',
          color: 'pink',
          bgtext: 'SW',
          src: require('../assets/tp_supreme.png')
        },
        
      ]
    }
  },
  methods: {
    mousemove (e) {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let products = document.querySelectorAll('.products .product');
      for (let i = 0; i < products.length; i++) {
        let product = products[i];
        let product_image = product.querySelector('.product-image-wrap');
        let img_x = mouseX - this.coords(product_image).x;
        let img_y = mouseY - this.coords(product_image).y;
        product_image.style.transform = `translateY(-${img_y/40}px) translateX(-${img_x/40}px) translateZ(100px)`;
        let bgtext = product.querySelector('.bg-text');
        let bg_x = mouseX - this.coords(bgtext).x;
        bgtext.style.transform = `translateX(${bg_x/25}px)`;
      }
    },
    coords (el) {
      let coords = el.getBoundingClientRect();
      return {
        x: coords.left / 2,
        y: coords.top / 2
      }
    }
  }
}
</script>


<style lang="scss">

  .line {
    height: 4px;
    background-color: white;
    color: white;
    max-width: 30%;
    display: block;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
  }


    .logo {
      display: block;
      margin-left: auto;
      margin-right: auto;
      max-width: 20%;
      height: auto;
    }


   .info_box .flex h1{
    border: 5px solid #ffffff;
    padding: 5px;
    margin-bottom: 5px;
    color: #ffffff;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 16px;
    text-align: center;
  }
  .info_box .flex div {
    background-color: white;
    padding: 20px;
  }

  .layout:first-child {
    height: 40vh;
  }
  .layout:last-child {
    height: 40vh;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 50px;
    background-color: #55575850;
    color: white;
    font-size: 2em;
    padding: 20px;

  }

  .button {

    bottom: 50px;
    background-color: #55575850;
    color: white;
    font-size: 2em;
    padding: 20px;
  }

  #bottom {
    position: relative;
  padding-bottom: 50px;
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'monsteratt', sans-serif;
  }

  main {
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    background-color: #171717;
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
    
</style>