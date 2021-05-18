<template>
  <q-page class="flex flex-center">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap" rel="stylesheet">
    <div class="fit row wrap justify-start">
      <div id="mainheader" class="text-h1">
        bvoo.xyz
      </div>
      <div class="itemlist column wrap">
        <div class="text-h4">
        <q-item clickable @click="$router.replace('/Projects')">Projects</q-item>
        </div>
        <div class="text-h4">
        <q-item clickable @click="$router.replace('/ROMs')">ROMs</q-item>
        </div>
        <div class="text-h4">
        <q-item clickable @click="$router.replace('/awa')">awa</q-item>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex'
})
</script>
