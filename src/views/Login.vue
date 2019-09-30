<template>
  <div class="section">
    <div class="container box" style="max-width: 550px;">
      <h1 class="title is-1 has-text-centered">Login</h1>
      <div v-show="toggleLogin">
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Email" v-model="userData.username" />

            <span class="icon is-small is-left">
              <i class="fas fa-envelope" aria-hidden="true"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check" aria-hidden="true"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input
              class="input"
              type="password"
              placeholder="Password"
              @keyup.enter="checkUser()"
              v-model="userData.password"
            />

            <span class="icon is-small is-left">
              <i class="fas fa-lock" aria-hidden="true"></i>
            </span>
          </p>
        </div>
        <div class="level">
          <div class="level-left">
            <a disabled @click="toggleLogin = !toggleLogin">Create Account</a>
          </div>

          <!-- <div class="level-right">
            <a disabled @click="showForgotPwd()">Forgot Password?</a>
          </div>-->
        </div>
        <!-- <ForgotPwd></ForgotPwd> -->
        <div class="field">
          <p class="has-text-centered">
            <button
              class="button is-info is-rounded has-text-weight-medium"
              @click="checkUser()"
            >Login</button>
          </p>
        </div>
      </div>
      <div v-show="!toggleLogin">
        <div class="field">
          <p class="control is-expanded has-icons-left">
            <input class="input" type="text" placeholder="Full Name" v-model="userData.full_name" />
            <span class="icon is-small is-left">
              <i class="fas fa-user" aria-hidden="true"></i>
            </span>
          </p>
        </div>

        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Email" v-model="userData.username" />

            <span class="icon is-small is-left">
              <i class="fas fa-envelope" aria-hidden="true"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check" aria-hidden="true"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Password" v-model="userData.password" />

            <span class="icon is-small is-left">
              <i class="fas fa-lock" aria-hidden="true"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Confirm Password" />

            <span class="icon is-small is-left">
              <i class="fas fa-lock" aria-hidden="true"></i>
            </span>
          </p>
        </div>
        <div class="level">
          <div class="level-item">
            <a disabled @click="toggleLogin = !toggleLogin">Back to Login</a>
          </div>
        </div>
        <div class="field">
          <p class="has-text-centered">
            <button
              class="button is-info is-rounded has-text-weight-medium"
              @click="submitCreateAccount()"
            >Create Account</button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import api from "@/api/serviceRoutes.js";

export default {
  name: "Login",
  data() {
    return {
      userInfo: {
        username: "",
        password: ""
      },
      userData: {
        full_name: "",
        username: "",
        password: ""
      },
      toggleLogin: true
    };
  },
  methods: {
    checkUser() {
      const dt = {
        username: this.userData.username,
        password: this.userData.password
      };
      api
        .postForToken(dt)
        .then(response => {
          localStorage.setItem("token", response.data.access);
          this.$store.commit("updateToken", response.data.access);
          const json_data = JSON.parse(
            atob(response.data.access.split(".")[1])
          );
          this.$store.commit("updateAdminUser", json_data.isAdminUser);
          this.$store.commit("updateAuthentication", json_data.isAuthenticated);
          this.$store.commit("updateUserName", json_data.username);
          this.$store.commit(
            "updateHasTempPassword",
            json_data.has_tempPassword
          );
          this.$router.push({ name: "QrPage" });
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log("Error");
          // eslint-disable-next-line no-console
          console.log(error.response.data);
          this.$vs.notify({
            color: "danger",
            position: "top-center",
            time: 4000,
            title: "Incorrect email or password"
          });
        });
    },
    submitCreateAccount() {
      let user = {
        name: this.userData.full_name,
        username: this.userData.username,
        password: this.userData.password
      };
      api
        .postNewAccount(user)
        .then(() => {
          this.$vs.notify({
            color: "primary",
            position: "top-center",
            time: 5000,
            title: "Check your Email"
          });
          this.$router.push({ name: "/" });
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