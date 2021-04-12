<template>
  <q-page>
    <div class="text-center">
      <h4>Please select your wine.</h4>
    </div>

    <div class="absolute-center q-gutter-lg">
      <q-btn
        rounded
        label="Wine Wines"
        color="primary"
        size="20px"
        :to="{ name: 'WhiteWines' }"
      />
      <br />
      <q-btn
        rounded
        label="Red Wines"
        color="primary"
        :to="{ name: 'Mains' }"
        size="20px"
      />
      <br />

      <q-btn
        rounded
        label="Dessert Wines"
        color="primary"
        :to="{ name: 'Desserts' }"
        size="20px"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Wines',
};
</script>
