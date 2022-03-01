import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";

import VueSupabase from "vue-supabase";

Vue.use(VueSupabase, {
  supabaseUrl: "https://idttipmknikdntnhrivw.supabase.co",
  supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkdHRpcG1rbmlrZG50bmhyaXZ3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0NjEwMzI2OSwiZXhwIjoxOTYxNjc5MjY5fQ.cpEMawI5Q-lHKbjF6hNYx7P9EwYN17rShySrCzqD024",
  supabaseOptions: {},
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
