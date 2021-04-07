<template>
  <q-page>
    <div class="text-center">
      <h4>Please select your main course.</h4>
      <div v-if="food" class="absolute-center q-gutter-lg">
        <div v-for="mains in food" :key="mains.id">
          <q-btn
            split
            rounded
            color="primary"
            size="20px"
            :to="{ name: 'Food' }"
          >
            {{ mains.name }}
            <br />
            {{ mains.price }},-
          </q-btn>
        </div>
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
      .where('type', '==', 'main')
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
