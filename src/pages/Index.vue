<template>
<div class="q-pa-sm">
    <q-input
      label="Search store here..."
      outlined
      v-model="text"
      class="q-my-md">
        <template v-slot:append>
            <q-icon v-if="text === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
        </template>
    </q-input>
    <!-- <q-input filled v-model="text" label="Filled" /> -->
    <div class="row " v-if="storeNames.length > 0">
        <div  class="col-xs-12 col-md-4 q-mb-sm q-pa-md-sm" v-for="(store,i) in storeNames" :key="i">
            <q-card class="my-card " flat bordered>
                <q-card-section horizontal>
                    <q-img  class="col" src="https://cdn.quasar.dev/img/mountains.jpg">
                        <div class="absolute-bottom text-subtitle2" >
                           <q-btn :to="'/stores/' + store" flat size="md" outline padding="none"  :label="store"   />
                        </div>
                    </q-img>
                    <q-card-actions vertical class="justify-around q-px-md">
                        <q-btn flat round color="red" icon="favorite" />
                        <q-btn flat round color="accent" icon="bookmark" />
                        <q-btn flat round color="primary" icon="share" />
                    </q-card-actions>
                </q-card-section>
            </q-card>
        </div>
    </div>
    <div v-else>
      <h6>No Results found for : {{ text }}</h6>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      stores: ['LoremZyn', 'JBuriks', 'Harv'],
      text: ''
    }
  },
  computed: {
    storeNames () {
      return this.stores.filter(store => store.toLowerCase().includes(this.text.toLowerCase()))
    }
  }

}
</script>
