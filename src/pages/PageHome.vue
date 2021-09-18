<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen">
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
            @click="addNewWhico"
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

      <q-list separator>
        <transition-group
          appear
          enter-active-class="animated fadeIn slow"
          leave-active-class="animated fadeOut slow"
        >
          <q-item class="q-py-md" v-for="whico in whicos" :key="whico.date">
            <q-item-section avatar top>
              <q-avatar size="xl">
                <img
                  src="https://dellcash.netlify.app/img/profile.41e50306.jpeg"
                />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-subtitle1">
                <strong>امید دلکش </strong>
                <span class="text-grey-7">dellcash@</span> <br class="lt-md" />
                <span class="text-grey-7 float-right mosa" dir="ltr">{{
                  format(new Date(), "yyyy/MM/dd")
                }}</span>
              </q-item-label>
              <q-item-label class="text-body1">
                {{ whico.content }}
              </q-item-label>
              <div class="row justify-between q-mt-sm">
                <q-btn flat round color="grey" size="sm" icon="far fa-comment"
                  ><span class="text-subtitle2 q-pl-sm">{{
                    whico.comments
                  }}</span></q-btn
                >
                <q-btn flat round color="grey" size="sm" icon="fas fa-retweet">
                  <span class="text-subtitle2 q-pl-sm">{{
                    whico.reWhicos
                  }}</span>
                </q-btn>
                <q-btn flat round color="grey" size="sm" icon="far fa-heart">
                  <span class="text-subtitle2 q-pl-sm">{{ whico.likes }}</span>
                </q-btn>
                <q-btn
                  flat
                  round
                  color="grey"
                  size="sm"
                  icon="fas fa-trash"
                  @click="deleteWhico(whico)"
                />
                <q-btn flat round color="grey" size="sm" icon="fas fa-" />
              </div>
            </q-item-section>
          </q-item>
        </transition-group>
      </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { format } from "date-fns";
import db from "src/boot/firebase.js";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  addDoc,
} from "firebase/firestore";

export default defineComponent({
  name: "PageHome",
  data() {
    return {
      newWhicoContent: "",
      whicos: [
        // {
        //   content:
        //     "«سرکلایو سینکلر» پدر کامپیوترهای خانگی «ZX Spectrum»، مخترع ماشین حساب جیبی، طراح خودروی الکتریکی C5 و تلویزیون جیبی TV80 پس از یک دوره طولانی مدت مبارزه با بیماری، در سن ۸۱ سالگی در لندن درگذشت.",
        //   date: 1631875861357,
        //   comments: "۱۵",
        //   reWhicos: "۷",
        //   likes: "۱۸۳",
        // },
        // {
        //   content:
        //     "ناسا در مجموع ۱۴۶ میلیون دلار به پنج شرکت از جمله اسپیس ایکس، بلو اوریجین و دینتیکس بودجه می‌دهد تا برای برنامه فضایی آرتمیس به توسعه نمونه‌های مفهومی ماه‌نشین بپردازند.",
        //   date: 1631876568611,
        //   comments: "۵",
        //   reWhicos: "۳",
        //   likes: "۸۳",
        // },
        // {
        //   content:
        //     " نگران نباش که توو نتایج جستجو به پایین بری ، بر خلاف بسیاری از موتورهای جستجوی دیگه، بسته به اون‌چیزی که دنبالش هستی، ممکنه بهترین نتایج را در وسط لیست پیدا کنی نتایج جستجو جامع نیستند. با تغییر تنظیمات پرس و جو می‌توانی نتایج بیشتری به‌دست بیاری.",
        //   date: 1631933370765,
        //   comments: "۲۵",
        //   reWhicos: "۱۰",
        //   likes: "۲۰۰",
        // },
      ],
      format,
    };
  },
  methods: {
    addNewWhico() {
      let newWhico = {
        content: this.newWhicoContent,
        date: Date.now(),
      };
      // this.whicos.unshift(newWhico);
      const docRef = addDoc(collection(db, "whico"), newWhico);
      console.log("Document written with ID: ", docRef.id);
      this.newWhicoContent = "";
    },
    deleteWhico(whico) {
      let deteToDelete = whico.date;
      let index = this.whicos.findIndex((whico) => whico.date === deteToDelete);
      this.whicos.splice(index, 1);
    },
  },
  mounted() {
    const q = query(collection(db, "whico"), orderBy("date"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        let whicoChange = change.doc.data();
        if (change.type === "added") {
          console.log("New whico: ", whicoChange);
          this.whicos.unshift(whicoChange);
        }
        if (change.type === "modified") {
          console.log("Modified whico: ", whicoChange);
        }
        if (change.type === "removed") {
          console.log("Removed whico: ", whicoChange);
        }
      });
    });
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
