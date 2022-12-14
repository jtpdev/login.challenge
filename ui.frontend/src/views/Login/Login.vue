<template>
    <div id="login">
        <div class="main-container">
            <div class="wrapper">
                <div>
                    <h1>Olá,</h1>
                    <p>Para continuar navegando de forma segura, efetue o login na rede.</p>
                </div>
                <div class="main-container-content">
                    <h4>Login</h4>
                    <div class="input-wrapper">
                        <custom-input v-model="credentials.username" type="text" placeholder="Usuário"
                            :error="loginError" icon="/content/dam/vue/user-icon.png" />
                    </div>
                    <div class="input-wrapper">
                        <custom-input v-model="credentials.password" type="password" placeholder="Senha"
                            :error="loginError"  icon="/content/dam/vue/lock-icon.png" />
                    </div>
                    <div class="login-error-message" v-if="loginError">
                        Ops, usuário ou senha inválidos. Tente novamente!
                    </div>
                </div>
                <div class="main-container-footer">
                    <custom-button @click="login">Continuar</custom-button>
                </div>
            </div>
        </div>
        <div class="image-container">
            <img src="/content/dam/vue/compassuol-logo-white.png" alt="">
        </div>
    </div>
</template>
<script>
import CustomInput from '@/components/CustomInput.vue'
import CustomButton from '@/components/CustomButton.vue'

export default {
  name: 'LoginView',
  components: {
    CustomInput,
    CustomButton
  },
  data () {
    return {
      credentials: {
        username: '',
        password: ''
      },
      loginError: false
    }
  },
  methods: {
    login () {
      this.$store.dispatch('authenticate', this.credentials).then(() => {
        if (this.$store.getters.isAuthenticated) {
          this.$store.dispatch('to', { name: 'home' })
        } else {
          this.loginError = true
        }
      })
    }
  }

}
</script>
<style lang="scss">
#login {
    height: 100%;
    width: 100vw;
    display: flex;

    .main-container {
        display: flex;
        width: 50%;

        .wrapper {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin: 15%;
            text-align: justify;

        }

        &-content {
            display: flex;
            flex-direction: column;

            .login-error-message {
                font-weight: 700;
                font-size: 16px;
                line-height: 24px;
                text-align: center;
                color: #E9B425;
                margin-bottom: 28px;
            }

            .input-wrapper {
                margin: 25px 0 10px;
            }
        }
    }

    .image-container {
        background-image: url('/content/dam/vue/bg.png');
        background-size: cover;
        width: 50%;

        img {
            width: 36%;
            max-width: 176px;
        }
    }

    @media only screen and (max-width: 640px) {
        .main-container {
            width: 100%;
        }

        .image-container {
            display: none;
        }
    }
}
</style>
