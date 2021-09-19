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
        to="/home"
        label="خانه"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Register",
});
</script>

<style>
.mosa {
  font-family: "Mosa";
}
.bk {
  background-image: url("https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png");
}
</style>
