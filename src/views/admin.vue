<template>
    <v-container>


      <v-snackbar
      top
      v-model="updatedSuccess"
    >
      {{ updatedText }}
      <v-btn
        color="pink"
        text
        @click="updatedSuccess = false"
      >
        Close
      </v-btn>
      </v-snackbar>

        <v-row>
            <v-col offset-md="2" md="8">
                <h1>Current Toilet papers in menu items</h1>
                <div class="pa-2" id="info">
                    <v-simple-table id="menu-table">
                        <template v-slot:default>
                          <thead>
                            <tr>
                              <th class="text-left" style="width: 70%"> 
                                <v-btn color="orange" small text to="/addNew">
                                  <v-icon>add</v-icon> <span style="padding: 0 10px">Add item</span>
                                </v-btn>
                              </th>
                              <th class="text-left" stlye="width: 70%">Price</th>
                              <th class="text-left" style="width: 100px;">Edit</th>
                              <th class="text-left" style="width: 100px;">Remove</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="item in menuItems" :key="item.name">
                              <td>
                                <span id="td_name"> {{ item.name }} </span> <br> 
                                <span id="menu_item_description"> {{ item.description }} </span> 
                              </td>
                              <td>{{ item.price }}</td>
                              <td>
                                  <v-btn small text  @click.stop="dialog = true" @click="editItem(item)">
                                      <v-icon color="orange">
                                          edit
                                      </v-icon>
                                  </v-btn>
                              </td>
                              <td>
                                <v-btn small text @click="deleteItem(item.id)">
                                    <v-icon color="incomplete">
                                        delete
                                    </v-icon>
                                </v-btn>
                            </td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
                </div>
            </v-col>
            
        </v-row>
        <v-row>
          <v-dialog
            v-model="dialog"
            max-width="400"
                          >
      <v-card>
       

            <h1>Edit item</h1>
            <div class="pa-5" id="info">
                <v-text-field  v-model="item.name"></v-text-field>
                <v-text-field  v-model="item.description"></v-text-field>
                <v-text-field  v-model="item.price"></v-text-field>
                <v-btn
                color="complete"
                @click="updateItem()"
                @click.stop="dialog = false"
                >
                  Edit Item
                </v-btn>
                <v-btn
                color="incomplete"
                @click.stop="dialog = false"
                >
                  Close
                </v-btn>
              </div>
            </v-card>
          </v-dialog>
        </v-row>
      
    </v-container>
    
</template>

<script>

import { dbMenuAdd } from '@/firebase';

    export default {
    data () {
      return {
        basket: [],
        dialog: false,
        item: [],
        activeEditItem: null,
        updatedSuccess: false,
        updatedText: 'Menu Item has been updation'
      }
    },
    beforeCreate() {
      this.$store.dispatch('setMenuItems')
    },
   
    methods: {
      editItem(item) {
        this.item = item
        this.activeEditItem = item.id
      },
      updateItem() {


       dbMenuAdd.doc(this.activeEditIte).update(this.item)
        .then(() => {
            this.updatedSuccess = true;
            console.log("Document successfully updated!");
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });




      },
      deleteItem(id) {
        dbMenuAdd.doc(id).delete().then(function() {
          console.log("document deleted");
        }).catch(function(error) {
          console.error("Error deleting: ", error);
        });
      },

      
    },
    computed: {
      menuItems() {
        return this.$store.getters.getMenuItems
      },
       
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
    /*    color: map-get($colorz, darkgray);*/
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