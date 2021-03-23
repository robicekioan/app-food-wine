<template>
  <q-page>
    <div class="text-center">
      <h4>Please select your starter.</h4>
    </div>

    <div class="absolute-center q-gutter-lg">
      <q-btn
        rounded
        label="Fish Soup"
        color="primary"
        size="20px"
        :to="{ name: 'Food' }"
      />
      <br />

      <q-btn
        rounded
        label="Dear Carpaccio"
        color="primary"
        size="20px"
        :to="{ name: 'Food' }"
      />
      <br />

      <q-btn
        rounded
        label="Daily Stapecial"
        color="primary"
        size="20px"
        :to="{ name: 'Food' }"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Food',
};
</script>
