<template>
  <q-page class="page">
    <div class="text-center">
      <h4>Please select your dessert.</h4>
    </div>
    <div v-if="food" class="q-gutter-xl column items-center">
      <div class="card" v-for="dessert in food" :key="dessert.id">
        <q-card class="my-card">
          <q-img :src="dessert.url">
            <div class="absolute-bottom text-center">
              <div class="text-h6">{{ dessert.name }}</div>
              <div class="text-subtitle1">{{ dessert.price }} ,-</div>
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
              ><q-item-label class="text-h6">{{ mains.desc }}</q-item-label>
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
import db from '../../boot/firebase';

export default {
  name: 'Mains',
  data() {
    return {
      food: [],
    };
  },
  mounted() {
    db.collection('food')
      .where('type', '==', 'dessert')
      .get()
      .then((querySnapshot) => {
        console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
          let foodData = doc.data();
          foodData.id = doc.id;
          // doc.data() is never undefined for query doc snapshots
          console.log(foodData);
          this.food.push(foodData);
        });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  },
};
</script>

<style lang="scss" scoped>
.my-card {
  width: 350px;
}
.column {
  padding-bottom: 100px;
}
</style>
