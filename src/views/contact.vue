<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>contact</h1>
        <peta />
      </div>
      <div>
        <formcontact />
      </div>
    </div>
  </div>
</template>

<script>
import peta from "../components/peta.vue";
import formcontact from "../components/formcontact.vue";
export default {
  components: {
    peta,
    formcontact,
  },
};
</script>
