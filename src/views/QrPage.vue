<template>
  <div class="container">
    <section class="container is-centered">
      <img src="@/assets/logo.png" />
    </section>
    <section class="container is-centered">
      <img src="@/assets/testQr.png" />
    </section>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "QrPage",
  data() {
    return {};
  },
  methods: {
    getQrCode() {
      axios
        .post(
          "http://shellhacks-qr-backend-shellhacks2019.apps.shellhacks.rhmi.io/api/v1/getqrcode/"
        )
        .then(() => {
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