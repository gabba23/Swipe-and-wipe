<template>
    <v-container fluid>
        <v-row align="center"
               justify="center">
            <v-col offset-md="1" md="4">
                <h1>Add new item</h1>
                <div class="pa-2" id="info">
                    <v-text-field
                    label="Name of Toilet Paper"
                    required
                    v-model="name"
                    >
                    </v-text-field>
                    <v-text-field
                    label="Description"
                    required
                    v-model="description"
                    >
                    </v-text-field>
                    <v-text-field
                    label="Price"
                    required
                    v-model="price"
                    >
                    </v-text-field>
                    <v-file-input label="file input" @change="uploadImage"></v-file-input>

                    <v-btn
                    color="#415764"
                    @click="addNewMenuItem"
                    :disabled="btnDisable"
                    >
                      Add Item
                    </v-btn>
                    <v-btn
                    color="incomplete"
                    >
                      Cancel
                    </v-btn>
                </div>
            </v-col>
            
        </v-row>
    </v-container>
</template>

<script>

import { dbMenuAdd, fb } from '@/firebase';

    export default {
      data (){
        return {
            name: '',
            description: '',
            price: '',
            image: null,
            btnDisable: true

          }
      },
      methods: {
        uploadImage(e) {
          let file = e;
          console.log(e);
          var storageRef = fb.storage().ref('item/'+ file.name);

          let uploadTask = storageRef.put(file);
//eslint-disable-next-line
          uploadTask.on('state_changed', (snapshot) => {
         //eslint-disable-next-line
          }, (error) => {
          }, () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            this.image = downloadURL;
            this.btnDisable = false;
            console.log('File available at', downloadURL);
          });
          });


        },
        addNewMenuItem() {
          dbMenuAdd.add({
            name: this.name,
            description: this.description,
            price: this.price,
            image: this.image
          })
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
        color: map-get($colorz, darkgray);
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
</style>