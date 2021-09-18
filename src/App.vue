<template>
  <router-view />
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style>
@font-face {
  font-family: "Vazir";
  src: url("./fonts/Vazir.eot");
  /* IE9 Compat Modes */
  src: url("./fonts/Vazir.eot?#iefix") format("embedded-opentype"),
    url("./fonts/Vazir.woff2") format("woff2"),
    url("./fonts/Vazir.woff") format("woff"),
    url("./fonts/Vazir.ttf") format("truetype");
  /* Safari, Android, iOS */
}
@font-face {
  font-family: "AGhasem";
  src: url("./fonts/AGhasem.ttf");
}
@font-face {
  font-family: "Parand";
  src: url("./fonts/MjParand.ttf");
}
@font-face {
  font-family: "Nabi";
  src: url("./fonts/MjNabighaLight.ttf");
}
@font-face {
  font-family: "Mosa";
  src: url("./fonts/MjMousa.ttf");
}
@font-face {
  font-family: "Farsi";
  src: url("./fonts/MjFarsiNormal.ttf");
}
@font-face {
  font-family: "Moshfeg";
  src: url("./fonts/MjMoshfegh.ttf");
}
@font-face {
  font-family: "Bank";
  src: url("./fonts/Far.Bank.ttf");
}
body {
  font-family: "Vazir" !important;
}
</style>
