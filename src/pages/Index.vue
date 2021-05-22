<template>
  <q-page class="flex flex-center">
    <div class="fit row wrap justify-start">
      <div id="mainheader" class="text-h1 typing-main">bvoo.xyz</div>
      <div class="itemlist column wrap">
        <div class="text-h4 typing-list">
          <q-item clickable @click="$router.replace('/Projects')"
            >Projects</q-item
          >
        </div>
        <div class="text-h4 typing-list">
          <q-item clickable @click="$router.replace('/ROMs')">ROMs</q-item>
        </div>
        <div class="text-h4 typing-list">
          <q-item clickable @click="$router.replace('/awa')">awa</q-item>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
});
</script>
