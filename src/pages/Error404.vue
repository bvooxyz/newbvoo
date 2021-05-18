<template>
  <div class="fullscreen bg-primary text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        404
      </div>

      <div class="text-h2" style="opacity:.4">
        You shouldn't be here.
      </div>

        <q-btn 
            class="q-mt-xl"
            dense
            flat
            label="Back Home"
            icon="arrow_back"
            aria-label="Back"
            to="/"
            id="backBtn"
            @click="backButton"
        />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Error404'
})
</script>
