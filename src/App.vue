


<template>




  <v-app id="App">

    
    <Navigation />
 
    <v-content>
      <router-view></router-view>


    </v-content>
    <v-bottom-navigation
    v-model="bottomNav"
    dark
    shift
  >
    <v-btn to="/" >
      <span>Home</span>
      <v-icon>home</v-icon>
    </v-btn>

    <v-btn to="/menu">
      <span>Menu</span>
      <v-icon>restaurant_menu</v-icon>
    </v-btn>

    <v-btn to="/orders">
      <span>Orders</span>
      <v-icon>assignment</v-icon>
    </v-btn>

    <v-btn to="/about">
      <span>About</span>
      <v-icon>info</v-icon>
    </v-btn>
    <v-btn to="/admin">
      <span>Admin</span>
      <v-icon>lock</v-icon>
    </v-btn>
  
  </v-bottom-navigation>
  
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
      bottomNav: 3,
      drawer: null,
      
    }),
    created () {
      this.$vuetify.theme.dark = true
    },
    
  }
</script>

<style lang="scss">
  

  
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