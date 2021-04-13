<template>
  <q-page>
    <div class="text-center">
      <h4>Please select your dish.</h4>
    </div>

    <div class="column items-center q-gutter-sm q-pa-xl">
      <q-btn
        rounded
        icon="breakfast_dining"
        label="Starters"
        color="primary"
        size="20px"
        :to="{ name: 'Starters' }"
      />
      <br />
      <q-btn
        rounded
        icon="dinner_dining"
        label="Main Courses"
        color="primary"
        :to="{ name: 'Mains' }"
        size="20px"
      />
      <br />

      <q-btn
        rounded
        color="primary"
        icon="icecream"
        label="Desserts"
        :to="{ name: 'Desserts' }"
        size="20px"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Food',
};
</script>
