<template>
  <b-col sm="6">
    <b-alert show>Comics Number {{comicnum}}</b-alert>
      <img v-if="comics===null" slot="aside" src="https://loading.io/spinners/balls/lg.circle-slack-loading-icon.gif" width="200" alt="placeholder" />
      <img v-else slot="aside" :src="comics.data.img" width="200" alt="placeholder" />
      <br>
      <router-link :to="{ name: 'fullComic', params: {id: comicnum } }">See more</router-link>
  </b-col>
</template>

<script>
  import service from '@/services/getService';
  export default {
    props: [
      'comicnum'
    ],
    data() {
      return {
        comics: null,
      }
    },
    methods:{
      goToDetails(id){
        console.log(id);
        this.$router.push({ path:`fullComic/${id}`});
      }
    },
    async created() {
      this.comics = await service.getComics(this.comicnum)
    },
  }
</script>

<style scoped>
  .link:hover{
    cursor: pointer;
  }
</style>
