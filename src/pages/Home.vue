<template>
  <q-page>
    <div class="text-center">
      <h5>This app helps you to find the best match for food and wine.</h5>
      <h6>
        Please chose what are you gonne eating or choose what would you like to
        drink !
      </h6>
    </div>

    <div class="column items-center q-gutter-sm q-pa-xl">
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
  </q-page>
</template>

<script>
export default {
  name: 'Home',
};
</script>
