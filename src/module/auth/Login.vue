<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md ">
    <q-page-container>
      <h4 class="q-mb-lg">Sign In</h4>
      <q-input dark v-model="user.email" color="white" label="Email Address" />
      <q-input
        dark
        v-model="user.password"
        color="white"
        label="Password"
        :type="isPwd ? 'password' : 'text'"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <q-btn
        class="q-mt-xl full-width"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Continue"
        no-caps
      />
    </q-page-container>
  </div>
</template>

<script>
export default {
  name: 'Login',
  meta: {
    title: 'Sign In | GoDITS'
  },
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      isPwd: true
    }
  }
}
</script>
