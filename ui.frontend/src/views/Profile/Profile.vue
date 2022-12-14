<template>
    <div id="profile">
        <div class="content">
            <div class="user-data">
                <div class="user-data-img">
                    <img :src="user.img" :alt="user.name">
                </div>
                <div class="user-data-name">{{ user.name }}</div>
                <div class="user-data-bio">{{ user.bio }}</div>
            </div>
            <div class="repo-data">
                <repository-tabbable :data="repoData"/>
            </div>
            <div class="btn">
                <custom-button @click="() => $store.dispatch('go', -1)" blue>voltar</custom-button>
            </div>

        </div>

    </div>
</template>
<script>
import CustomButton from '@/components/CustomButton.vue'
import RepositoryTabbable from '@/components/RepositoryTabbable.vue'

export default {
  name: 'ProfileView',
  props: ['username'],
  components: {
    CustomButton,
    RepositoryTabbable
  },
  data () {
    return {
      user: {
        img: '',
        name: '',
        bio: ''
      },
      repoData: [
        {
          tab: {
            name: 'Repositórios',
            count: 0
          },
          content: []
        },
        {
          tab: {
            name: 'Favoritos',
            count: 0
          },
          content: []
        }
      ]
    }
  },
  created () {
    this.$services.github.getUserBy(this.username).then(data => {
      this.user = {
        img: data.avatar_url,
        bio: data.bio ? data.bio : data.type,
        name: data.name ? data.name : data.login
      }
    })

    this.$services.github.listRepositories(this.username).then(data => {
      this.repoData[0].content = data
      this.repoData[0].tab.count = data.length
    })

    this.$services.github.listStarRepositories(this.username).then(data => {
      this.repoData[1].content = data
      this.repoData[1].tab.count = data.length
    })
  }

}
</script>
<style lang="scss">
#profile {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .content {
        margin: 8%;
        padding: 4%;
        height: 80%;
        display: flex;
        justify-content: space-around;
        background: #242424;
        border-radius: 8px;

        .user-data {
            width: 20%;

            &-img img {
                width: 96px;
                border-radius: 50%;
            }

            &-name {
                font-weight: 400;
                font-size: 1em;
            }

            &-bio {
                font-weight: 400;
                font-size: 0.7em;
            }
        }

        .repo-data {
            width: calc(70% - 120px);
        }

        .btn {
            width: 120px;
        }
    }
}
</style>
