<template>
  <q-page>
    <div class="text-center">
      <h4>Please select your dessert.</h4>
      <div v-if="food" class="absolute-center q-gutter-lg">
        <div v-for="desserts in food" :key="desserts.id">
          <q-btn rounded color="primary" size="20px" :to="{ name: 'Food' }">
            {{ desserts.name }}
            <br />
            {{ desserts.price }},-
          </q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import db from '../../boot/firebase';

export default {
  name: 'Starters',
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
