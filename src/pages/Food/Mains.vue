<template>
  <q-page class="page">
    <div class="text-center">
      <h4>Please select your main course.</h4>
    </div>
    <div v-if="food" class="column items-center">
      <div class="card" v-for="mains in food" :key="mains.id">
        <q-card class="my-card">
          <div
            v-ripple
            @click="getId(mains.id)"
            class="cursor-pointer relative-position hoverable"
          >
            <q-img class="img" :src="mains.url">
              <div class="absolute-bottom text-center">
                <div class="text-h6">{{ mains.name }}</div>
                <div class="text-subtitle1">{{ mains.price }} ,-</div>
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
              ><q-item-label class="text-h6">{{ mains.desc }}</q-item-label>
            </q-btn-dropdown>
            <q-btn
              flat
              color="primary"
              icon="add_shopping_cart"
              :to="{ name: 'FoodDetails', params: { id: mains.id } }"
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
  methods: {
    getId(id) {
      this.$router.push('/food/' + id);
    },
  },

  mounted() {
    db.collection('food')
      .where('type', '==', 'main')
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
// :to="{ name: 'FoodDetails', params: { id: mains.id } }"
</style>
