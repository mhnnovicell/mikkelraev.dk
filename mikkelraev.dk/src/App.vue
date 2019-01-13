<style src="../static/css/main.scss" lang="scss"></style>

<template>
  <v-app id="inspire" :dark="goDark" >
    <v-navigation-drawer v-model="drawer" absolute temporary app width="250">
      <v-list dense>
        <v-list-tile @click>
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Om</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click>
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Kompetencer</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click>
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Kompetencer</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click>
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Kompetencer</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click>
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Kompetencer</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <v-img
          :src="'../static/img/icons/android-chrome-72x72.png'"
          contain
          aspect-ratio="1"
          width="25"
          height="25"
        ></v-img>
      </v-toolbar-title>
       <v-layout row wrap justify-center>

            <v-switch
        :label="`Dark Theme`"
        v-model="goDark"
      ></v-switch>
       </v-layout>
    </v-toolbar>

    <v-content fluid fill-height>
      <v-container fluid fill-height
 grid-list-xl>
              <v-flex xs12 sm12 >
<h1 class="display-3 font-weight-bold text-lg-left">Work</h1>
 <v-layout row wrap justify-center>
    <v-flex
      xs12
      sm6
    >

        <v-dialog
      v-model="dialog"
full-width
    >
      <v-card class="first-card"       slot="activator"
 elevation="6" hover raised img="https://cdn.vuetifyjs.com/images/cards/desert.jpg">


        <v-card-title primary-title class="white--text">
          <div>
            <v-layout>
              <v-chip
      color="secondary"
      text-color="white"
    >
      Web
    </v-chip>
    </v-layout>
            <h3 class="headline">
              Kangaroo Valley Safari
            </h3>
          </div>
        </v-card-title>


      </v-card>
        </v-dialog>
          </v-flex>

   <v-flex
      xs12
      sm6
    >
         <v-card elevation="6" hover raised img="https://cdn.vuetifyjs.com/images/cards/desert.jpg">


        <v-card-title primary-title class="white--text">
          <div>
            <v-layout>
              <v-chip
      color="secondary"
      text-color="white"
    >
      Web
    </v-chip>
    </v-layout>
            <h3 class="headline">
              Kangaroo Valley Safari
            </h3>
          </div>
        </v-card-title>


      </v-card>
   </v-flex>


   <v-flex
      xs12
      sm6
    >
         <v-card elevation="6" hover raised img="https://cdn.vuetifyjs.com/images/cards/desert.jpg">


        <v-card-title primary-title class="white--text">
          <div>
            <v-layout>
              <v-chip
      color="secondary"
      text-color="white"
    >
      Primary
    </v-chip>
    </v-layout>
            <h3 class="headline">
              Kangaroo Valley Safari
            </h3>
          </div>
        </v-card-title>


      </v-card>
   </v-flex>


   <v-flex
      xs12
      sm6 md6
    >
         <v-card elevation="6" hover raised img="https://cdn.vuetifyjs.com/images/cards/desert.jpg">


        <v-card-title primary-title class="white--text">
          <div>
            <v-layout>
              <v-chip
      color="secondary"
      text-color="white"
    >
      Primary
    </v-chip>
    </v-layout>
            <h3 class="headline">
              Kangaroo Valley Safari
            </h3>
          </div>
        </v-card-title>


      </v-card>

        <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <v-btn
        slot="activator"
        color="primary"
        dark
      >
        Open Dialog
      </v-btn>
      <v-card class="primary white--text">
        <v-card-title class="headline">
          Use Google's location service?
        </v-card-title>
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="secondary"
            flat
            @click="dialog = false"
          >
            Disagree
          </v-btn>
          <v-btn
            color="secondary"
            flat
            @click="dialog = false"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
   </v-flex>
  </v-layout>
              </v-flex>


      </v-container>
      <v-container fluid fill-height>
<h1>hest</h1>
      </v-container>
      <v-card>
  <v-snackbar
      v-model="snackbar"
      :bottom="y === 'bottom'"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :right="x === 'right'"
      :timeout="timeout"
      :top="y === 'top'"
      :vertical="mode === 'vertical'"
    >
      {{ text }}
      <v-btn
        color="pink"
        flat
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
    </v-card>

  <div>
    <v-tabs
      v-model="active"
      slider-color="primary"
    >
      <v-tab
        v-for="n in 3"
        :key="n"
        ripple
      >
        Item {{ n }}
      </v-tab>
      <v-tab-item
        v-for="n in 3"
        :key="n"
      >
        <v-card flat>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>


  </div>
    </v-content>
    <v-footer app fixed></v-footer>

  </v-app>
</template>

<script>
import 'intersection-observer' // for cross-browser support
import Scroll from './components/Scrollama.vue'

export default {
    components: {
    Scroll
  },
  name: "app",
  data: () => ({
    drawer: null,
    goDark: false,
    dialog: false,
      active: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
web: "web",
design: "design",
other: "other"

  }),
  props: {
    source: String,
          snackbar: false,
        y: 'top',
        x: null,
        mode: '',
        timeout: 6000,


  }


};


</script>
