<template>
    <div id="error">
        <h1>{{ error }}</h1>
        <p>{{ message }}</p>
        <p>Vamos encontrar um lugar melhor para você ir.</p>
        <custom-router class="btn" :to="{ name: routeName }">
            <custom-button>{{ btnMessage }}</custom-button>
        </custom-router>
    </div>
</template>
<script>
import CustomButton from '@/components/CustomButton.vue'
export default {
  name: 'ErrorView',
  props: ['error'],
  components: {
    CustomButton
  },
  data () {
    return {
      message: 'Esta página não existe.',
      btnMessage: 'Voltar para página inicial',
      routeName: 'home'
    }
  },
  updated () {
    if (this.error === 401) {
      this.message = 'Esta página não pode ser acessada.'
      this.btnMessage = 'Ir para login'
      this.routeName = 'login'
    }
  }

}
</script>
<style lang="scss">
#error {
    display: flex;
    flex-direction: column;
    padding: 20%;

    h1 {
        text-align: center;
    }

    p {
        padding: 0 20%;
    }

    .btn {
        margin-top: 77px;
    }
}

@media only screen and (max-width: 640px) {
    #error p {
        padding: 0;
    }
}
</style>
