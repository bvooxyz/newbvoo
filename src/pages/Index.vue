<template>
  <q-page class="flex flex-center">
  <meta name="viewport" content="user-scalable = yes">

  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-159323134-2"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'UA-159323134-2');
  </script>
  <script data-ad-client="ca-pub-5879376732987660" async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  
  <!-- HTML Meta Tags -->
  <title>bvooxyz</title>
  <meta name="description" content="HFTF ROMs and JSONS">

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content="https://bvoo.xyz/">
  <meta property="og:type" content="website">
  <meta property="og:title" content="bvooxyz">
  <meta property="og:description" content="HFTF ROMs and JSONS">
  <meta property="og:image" content="icons/favicon-512x512.png">

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image">
  <meta property="twitter:domain" content="bvoo.xyz">
  <meta property="twitter:url" content="https://bvoo.xyz/">
  <meta name="twitter:title" content="bvooxyz">
  <meta name="twitter:description" content="HFTF ROMs and JSONS">
  <meta name="twitter:image" content="icons/favicon-512x512.png">
      
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
