<template>
  <q-page>
    <div class="text-center">
      <h4>Please select your dish.</h4>
    </div>

    <div class="absolute-center q-gutter-lg">
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
        :to="{ name: 'Wines' }"
        size="20px"
      />
      <br />

      <q-btn-dropdown
        rounded
        color="primary"
        icon="icecream"
        label="Desserts"
        size="20px"
        @click="onMainClick"
      >
        <q-list>
          <q-item clickable v-close-popup @click="onItemClick">
            <q-item-section avatar>
              <q-avatar icon="icecream" color="primary" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Chocolate Fondant</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="info" color="grey" />
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click="onItemClick">
            <q-item-section avatar>
              <q-avatar icon="icecream" color="primary" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Procini Eclair</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="info" color="grey" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
      <br />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Food',
};
</script>
