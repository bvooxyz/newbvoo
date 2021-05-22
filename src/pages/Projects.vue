<template>
  <q-page class="flex flex-col">
    <div class="flex flex-col h-full big-boy">
      <div class="flex flex-row my-auto">
        <typer
          text="Projects"
          size="8rem"
          delay="1000"
          speed="150"
          color="white"
          cursorDisappear="5000"
          class="moz://a-5"
        />
      </div>
    </div>
    <div class="projSec text-h5 justify-center">Scroll</div>

    <div class="flex flex-col">
      <div class="text-3xl text-white">poggers</div>
      <div class="text-3xl text-white">poggers</div>
      <div class="text-3xl text-white">poggers</div>
      <div class="text-3xl text-white">poggers</div>
      <div class="text-3xl text-white">poggers</div>
      <div class="text-3xl text-white">poggers</div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import Typer from "../components/Typer.vue";

export default defineComponent({
  name: "PageIndex",
  components: {
    Typer,
  },
});
</script>

<style scoped>
.big-boy {
  height: calc(100vh - 50px - 32px) !important;
}
</style>
