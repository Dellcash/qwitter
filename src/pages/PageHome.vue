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

    <q-list>
      <q-item class="q-py-md">
        <q-item-section avatar top>
          <q-avatar size="xl">
            <img src="https://dellcash.netlify.app/img/profile.41e50306.jpeg" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1">
            <strong>امید دلکش </strong>
            <span class="text-grey-7"> dellcash@ -- چند‌دقیقه پیش</span>
          </q-item-label>
          <q-item-label class="text-body1">
            نگران نباش که توو نتایج جستجو به پایین بری ، بر خلاف بسیاری از
            موتورهای جستجوی دیگه، بسته به اون‌چیزی که دنبالش هستی، ممکنه بهترین
            نتایج را در وسط لیست پیدا کنی.
            <br />
            <br />
            نتایج جستجو جامع نیستند. با تغییر تنظیمات پرس و جو می‌توانی نتایج
            بیشتری را بدست‌‌بیاری.
          </q-item-label>
          <div class="row justify-between q-mt-sm">
            <q-btn flat round color="grey" size="sm" icon="far fa-comment"
              ><span class="text-subtitle2 q-pl-sm">۱۷</span></q-btn
            >
            <q-btn flat round color="grey" size="sm" icon="fas fa-retweet">
              <span class="text-subtitle2 q-pl-sm">۸</span>
            </q-btn>
            <q-btn flat round color="grey" size="sm" icon="far fa-heart">
              <span class="text-subtitle2 q-pl-sm">۱۵۰</span>
            </q-btn>
            <q-btn flat round color="grey" size="sm" icon="fas fa-trash" />
            <q-btn flat round color="grey" size="sm" icon="fas fa-" />
          </div>
        </q-item-section>
      </q-item>
    </q-list>
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
