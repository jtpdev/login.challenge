<template>
    <div id="home">
        <div class="header">
            <div class="img">
                <img src="/content/dam/vue/compassuol-logo-black.png" alt="compass" id="logo">
            </div>
            <div class="time">
                <div class="hour">{{ time.hour }}</div>
                <div class="date">{{ time.date }}</div>
            </div>
            <div class="weather">
                <div class="location">{{ weather.location }}</div>
                <div class="weather-data">
                    <div class="icon">
                        <img :src="weather.icon" :alt="weather.condition">
                    </div>
                    <div class="temperature">{{ weather.temperature }}</div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="wrapper" v-for="(p, i) in phrases" :key="`phrase_${i}`">
                <div class="text">{{ p.text }}</div>
                <div class="translation">{{ p.translation }}</div>
            </div>
        </div>
        <div class="footer">
            <div class="explanation">Essa janela do navegador é usada para manter sua sessão de autenticação ativa.
                Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</div>
            <hr />
            <div class="refresh">
                <div class="footer-text">Application refresh in</div>
                <div class="time">
                    <div class="time-data">{{ timer }}</div>
                    <div class="description">seconds</div>
                </div>
            </div>
            <div class="btns">
                <custom-router :to="{ name: 'search' }" class="search">
                    <!-- <div class="search"> -->
                        Acessar Busca
                    <!-- </div> -->
                </custom-router>
                <div class="logout" @click="logout">Logout</div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
  name: 'HomeView',
  data () {
    return {
      timer: 0,
      weather: {
        icon: '',
        condition: '',
        location: '',
        temperature: ''
      },
      time: {
        hour: '',
        date: ''
      },
      phrases: []
    }
  },
  created () {
    this.updateTime()
    this.updateWeather()
    this.phrases = this.$services.phrases.getPhrases()
    setInterval(this.updateTime, process.env.VUE_APP_TIMER)
    setInterval(this.updateWeather, process.env.VUE_APP_WEATER_TIMER)
  },
  methods: {
    updateTime () {
      const d = new Date()
      this.time = {
        hour: this.$date.format(d, 'HH:mm'),
        date: this.$date.format(d, "cccc, d 'de' LLLL 'de' yyyy")
      }
      this.timer--
    },
    updateWeather () {
      this.$services.weather.getWeather().then(({ current, location }) => {
        this.weather = {
          icon: current.condition.icon,
          condition: current.condition.text,
          location: `${location.name} - ${this.$services.state.toUF(location.region)}`,
          temperature: `${current.temp_c}°`
        }
      }).catch(err => console.error(err))
      this.timer = 600
    },
    logout () {
      this.$store.dispatch('unauthenticate').then(() => this.$store.dispatch('to', { name: 'login' }))
    }
  }
}
</script>
<style lang="scss">
#home {
    background-color: #f6f6f6;
    color: #222222;
    height: 100%;
    width: 100vw;
    overflow: hidden;

    .header {
        display: flex;
        justify-content: space-between;
        padding: 8px 12px;

        .img {
            width: 15%;

            img#logo {
                max-width: 100%;
                object-fit: contain;
            }
        }

        .time {
            .hour {
                font-weight: 900;
                font-size: 5em;
                margin-top: -22px;
            }

            .date {
                font-weight: 400;
                font-size: 0.7em;
                margin-top: -28px;
            }
        }

        .weather {

            .location {
                font-weight: 400;
                font-size: 0.7em;
            }

            .weather-data {
                display: flex;
                flex-direction: row;

                .icon img {
                    max-width: 50px;
                    object-fit: contain;
                }

                .temperature {
                    font-weight: 700;
                    font-size: 3em;
                }
            }
        }
    }

    .content {
        padding: 8% 10% 12%;
        height: 60%;
        background-image: url('/content/dam/vue/uol-ball-transparent.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: bottom 0px left 0px;

        div:first-child {

            .text {
                font-size: 1.5em;
                line-height: 22px;
            }
        }

        .wrapper {
            text-align: end;

            .text {
                font-weight: 900;
                font-size: 2.5em;
                line-height: 46px;
                color: #C12D18;

            }

            .translation {
                font-weight: 400;
                font-size: 0.8em;
            }
        }
    }

    .footer {
        width: 100%;
        position: fixed;
        bottom: 0;
        background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
        color: #FFFFFF;
        display: flex;
        justify-content: space-between;

        .explanation {
            width: 35%;
            font-size: 0.5em;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: end;
            margin-left: 12px;
        }

        hr {
            border: none;
            border-left: 1px solid hsla(200, 10%, 50%, 100);
            height: 61px;
            width: 1px;
            margin: 8px 0;
        }

        .refresh {
            width: 20%;
            display: flex;
            flex-direction: row;

            .footer-text {
                font-size: 0.7em;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            .time {
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: 70%;

                .time-data {
                    font-weight: 700;
                    font-size: 2em;
                }

                .description {
                    font-size: 0.7em;
                }
            }
        }

        .btns {
            display: flex;
            flex-direction: row;
            font-size: 0.5em;
            width: 20%;

            div {
                display: flex;
                flex-direction: column;
                justify-content: center;
                text-align: center;
                width: 50%;
                cursor: pointer;

                &.search {
                    background: #FFFFFF;
                    color: #C13216;
                }
            }

        }
    }
}

@media only screen and (max-width: 640px) {
    .main-container {
        width: 100%;
    }

    #home {
        .header .img {
            width: 50%;
        }

        .content {
            width: 100%;
            background-size: 60%;

        }

        .footer {
            width: 100%;
            height: 77px;

            .btns {
                flex-direction: row-reverse;
                width: 100%;

                .search {

                    width: 73%;
                }

                .logout {
                    width: 27%;
                }
            }
        }

        .header .time,
        .content .wrapper,
        .footer .explanation,
        .footer hr,
        .footer .refresh {
            display: none;
        }
    }

}
</style>
