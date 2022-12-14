<template>
    <div id="wrapper">
        <component :is="currentRoute.component" v-bind="currentRoute.params"></component>
    </div>
</template>
<script>
export default {
  name: 'WrapperView',
  created () {
    this.$store.dispatch('to', { name: 'home' })
  },
  computed: {
    currentRoute () {
      return this.$store.getters.currentRoute
    }
  }

}
</script>
<style lang="scss">
.aem-GridColumn {
    height: 100vh;
}
#wrapper {
    height: 100%;
    width: 100vw;
}
</style>
