<template>
  <q-page class="page">
    <div class="text-center">
      <h4>Please select your white wine.</h4>
    </div>
    <div v-if="wines" class="column items-center">
      <div class="card" v-for="white in wines" :key="white.id">
        <q-card class="my-card" flat bordered>
          <q-card-section horizontal>
            <q-card-section>
              {{ white.name }}
              <br />
              {{ white.grape }}
              <br />
              {{ white.desc }}
              <br />
              {{ white.region }}
              <br />
              <q-btn flat round color="primary" icon="wine_bar" />
              {{ white.priceSmall }},-
              <br />
              <q-btn flat round color="primary" icon="liquor" />
              {{ white.priceBig }},-
              <br />

              <q-btn-dropdown color="primary" label="Recomanded Food">
                <q-list>
                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>Photos</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </q-card-section>

            <q-img class="col-5" :src="white.imageUrl" />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import db from '../../boot/firebase';

export default {
  name: 'WhiteWines',
  data() {
    return {
      wines: [],
    };
  },
  mounted() {
    db.collection('wines')
      .where('type', '==', 'whiteWine')
      .get()
      .then((querySnapshot) => {
        console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
          let foodData = doc.data();
          foodData.id = doc.id;
          // doc.data() is never undefined for query doc snapshots
          console.log(foodData);
          this.wines.push(foodData);
        });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  },
};
</script>

<style lang="scss" scoped>
// .my-card {
//   width: 350px;
//   max-height: 50px;
// }
// .column {
//   padding-bottom: 100px;
// }

.card {
  width: 350px;
  height: 350px;
  margin-bottom: 75px;
}
</style>

// class="q-gutter-xl column items-center"
