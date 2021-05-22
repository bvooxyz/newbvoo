<template>
  <q-page class="flex flex-center">
    <div class="fit row wrap justify-start">
      <typer text="bvoo.xyz" size="8rem" delay="1000" speed="150" color="white" cursorDisappear="100" class="moz://a-5" />
      <div class="itemlist flex-col wrap">
        <router-link to="/Projects">
          <typer
            class="pog-button"
            text="Projects"
            size="3.5rem"
            speed="150"
            :delay="1000 + 150 * 9"
            cursorDisappear="5000"
            font="'JetBrains Mono', monospace"
          />
        </router-link>
        <router-link to="/ROMs">
          <typer
            class="pog-button"
            text="ROMs"
            size="3.5rem"
            speed="150"
            :delay="1000 + 150 * 9"
            cursorDisappear="5000"
            font="'JetBrains Mono', monospace"
          />
        </router-link>
        <router-link to="/awa">
          <typer
            class="pog-button"
            text="awa"
            size="3.5rem"
            speed="150"
            :delay="1000 + 150 * 9"
            cursorDisappear="5000"
            font="'JetBrains Mono', monospace"
          />
        </router-link>
      </div>
    </div>
  </q-page>
</template>

<script>
import Typer from '../components/Typer.vue';

export default {
  name: 'PageIndex',
  components: {
    Typer,
  },
};
</script>

<style>
.moz\:\/\/a-5 {
  @apply ml-5;
}
</style>
