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
  </div>
</template>

<script>
export default {
  meta () {
    return {
      title: this.selectedStore + ' Store'
    }
  },
  data () {
    return {
      selectedStore: '',
      products: []
    }
  },
  mounted () {
    this.selectedStore = this.$route.params.name
    this.products = this.$store.state.shop.products
  }
}
</script>
