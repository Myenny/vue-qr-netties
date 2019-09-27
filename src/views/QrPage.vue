<template>
  <div class="container">
    <section class="container is-centered">
      <img src="@/assets/logo.png" />
    </section>
    <section class="container is-centered">
      <div>{{QrCode}}</div>
      <!-- <img src="@/assets/testQr.png" @click="getQrCode()" /> -->
    </section>
  </div>
</template>


<script>
import api from "@/api/serviceRoutes.js";
export default {
  name: "QrPage",
  data() {
    return {
      QrCode: []
    };
  },
  mounted() {
    this.getQrCode();
  },
  methods: {
    getQrCode() {
      api
        .qrCode()

        .then(response => {
          console.log(response);
          this.QrCode = response.data;
          this.$vs.notify({
            color: "primary",
            position: "top-center",
            time: 5000,
            title: "Check your Email"
          });
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