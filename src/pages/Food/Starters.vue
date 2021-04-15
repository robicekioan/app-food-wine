<template>
  <q-page class="page">
    <div class="text-center">
      <h4>Please select your starter.</h4>
    </div>
    <div v-if="documents" class="column items-center">
      <div class="card" v-for="food in documents" :key="food.id">
        <q-card class="my-card">
          <q-img class="img" :src="food.url">
            <div class="absolute-bottom text-center">
              <div class="text-h6">{{ food.name }}</div>
              <div class="text-subtitle1">{{ food.price }} ,-</div>
            </div>
          </q-img>

          <q-card-actions class="row justify-around">
            <q-btn
              flat
              color="primary"
              icon="wine_bar"
              :to="{ name: 'Wines' }"
            ></q-btn>
            <q-btn-dropdown
              menu-self="top middle"
              dropdown-icon="info"
              flat
              color="primary"
              no-icon-animation="true"
              ><q-item-label class="text-h6">{{ food.desc }}</q-item-label>
            </q-btn-dropdown>
            <q-btn
              flat
              color="primary"
              icon="add_shopping_cart"
              :to="{ name: 'Cart' }"
            ></q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import getCollection from '../../composables/getCollection';

export default {
  name: 'Starters',

  setup() {
    const { documents } = getCollection('food', 'starter');

    return { documents };
  },
};
</script>

<style lang="scss" scoped>
.column {
  padding-bottom: 50px;
}

.my-card {
  width: 350px;
  height: 405px;
  margin-bottom: 50px;
}
.img {
  width: 350px;
  height: 350px;
  object-fit: contain;
}
</style>
