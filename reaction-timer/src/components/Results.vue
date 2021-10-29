<template>
  <p>Reation Time: {{score}} ms</p>
  <p class="rank">{{rank}}</p>
</template>

<script>
export default {
    props: ['score'],
    data(){
        return {
            rank: null
        }
    },
    mounted(){
        if(this.score < 250){
            this.rank = "عالی بود عالی"
        }
        else if(this.score < 400){
            this.rank = "هی بد نبود"
        }
        else {
            this.rank = "حلزون کی بودی"
        }
    }
}
</script>

<style>
.rank {
    font-size: 1.4em;
    color: #0faf78;
    font-weight: bold;
}
</style>