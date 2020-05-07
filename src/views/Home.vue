<template>
  <v-container>
    
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
          <div class="text-center" id="bottom">
          <v-btn color="#415764" to="/menu">
            See menu
          </v-btn>
        </div>
       
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data () {
    return {
      kebabs: [
      { imageUrl: 'https://c.tfstatic.com/w_656,h_368,c_fill,g_auto:subject,q_auto,f_auto/restaurant_photos/489/543489/source/turkish-doner-kebab-kebab-9ba1e.jpg', id: '1', title: 'yeet'},
      { imageUrl: 'https://prod-wolt-venue-images-cdn.wolt.com/5dfa30a6c61a194bfdd4cec9/785da302-35fe-11ea-b1c3-0a5864709e55_NewsKebab_menu-3970.jpg', id: '1', title: 'yeet'},
      { imageUrl: 'https://dk-spisbedre-production.imgix.net/images/recipes/kebab-i-pitabrod-med-gront-og-dressing_659.jpg?fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.3934326171875&fp-z=1&w=1200&h=628', id: '1', title: 'yeet'},
      ]
    }
  }
}
</script>


<style lang="scss">
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

</style>