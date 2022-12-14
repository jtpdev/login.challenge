<template>
    <div id="search">
        <div class="main-container">
            <div class="wrapper">
                <div>
                    <h1>Busca</h1>
                    <p>Para encontrar o usuário desejado digite seu nome abaixo. </p>
                </div>
                <div class="queue">
                    <div class="input-wrapper">
                        <custom-input v-model="q" placeholder="Ex.: Thauany"></custom-input>
                    </div>
                    <div class="btn-wrapper">
                        <custom-button :disabled="!q" @click="search()">
                            <div class="btn-content">
                                Buscar
                                <img src="/content/dam/vue/search-icon.png" alt="">
                            </div>
                        </custom-button>
                    </div>
                </div>
                <div class="list">
                    <div class="list-wrapper">
                        <div class="user" v-for="u in userList" :key="u.name">
                            <img :src="u.icon" :alt="u.name">
                            <div class="user-data">
                                <div class="user-data-name">{{ u.name }}</div>
                                <div class="user-data-description">{{ u.type }}</div>
                            </div>
                            <div class="user-btn">
                                <custom-button @click="() => $store.dispatch('to', { name: 'profile', params: { username: u.name } })" blue square>ver mais</custom-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="image-container" >
            <img src="/content/dam/vue/compassuol-logo-white.png" alt="">
        </div>
    </div>
</template>
<script>
import CustomInput from '@components/CustomInput.vue'
import CustomButton from '@components/CustomButton.vue'

export default {
  name: 'SearchView',
  components: {
    CustomInput,
    CustomButton
  },
  data () {
    return {
      q: '',
      userList: []
    }
  },
  methods: {
    search () {
      this.$services.github.listUsersBy(this.q).then(data => {
        this.userList = data.items.map(d => ({ name: d.login, type: d.type, icon: d.avatar_url }))
      })
    }
  }

}
</script>
<style lang="scss">
#search {
    height: 100%;
    display: flex;

    .main-container {
        display: flex;
        width: 65%;
        text-align: justify;

        .wrapper {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin: 5% 15%;
            width: 100%;

            h1 {
                text-align: justify !important;
            }

            .queue {
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                .input-wrapper {
                    width: calc(100% - 150px);
                    display: flex;
                }

                .btn-wrapper {
                    min-width: 140px;
                }

                .btn-content {
                    min-width: 120px;
                    margin: 0 8px;
                    display: flex;
                    justify-content: space-around;

                    img {
                        width: 20px;
                        height: 20px;
                    }

                }
            }

            .list {
                height: 50%;
                overflow-x: hidden;
                overflow-y: auto;

                &-wrapper {
                    width: 94%;

                    .user {
                        width: 100%;
                        border: 1px solid #AAAAAA;
                        border-radius: 8px;
                        display: flex;
                        justify-content: space-between;
                        padding: 8px;
                        margin-top: 8px;

                        img {
                            width: 64px;
                            border-radius: 50%;
                        }

                        &-data {
                            width: 55%;
                            text-align: start;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;

                            &-name {
                                font-weight: 400;
                                font-size: 1em;
                            }

                            &-description {
                                font-weight: 400;
                                font-size: 0.7em;
                            }
                        }

                        &-btn {
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            max-width: 120px;
                            width: 20%;
                        }
                    }
                }

            }

        }

    }

    .image-container {
        background-image: url('/content/dam/vue/bg.png');
        background-size: cover;
        width: 35%;

        img {
            width: 50%;
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
