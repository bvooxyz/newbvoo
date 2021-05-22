<template>
  <q-page class="flex">
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap"
      rel="stylesheet"
    />
    <div class="fit column items-center">
      <div id="pagetitle" class="text-h2">ROMs</div>
    </div>
    <div class="itemlist fit column inline wrap items-center">
      <div class="text-h3 q-pb-lg">Fightcade 2</div>
      <div class="text-h4">
        <a href="https://newchallenger.net/fc2/fc2roms.zip">FC2 JSONs</a>
      </div>
      <div class="text-h4">
        <a
          href="https://drive.google.com/uc?export=download&id=1KNzlMznYli9wlM6qhYXEvD2uQHJ6PtDE"
          >JOJOBA
        </a>
      </div>
      <div class="text-h4">
        <a
          href="https://drive.google.com/uc?export=download&id=1DbnTTWDMFzGPEpa7v9UcU41PxQ3FwfQx"
          >JOJOBANR1
        </a>
      </div>
      <div class="text-h4">
        <a
          href="https://drive.google.com/uc?export=download&id=1IHD9QIlUPLmtGboCuu6j6hS8PeIBM8EX"
        >
          NOBGM HFTF
        </a>
      </div>
    </div>
    <div class="itemlist fit column inline wrap items-center">
      <div class="text-h3 q-pb-lg">Other</div>
      <div class="text-h4">
        <router-link to="/awa">Other</router-link>
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
