<template>
  <v-app id="inspire">
   

   

    <v-content>
      <v-container
        class=""
        fluid
        
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="shrink">
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn
                  :href="source"
                  icon
                  large
                  target="_blank"
                  v-on="on"
                >
              <v-card
                max-width="800"
                class="mx-auto"
              >

                <v-app-bar
                  dark
                  color="#1e272c"
                >
                  <v-toolbar-title>Best kebabs</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-app-bar>
            
                <v-container>
                  <v-row dense>
                    <v-col cols="12">
                      <v-card
                        color="#1E1E1E"
                        dark
                      >
                        <v-card-title class="headline">Big variety of kebabs available</v-card-title>
            
                        <v-card-subtitle>Check out our best and most well known kebabs in our menu!</v-card-subtitle>
            
                        <v-card-actions>
                          <v-btn text to="/menu">Go to menu</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-col>
            
                    <v-col
                      v-for="(item, i) in items"
                      :key="i"
                      cols="12"
                    >
                      <v-card
                        :color="item.color"
                        dark
                      >
                        <div class="d-flex flex-no-wrap justify-space-between">
                          <div>
                            <v-card-title
                              class="headline"
                              v-text="item.title"
                            ></v-card-title>
            
                            <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                          </div>
            
                          <v-avatar
                            class="ma-3"
                            size="125"
                            tile
                          >
                            <v-img :src="item.src"></v-img>
                          </v-avatar>
                        </div>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  large
                  href="https://codepen.io/johnjleider/pen/bXNzZL"
                  target="_blank"
                  v-on="on"
                >
                 
                </v-btn>
              </template>
              <span>Codepen</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      items: [
        {
          color: '#171717',
          src: 'https://prod-wolt-venue-images-cdn.wolt.com/5dfa30a6c61a194bfdd4cec9/785da302-35fe-11ea-b1c3-0a5864709e55_NewsKebab_menu-3970.jpg',
          title: 'Kebab lavash',
          artist: 'The most regular kebab in lavash is simple yet delicious',
        },
        {
          color: '#0a0502',
          src: 'https://www.simplyrecipes.com/wp-content/uploads/2011/07/beef-kabobs-horiz-a-1600.jpg',
          title: 'Kebab on a stick',
          artist: 'The more traditional kebab, a kebab which is on a stick, speaks for itself',
        },
      ],
    }),
    
  }
</script>

<style>
 
</style>