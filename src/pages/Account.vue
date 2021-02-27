<template>
    <q-list  padding>
      <q-item clickable>
         <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>Lorem Zynru</q-item-label>
          <q-item-label caption lines="1">lorem.zynru@gmail.com</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn flat color="primary"  label="Update"/>
        </q-item-section>
      </q-item>

      <q-separator spaced />
      <q-item-label header class="text-bold">Account Management</q-item-label>

      <q-item>
        <q-item-section avatar>
          <q-icon color="primary" name="phone" />
        </q-item-section>
        <q-item-section>0946 664 0372</q-item-section>
      </q-item>

      <q-separator spaced inset="item" />

      <q-item clickable>
        <q-item-section top avatar>
          <q-avatar color="primary" text-color="white" icon="home" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Address</q-item-label>
          <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
          <q-icon @click="test()" name="star" color="yellow" />
        </q-item-section>
      </q-item>

      <!-- <q-separator spaced inset="item" /> -->

    </q-list>
</template>
<script>
export default {
  methods: {
    test () {
      alert('test')
    }
  }
}
</script>
