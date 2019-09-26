<template>
  <div class="container box" style="max-width: 550px;">
    <section>
      <b-field label="Full Name">
        <b-input v-model="userData.full_name"></b-input>
      </b-field>

      <b-field label="Email">
        <b-input v-model="userData.username" type="email"></b-input>
      </b-field>

      <b-field label="Password">
        <b-input v-model="userData.password" type="password"></b-input>
      </b-field>
      <div class="field">
        <p class="has-text-centered">
          <button class="button is-info is-rounded has-text-weight-medium" @click="logIn()">Login</button>
        </p>
      </div>
      <div class="field">
        <p class="has-text-centered">
          <router-link :to="{name: 'Qr'}">
            <button
              class="button is-info is-rounded has-text-weight-medium"
              @click="saveUser()"
            >Create Account</button>
          </router-link>
        </p>
      </div>
    </section>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      userData: {
        full_name: "",
        username: "",
        password: ""
      }
    };
  },
  methods: {
    saveUser() {
      let user = {
        name: this.userData.full_name,
        username: this.userData.username,
        password: this.userData.password
      };
      axios
        .post(
          "http://shellhacks-qr-backend-shellhacks2019.apps.shellhacks.rhmi.io/api/v1/createuser/",
          user
        )
        .then(() => {
          this.$vs.notify({
            color: "primary",
            position: "top-center",
            time: 5000,
            title: "Check your Email"
          });
          this.$router.push({ name: "qr" });
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log("Error");
          // eslint-disable-next-line no-console
          console.log(error.response.data);
        });
    }
  }
};
</script>

<style>
</style>