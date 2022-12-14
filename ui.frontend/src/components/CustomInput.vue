<template>
    <div class="custom-input" :class="{ 'error': error }">
        <input :type="type" :value="value" :placeholder="placeholder" @input="onInput">
        <img :src="icon" :alt="type" v-if="icon">
    </div>
</template>
<script>
export default {
  name: 'CustomInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String
    },
    placeholder: {
      type: String
    },
    icon: {
      type: String
    },
    error: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onInput (e) {
      this.$emit('input', e.target.value)
    }
  }

}
</script>
<style lang="scss">
.custom-input {
    background: #26292C;
    border: 1px solid #FFFFFF;
    border-radius: 50px;
    width: 100%;
    display: flex;

    &.error {
        border: 1px solid #E9B425;
    }

    input {
        background: transparent;
        border: 0;
        outline: transparent;
        color: #E0E0E0;
        padding: 20px;
        width: 100%;
    }

    img {
        padding: 16px;
        width: 20px;
        height: 20px;
    }
}
</style>
