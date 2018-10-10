<template>
    <div>
        <h1 class="totalComics">Commics loaded: {{totalComics}}</h1>
        <b-container class="bv-example-row">
            <b-row>
                <index v-for="item in totalComics" :key="item" :comicnum="item" />
            </b-row>
        </b-container>
    </div>
</template>

<script>
import index from '@/components/index'
    export default {
        name: 'app',
        data() {
            return {
                totalComics: 10,
            }
        },
        methods: {
            infiniteScroll() {
                window.onscroll = () => {
                    let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
                    if (bottomOfWindow) {
                        // I don't like that this is global but time
                        this.totalComics += 10;
                    }
                };
            }
        },
        mounted() {
            this.infiniteScroll()
        },
        components: {
            index
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    
    .totalComics {
        position: fixed;
        z-index: 1;
        text-align: center;
        background-color: beige;
        width: 100%;
        top: 0;
    }
</style>
