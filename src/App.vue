


<template>
  <v-app id="App">

    
    <Navigation />
   

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from './components/Navigation';



  export default {
    components: {
      Navigation,

  },
    name: 'App',
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      
    }),
    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>

<style lang="scss">
  main{
    background-image: url('./assets/kebab_background.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }
  .col h1{
    border: 5px solid #ffffff;
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
        background-color: #ffffff;
    }
</style>