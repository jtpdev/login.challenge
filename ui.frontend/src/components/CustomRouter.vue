<template>
    <div @click="goTo()">
        <slot />
    </div>
</template>
<script>
export default {
  props: {
    to: {
      type: Object
    }
  },
  methods: {
    goTo () {
      this.$store.dispatch('to', this.to)
    }
  }
}
</script>
<style lang="">

</style>
