<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        /> -->

        <q-toolbar-title> <b>Go</b>DITS </q-toolbar-title>
        <q-btn dense flat round icon="shopping_cart" @click="right = !right" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    <q-drawer
      show-if-above
      v-model="right"
      side="right"
      bordered
      content-class="bg-grey-1"
    >
      <q-item-label header class="text-bold">Your Cart</q-item-label>
      <q-list bordered>
        <q-item clickable v-ripple>
          <q-item-section top avatar>
            <q-avatar rounded>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Nescafe 3 in 1 Pack </q-item-label>
            <q-item-label caption lines="2"
              >&#x20b1; 30.00 X 2</q-item-label
            >
          </q-item-section>

          <q-item-section side middle>
            <q-item-label caption>&#x20b1; 60.00</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer elevated>
      <q-tabs v-model="tab">
        <q-route-tab
          exact
          to="/sales"
          name="mails"
          icon="card_giftcard"
          label="Sales"
        >
          <q-badge color="red" floating>9+</q-badge>
        </q-route-tab>
        <q-route-tab exact to="/" name="alarms" icon="store" label="Stores">
          <q-badge color="red" floating>1</q-badge>
        </q-route-tab>
        <q-route-tab
          exact
          to="/accounts"
          name="movies"
          icon="account_circle"
          label="Account"
        />
      </q-tabs>
    </q-footer>
     <q-ajax-bar
      ref="bar"
      position="bottom"
      color="accent"
      size="10px"
      skip-hijack
    />
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
      tab: 'mails',
      right: false
    }
  },
  methods: {
    // we manually trigger it (this is not needed if we
    // don't skip Ajax calls hijacking)
    trigger () {
      const bar = this.$refs.bar

      bar.start()

      this.timer = setTimeout(() => {
        if (this.$refs.bar) {
          this.$refs.bar.stop()
        }
      }, Math.random() * 3000 + 1000)
    }
  },
  mounted () {
    this.trigger()
  }
}
</script>
