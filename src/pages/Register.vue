<template>
  <div
    class="
      fullscreen
      text-primary
      flex
      content-start
      bk
      scroll
      flex flex-center
      q-pa-lg
      content-center
    "
  >
    <div
      class="
        bg-white
        q-animate--scale
        q-badge--outline
        q-date__range-to
        q-pa-lg
        q-uploader--bordered
        q-transition--flip-left-enter-to
        q-pa-xl
      "
    >
      <div style="font-size: 30vh" class="flex flex-center">
        <i
          class="
            flip-horizontal
            q-checkbox__native
            text-white
            fas
            fa-kiwi-bird
            q-pr-md q-pl-md
          "
          style="font-size: 200px; opacity: 0.8"
        ></i>
      </div>

      <div class="text-h2 mosa text-black" style="opacity: 0.9">
        چه اتفاقی داره میووفته...؟
        <br />
      </div>
      <p class="text-h5 column mosa text-black" style="opacity: 0.9">
        ملحق شید به خودتون.
      </p>

      <q-btn
        class="q-mt-xl mosa"
        color="white"
        text-color="black"
        unelevated
        to="/about"
        label="درباره"
        no-caps
      />
    </div>
    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="signal_wifi_off" size="md" color="primary" text-color="white" />
          <span class="q-ml-sm ghasem"
            >لطفا با فیلتر شکن وارد شید!</span
          >
        </q-card-section>

        <q-card-actions align="left">
          <q-btn flat label="باشه" color="primary" v-close-popup class="ghasem" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Register",
  setup() {
    return {
      alert: ref(false),
      confirm: ref(true),
      prompt: ref(false),

      address: ref(""),
    };
  },
});
</script>

<style>
.mosa {
  font-family: "Mosa";
}
.bk {
  background-image: url("https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png");
  flex-direction: column;
}
.ghasem {
  font-family: "AGhasem";
}
</style>
