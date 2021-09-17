<template>
  <q-page>
    <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
      <div class="col">
        <q-input
          class="nabi text-h6 new-whico"
          bottom-slots
          v-model="newWhicoContent"
          placeholder="چه خبر؟"
          counter
          maxlength="280"
          autogrow
        >
          <template v-slot:before>
            <q-avatar size="xl">
              <img
                src="https://dellcash.netlify.app/img/profile.41e50306.jpeg"
              />
            </q-avatar>
          </template>
        </q-input>
      </div>
      <div class="col col-shrink">
        <q-btn
          unelevated
          rounded
          color="primary"
          label="ویکو"
          class="bank q-mb-lg"
          :disable="!newWhicoContent"
        />
      </div>
    </div>
    <q-separator size="10px" color="grey-1" class="divider" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageHome",
  data() {
    return {
      newWhicoContent: "",
    };
  },
});
</script>

<style lang="sass">
/* fonts */
.font-e
  font-family: "Courier New", Courier, monospace

.ghasem
  font-family: "AGhasem"

.mosa
  font-family: "Mosa"

.parand
  font-family: "Parand"

.nabi
  font-family: "Nabi"

.farsi
  font-family: "Farsi"

.moshfeg
  font-family: "Moshfeg"

.parand
  font-family: "Parand"

.bank
  font-family: "Bank"

/* Q */
.new-whico
  textarea
    line-height: 1.4 !important

.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-3
</style>
