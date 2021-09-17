<template>
  <q-layout view="lHr lpR fFf">
    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <!-- another toolbar-title -->
        <!-- <q-toolbar-title class="bank flip-horizontal col-md-2 col-xs-6">
          <span class="text-h5 text-weight-bold gt-sm">کیو</span
          ><span class="shadow-24 bg-black text-white q-pl-sm gt-sm">تر</span>
          <q-icon
            class="flip-horizontal lt-md"
            name="fas fa-kiwi-bird"
            size="lg"
          />
        </q-toolbar-title> -->
        
        <q-toolbar-title class="bank flip-horizontal col-2 ">
          <span class="text-h5 text-weight-bold">کیو</span
          ><span class="shadow-24 bg-black text-white q-pl-sm">تر</span>
        </q-toolbar-title>
        <!-- <q-btn dense flat round icon="menu" @click="toggleRightDrawer" /> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
      :width="283"
    >
      <q-icon
        class="q-pa-md flip-horizontal"
        name="fas fa-kiwi-bird"
        size="lg"
      />

      <q-list>
        <q-item clickable v-ripple to="/">
          <q-item-section avatar>
            <q-icon name="home" size="md" />
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold nabi"
            >خانه</q-item-section
          >
        </q-item>

        <q-item clickable v-ripple to="/about">
          <q-item-section avatar>
            <q-icon name="help" size="md" />
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold nabi"
            >درباره</q-item-section
          >
        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <q-input
        dense
        class="q-ma-md nabi"
        placeholder="جستجوگر کیوتر"
        rounded
        outlined
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>

      <q-list padding separator>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-gray">تحصیلات</q-item-label>
            <q-item-label class="text-weight-bold"
              >اتفاق شگفت‌انگیزی درحال رخ دادنه!!</q-item-label
            >
            <q-item-label caption
              >مجلس آموزش زبان برنامه‌نویسی را در تمامی مقاطع تحصیلی اجباری کرد
              و افزود باید در خاورمیانه در تکنولوژی پیشرو باشیم.</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>دقایقی پیش</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-gray">تکنولوژی</q-item-label>
            <q-item-label class="text-weight-bold"
              >ایلان ماسک در شرکت <span class="mosa">ویکو </span>سرمایه‌گذاری
              میکند.</q-item-label
            >
            <q-item-label caption
              >یکی از شرکت‌های نوپا تکنولوژی در خاورمیانه که به‌تازگی توجه جهان
              را به خود جلب کرده است که توسط یک جوان برنامه‌نویس تاسیس شده است .
            </q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>نیم‌ساعت پیش</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-gray">سرشکنی</q-item-label>
            <q-item-label class="text-weight-bold"
              >جنگ بین گوگل و <span class="mosa">ویکو</span></q-item-label
            >
            <q-item-label caption
              >جنگ بین این دو شرکت زمانی آغاز شد که گوگل پیشنهاد خرید ویکو را به
              مدیرعاملش داد.</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>۳ساعت پیش</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
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

/* Q */
.q-toolbar__title:first-child {
  padding-left: 10px;
}
</style>
