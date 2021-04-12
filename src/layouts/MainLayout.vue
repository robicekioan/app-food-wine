<template>
  <div>
    <q-layout view="hHh lpR fFf">
      <q-header
        elevated
        bordered
        class="bg-primary text-white"
        container
        style="height: 100px"
      >
        <q-toolbar class="absolute-center">
          <q-toolbar-title class="text-center text-h3 text-weight-bold">
            <span class="gt-xs cursor-pointer" :to="{ name: 'Home' }">
              Food and Wine Pairing
            </span>
            <q-icon class="lt-sm" name="liquor" />
          </q-toolbar-title>
        </q-toolbar>
      </q-header>
      <q-page-container>
        <q-input
          class="row no-wrap search"
          filled
          type="search"
          placeholder="Search for wine of food..."
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        <q-img src="../assets/w.jpeg" class="image absolute-top" />
      </q-page-container>
      <div>
        <router-view />
      </div>
      <q-footer bordered class="bg-primary-8 text-white" style="height: 75px">
        <q-toolbar>
          <div class="q-pa-md q-gutter-xl row justify-around full-width">
            <q-btn round color="grey" icon="home" :to="{ name: 'Home' }" />
            <q-btn
              round
              color="grey"
              icon="keyboard_arrow_left"
              @click="back"
            />
            <q-btn
              round
              color="grey"
              glossy
              icon="keyboard_arrow_right"
              @click="forward"
            />
            <q-btn
              round
              color="grey"
              icon="shopping_cart"
              :to="{ name: 'Cart' }"
            />
          </div>
        </q-toolbar>
      </q-footer>
    </q-layout>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  setup() {
    // const router = useRoute();
  },

  methods: {
    back() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(+1);
    },
  },
};
</script>

<style lang="scss">
.image {
  height: 100%;
  z-index: -1;
  opacity: 0.2;
  filter: grayscale(50%);
}
.search {
  position: fixed;
  z-index: 10;
  width: 100%;
}
</style>
