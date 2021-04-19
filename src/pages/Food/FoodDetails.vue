<template>
  <div v-if="error" class="error">{{ error }}</div>
  <div v-if="document" class="column items-center">
    <q-card class="my-card">
      <div class="cursor-pointer relative-position hoverable">
        <q-img class="img" :src="document.url">
          <div class="absolute-bottom text-center">
            <div class="text-h6">{{ document.name }}</div>
            <div class="text-subtitle1">{{ document.price }} ,-</div>
          </div>
        </q-img>
      </div>

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
          ><q-item-label class="text-h6">{{ document.desc }}</q-item-label>
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
</template>

<script>
import getDocument from '../../composables/getDocument';

export default {
  name: 'FoodDetails',
  props: ['id'],
  setup(props) {
    const { error, document } = getDocument('food', props.id);

    return { error, document };
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
