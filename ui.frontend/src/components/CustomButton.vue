<template>
    <div class="custom-button" @click="onClick" :class="{ disabled, square, blue }">
        <slot />
    </div>
</template>
<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    square: {
      type: Boolean,
      default: false
    },
    blue: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick () {
      if (!this.disabled) this.$emit('click')
    }
  }
}
</script>
<style lang="scss">
.custom-button {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
    box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
    border-radius: 50px;
    height: 64px;

    &:hover {
        cursor: pointer;
        background: linear-gradient(90deg, #FF2D04 0%, #9c2912 100%);
    }

    &.disabled {
        cursor: not-allowed;
        background: linear-gradient(90deg, #ff5938 0%, #963623 100%);
    }

    &.blue {
        text-transform: uppercase;
        background: linear-gradient(90deg, #0487FF 0%, #1665C1 100%);
    }

    &.square {
        border-radius: 8px;
        height: 32px;
        padding: 4px;
    }
}
</style>
