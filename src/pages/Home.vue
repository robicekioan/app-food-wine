<template>
  <q-page class="relative-position">
    <div class="text-center">
      <h5>This app helps you to find the best match of food and wine.</h5>
      <h6>
        Please chose what are you gonne eating or choose what would you like to
        drink !
      </h6>
    </div>
    <q-scroll-area class="absolute fullscreen">
      <div class="absolute-center q-gutter-lg">
        <q-btn
          rounded
          icon="restaurant"
          label="Food Menu"
          color="primary"
          size="20px"
          :to="{ name: 'Food' }"
        />
        <br />
        <q-btn
          rounded
          icon="wine_bar"
          label="Wine Menu"
          color="primary"
          size="20px"
          :to="{ name: 'Wines' }"
        />
      </div>
    </q-scroll-area>
  </q-page>
</template>

<script>
export default {
  name: 'Home',
};
</script>
