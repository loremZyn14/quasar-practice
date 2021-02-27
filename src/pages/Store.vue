<template>
  <div class="q-pa-md">
    <h6>{{ selectedStore }}</h6>
    <q-separator spaced />
    <div class="row">
      <div class="col-xs-6 q-pa-xs" v-for="(product, i) in products" :key="i">
        <q-card class="my-card full-height ">
          <img
            :src="product.imageLink"
            height="150"
          />
          <q-card-section>
            <div class="text-subtitle2" v-text="product.name"></div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <q-card style="max-width: 300px" v-if="!ready">
      <q-item>
        <q-item-section avatar>
          <q-skeleton type="QAvatar" />
        </q-item-section>

        <q-item-section>
          <q-item-label>
            <q-skeleton type="text" />
          </q-item-label>
          <q-item-label caption>
            <q-skeleton type="text" />
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-skeleton height="200px" square />

      <q-card-actions align="right" class="q-gutter-md">
        <q-skeleton type="QBtn" />
        <q-skeleton type="QBtn" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedStore: '',
      products: [],
      ready: false
    }
  },
  mounted () {
    this.selectedStore = this.$route.params.name
    this.products = this.$store.state.shop.products
    this.ready = true
  },
  meta () {
    return {
      title: this.selectedStore + ' Store'
    }
  }
}
</script>
