<template>
  <q-page>
    <div class="text-center">
      <h4>Please select your starter.</h4>
    </div>
    <div v-if="food" class="q-gutter-xl absolute-center">
      <div v-for="starters in food" :key="starters.id">
        <!-- <q-btn rounded color="primary" size="20px" :to="{ name: 'Food' }">
            {{ starters.name }}
            <br />
            {{ starters.price }},-
          </q-btn> -->
        <q-card class="my-card">
          <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
            <div class="absolute-bottom">
              <div class="text-h6">{{ starters.name }}</div>
              <div class="text-subtitle2">by John Doe</div>
            </div>
          </q-img>

          <q-card-actions>
            <q-btn flat icon="wine_bar"></q-btn>
            <q-btn flat icon="info"></q-btn>
            <q-btn flat icon="add_shopping_cart"></q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import db from '../../boot/firebase';

export default {
  name: 'Desserts',
  data() {
    return {
      food: [],
    };
  },
  mounted() {
    db.collection('food')
      .where('type', '==', 'starter')
      .get()
      .then((querySnapshot) => {
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
