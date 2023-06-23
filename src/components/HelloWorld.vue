<template>
  <v-container>
    <h1 class="text-center">Let's record your finances!</h1>
    <div class="btn">
      <v-btn variant="outlined" @click="logIn">
        Log in
      </v-btn>
      <v-btn variant="tonal" to="/signUp">
        Sign Up
      </v-btn>
    </div>
  </v-container>
</template>

<script>

export default {
  name: 'HelloWorld',
  methods: {
    logIn() {
      this.$router.push('/login')
    },
    signUp() {
      this.$router.push('/signup')
    },

  }
}
</script>
<style>
.btn {
  margin: 2rem;
  padding: 2rem;
}
</style>