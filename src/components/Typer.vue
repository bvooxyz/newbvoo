<template>
  <div class="flex flex-row">
    <div :style="`color: ${color}; font-size: ${size}; font-family: ${font}`">
      {{ content }}
    </div>
    <div :style="`color: ${showCursor ? color : 'transparent'}; font-size: ${size}; font-family: ${font}`" class="blinky">|</div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'pog',
      required: true,
    },
    speed: {
      type: Number,
      default: 250,
      required: false,
    },
    delay: {
      type: Number,
      default: 0,
      required: false,
    },
    size: {
      type: String,
      default: '8em',
      required: false,
    },
    color: {
      type: String,
      default: 'inherit',
      required: false,
    },
    font: {
      type: String,
      default: '"Space Mono", monospace',
      required: false,
    },
    noCursor: {
      type: Boolean,
      default: false,
      required: false,
    },
    cursorDisappear: {
      type: Number,
      default: 0,
      required: false,
    },
  },
  data() {
    return {
      content: '',
      showCursor: false,
    };
  },
  mounted() {
    let letters = this.text.split('');

    letters = letters.reverse();

    setTimeout(() => {
      this.showCursor = !this.noCursor;

      const interval = setInterval(() => {
        if (letters.length > 0) {
          this.content += letters.pop();
        } else {
          clearInterval(interval);
          if (this.cursorDisappear > 0) {
            setTimeout(() => {
              this.showCursor = false;
            }, this.cursorDisappear);
          }
        }
      }, this.speed);
    }, this.delay);
  },
};
</script>

<style scoped>
@keyframes blink {
  50% {
    color: transparent;
  }
}

.blinky {
  margin-left: -0.2em;
  animation: blink 0.5s step-end infinite alternate;
  user-select: none;
}
</style>
