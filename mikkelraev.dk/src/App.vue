<style src="../static/css/main.scss" lang="scss"></style>

<template>
  <v-app id="inspire" :dark="goDark">
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
      <v-layout v-if="goDark === false" row wrap>
        <v-switch class="justify-end" label="Dark Theme" v-model="goDark"></v-switch>
      </v-layout>

      <v-layout v-else row wrap>
        <v-switch class="justify-end" label="Light Theme" v-model="goDark"></v-switch>
      </v-layout>
    </v-toolbar>

    <v-content fluid fill-height>
      <v-container fluid fill-height grid-list-xl>
        <v-flex xs12 sm12>
          <h1 class="display-3 font-weight-bold text-lg-left">Work</h1>

          <v-layout row wrap justify-center>
            <v-flex xs12 sm12>
              <v-carousel
                hide-delimiters
                interval="100000"
                height="100vh"
                cycle="false"
                v-touch="{
      left: () => swipe('Left'),
      right: () => swipe('Right'),
      up: () => swipe('Up'),
      down: () => swipe('Down')
    }"
              >
                <v-carousel-item
                  v-for="(item,i) in images"
                  :key="i"
                  :src="item.src"
                  lazy
                  :gradient="item.gradient"
                >
                  <v-layout justify-end align-content-end>
                    <v-flex xs12 sm6 md4>
                      <v-card
                        elevation="6"
                        class="custom-card"
                        hover="true"
                        raised="true"
                        light
                        v-scroll-reveal.reset="{ delay: 250 }"
                      >
                        <v-card-title primary-title class="black--text">
                          <div>
                            <h3 class="headline">Kangaroo Valley Safari</h3>

                            <v-layout>
                              <v-chip color="secondary" text-color="white">Test</v-chip>
                            </v-layout>
                            <span>content</span>
                          </div>
                        </v-card-title>

                        <v-card-actions>
                          <v-btn flat color="primary">Share</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-carousel-item>
              </v-carousel>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-container>
      <v-container fluid fill-height>
        <!-- This section will reveal itself each time it's scrolled into view -->
        <section v-scroll-reveal.reset="{ delay: 250 }">
          <h1>hest</h1>
        </section>

        <!-- Element-specific configuration options can be passed like this -->
        <section v-scroll-reveal.reset="{ delay: 250 }">
          <h1>Slightly late tada!</h1>
        </section>
      </v-container>
    </v-content>
    <v-footer app fixed></v-footer>
  </v-app>
</template>

<script>
import "intersection-observer"; // for cross-browser support
import Scroll from "./components/Scrollama.vue";

export default {
  components: {
    Scroll
  },
  name: "app",
  data: () => ({
    drawer: null,
    goDark: false,
    darkLabel: "Light Theme",
    lightLabel: "Dark Theme",
    dialog: false,
    active: null,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    technoligies: ["HTML", "CSS"],
    categories: [{ design: "Design" }, { web: "Web" }],
    images: [
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        gradient: "to bottom right, rgba(74, 12, 133,.8),rgba(43, 244, 161,.9)"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        gradient: "to bottom right, rgba(74, 12, 133,.8),rgba(43, 244, 161,.9)"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        gradient: "to bottom right, rgba(74, 12, 133,.8),rgba(43, 244, 161,.9)"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        gradient: "to bottom right, rgba(74, 12, 133,.8),rgba(43, 244, 161,.9)"
      }
    ]
  }),
  props: {
    source: String,
    snackbar: false,
    y: "top",
    x: null,
    mode: "",
    timeout: 6000
  }
};
</script>