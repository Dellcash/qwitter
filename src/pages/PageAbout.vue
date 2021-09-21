<template>
  <q-page class="q-pa-lg">
    <h4 class="parand text-weight-bold q-mt-none q-mb-md">
      درباره <span class="bank">ویکوو</span>
    </h4>
    <p class="parand text-body1">
      <span class="text-h5">ویکوو</span> یک
      <span class="text-h6">شبکه اجتماعی</span> مخصوص
      <span class="text-h6">برنامه‌نویسان</span> طراحی شده و امکان مشارکت بین
      آنهارا فراهم می‌کند.
    </p>
    <p class="parand text-body1">
      این شبکه مکان بسیار خوبی برای سرگرمی، ارتباط با سایر برنامه‌نویسان، با خبر شدن از
      تازه‌ترین خبرها درمورده تکنولوژی و خبرهای مورد علاقه و در نهایت منبعی عالی برای اطلاعات
      مختلف می‌باشد.
    </p>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageAbout",
});
</script>

<style scoped>
/* fonts */
.font-e {
  font-family: "Courier New", Courier, monospace;
}
.ghasem {
  font-family: "AGhasem";
}
.mosa {
  font-family: "Mosa";
}
.parand {
  font-family: "Parand";
}
.nabi {
  font-family: "Nabi";
}
.farsi {
  font-family: "Farsi";
}
.moshfeg {
  font-family: "Moshfeg";
}
.parand {
  font-family: "Parand";
}
.bank {
  font-family: "Bank";
}
</style>
