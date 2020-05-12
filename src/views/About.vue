


<template>
  <v-app id="inspire">

      <v-container
        class=""
        fluid
        
      >
<!--
      <div class="container mt-3 card card-body p-4">
        <h4 class="text-center">Contact Form</h4>
        <div class="form-group">
            <label for="Name">Full Name</label>
            <input type="text" 
                    name="Full Name"
                    id="userFullName"
                    class="form-control"
                    />
        </div>
        <div class="form-group">
            <label for="Email">Email</label>
            <input type="Email" 
                    name="Email"
                    id="userEmail"
                    class="form-control"
                    />
            <div class="form-group">
            <label for="Message">Message</label>
            <textarea  
                    name="Message"
                    id="userMessage"
                    class="form-control"
                    />
        </div>
        <button id="submit" class="btn btn-primary">Submit</button>
        </div>
        </div>
        -->
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
                  <v-toolbar-title>Best toilet paper</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-app-bar>
            
                <v-container>
                  <v-row dense>
                    <v-col cols="12">
                      <v-card
                        color="#1E1E1E"
                        dark
                      >
                        <v-card-title class="headline">Big variety of TP available</v-card-title>
            
                        <v-card-subtitle>Check out our best and most well known TP in our menu!</v-card-subtitle>
            
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
              <span>PAPER!</span>
            </v-tooltip>
            <v-tooltip right>
         
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>


    


 
  </v-app>
</template>

<script>
//eslint-disable-next-line
import { contact } from '../firebase';
//eslint-disable-next-line
import firebase from 'firebase'
import 'firebase/firestore'


  export default {
    name: 'ContactForm',
    props: {
      source: String,
    },
    data: () => ({
      
      drawer: null,
      justify: [
        'start',
        'center',
        'end',
        'space-around',
        'space-between',
      ],
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      item: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],

      checkbox: false,
      items: [
        {
          color: '#171717',
          src: 'https://media.nisbets.com/asset/core/prodimage/largezoom/gd751_jantex-std.jpg',
          title: 'Toilet paper ',
          artist: 'The cheapest yet underrated of all, TP basic, with 3 layers and softness like no other cheap variant!',
        },
        {
          color: '#0a0502',
          src: 'https://www.myrenova.com/Content/Images/uploaded/ProductAmbience/20130214_blk.jpg',
          title: 'Toilet paper of supreme',
          artist: 'Ever wanted to feel like a celebrity while taking a load off? now you can with our TP supreme!',
        },
      ],
    }),

    
    
      methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>

<style>

.contact-form {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 360px;
}
.form-group {
    padding: 10px;
}
.form-control {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}
input[type=text].form-control {
    margin: 8px 0;
    display: inline-block;
}
textarea.form-control {
    resize: none;
}
.btn {
    cursor: pointer;
    padding: 8px 10px;
    outline: none;
    border: none;
    background: #3be249;
    font-size: 16px;
    width: 100%;
    border-radius: 4px;
    text-align: center;
}
.alert {
    padding:0 10px;
}
.alert-success {
    color:#3be249;
}
.alert-error {
    color: #ff2121;
}
 
</style>