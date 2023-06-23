<template>
  <v-container>
    <v-card class="mx-auto" style="max-width: 500px;">
      <v-toolbar color="deep-purple-accent-4" cards dark flat>
        <v-card-title class="text-h6 font-weight-regular">
          Log In
        </v-card-title>
      </v-toolbar>
      <v-form ref="form" v-model="isValid" class="pa-4 pt-6">
        <v-text-field
          v-model="email"
          :rules="[rules.email]"
          variant="filled"
          color="deep-purple"
          label="Email address"
          type="email"
        ></v-text-field>
        <v-text-field
          v-model="password"
          :rules="[rules.password, rules.length(6)]"
          variant="filled"
          color="deep-purple"
          counter="6"
          label="Password"
          style="min-height: 96px"
          type="password"
        ></v-text-field>
      </v-form>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn variant="text" @click="resetForm">Clear</v-btn>
        <v-spacer></v-spacer>
        <v-btn :loading="isLoading" color="deep-purple-accent-4" @click="login">Submit</v-btn>
      </v-card-actions>
      <v-dialog v-model="dialog" max-width="400" persistent></v-dialog>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
      isValid: false,
      isLoading: false,
      dialog: false,
      rules: {
        email: [
          (v) => !!v || 'Email is required',
          (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
        ],
        password: [
          (v) => !!v || 'Password is required',
        ],
        length: (length) => (v) =>
          (v && v.length >= length) || `Password must be at least ${length} characters`,
      },
    };
  },
  methods: {
    resetForm() {
      this.$refs.form.reset(); // Reset form
      this.email = ''; // Reset email field
      this.password = ''; // Reset password field
    },
    login() {
      let credential = {
        email: this.email,
        password: this.password
      };
      console.log("aaaa")
      axios.post("/login", credential).then((resp) => {
        localStorage.setItem("token", resp.data.access_token);
        localStorage.setItem("email", JSON.stringify(resp.data.user.email));
        this.$router.push("/transaction");
      }).catch((error) => {
        // Handle error
        console.error(error);
      });
    }
  },
};
</script>
