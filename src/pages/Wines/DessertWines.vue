<template>
  <q-page class="page">
    <div class="text-center">
      <h4>Please select your red wine.</h4>
    </div>
    <div v-if="wines" class="column items-center">
      <div class="card" v-for="wine in wines" :key="wine.id">
        <q-card class="my-card" flat bordered>
          <q-card-section horizontal>
            <q-card-section>
              <span class="text-uppercase text-subtitle1 text-weight-medium"
                >{{ wine.name }}
              </span>
              <br />
              <span class="text-grey-7">&bull;{{ wine.grape }}</span>
              <br />
              <span> &bull;{{ wine.desc }}</span>
              <br />
              <span class="text-grey-7">&bull; {{ wine.region }}</span>
              <br />
              <q-btn flat round color="primary" icon="wine_bar" />
              {{ wine.priceSmall }},-
              <br />
              <q-btn flat round color="primary" icon="liquor" />
              {{ wine.priceBig }},-
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

            <q-img class="col-5 img" :src="wine.imageUrl" />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import db from '../../boot/firebase';

export default {
  name: 'DessertWines',
  data() {
    return {
      wines: [],
    };
  },
  mounted() {
    db.collection('wines')
      .where('type', '==', 'dessertWine')
      .get()
      .then((querySnapshot) => {
        console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
          let foodData = doc.data();
          foodData.id = doc.id;
          // doc.data() is never undefined for query doc snapshots
          console.log(foodData);
          this.wines.push(foodData); //
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
  width: 100px;
  height: 400px;
  object-fit: contain;
}
</style>

// class="q-gutter-xl column items-center"
