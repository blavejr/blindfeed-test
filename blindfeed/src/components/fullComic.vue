<template>
  <b-col sm="12">
    <b-alert show>{{data.data.title}}</b-alert>
      <img v-if="data===null" slot="aside" src="https://loading.io/spinners/balls/lg.circle-slack-loading-icon.gif" width="200" alt="placeholder" />
      <img v-else slot="aside" :src="data.data.img" width="600" alt="placeholder" />
    </b-col>
</template>

<script>
  import service from '@/services/getService';
  export default {
    data() {
      return {
        data: null
      }
    },
    async created(){
      this.data = await service.getComics(1)
    }
  }
</script>

<style scoped>
  
</style>
