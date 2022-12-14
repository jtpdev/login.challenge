<template>
    <div id="tabbable">
        <div class="tabs">
            <div class="tab" v-for="(d, i) in data" :key="`${d.tab.name}_${i}`" @click="toTab(i)">
                {{ d.tab.name }}
                <div class="rep-count">
                    {{ d.tab.count }}
                </div>
                <hr v-if="i === currentTabIndex">
            </div>
        </div>
        <div class="tabbable-content">
            <div class="tabbable-content-render">
                <div class="repo" v-for="r in data[currentTabIndex].content" :key="r.name">
                    <div class="repo-wrapper">
                        <div class="repo-wrapper-name">
                            <div class="repo-wrapper-name-data">{{ r.name }}</div>
                            <div class="repo-wrapper-name-description">{{ r.description }}</div>
                        </div>
                        <div class="repo-wrapper-btn">
                            <custom-button @click="share(r.html_url)" square>Compartilhar</custom-button>
                        </div>
                    </div>
                    <hr>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CustomButton from './CustomButton.vue'
export default {
  components: {
    CustomButton
  },
  props: {
    data: {
      type: Array
    }
  },
  data () {
    return {
      currentTabIndex: 0
    }
  },
  methods: {
    toTab (i) {
      this.currentTabIndex = i
      console.log(this.currentTabIndex)
    },
    share (value) {
      navigator.clipboard.writeText(value)
      alert('Copiado para área de transferência')
    }
  }

}
</script>
<style lang="scss">
#tabbable {
    height: 100%;

    .tabs {
        display: flex;

        .tab {
            background: #2A2A2A;
            padding: 8px;
        }
    }

    .tabbable-content {
        height: calc(100% - 81px);
        background: #2A2A2A;
        overflow-x: hidden;
        overflow-y: auto;

        &-render {
            padding: 4px;

            .repo-wrapper {
                display: flex;
                padding: 8px;;

                &-name {
                    width: 80%;
                    margin-left: 4px;

                    &-data {
                        font-size: 1em;
                    }

                    &-description {
                        font-size: 0.7em;
                    }
                }

                &-btn {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

            }
        }
    }
}
</style>
