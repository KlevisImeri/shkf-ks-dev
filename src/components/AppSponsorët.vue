<template>
    <div class="title_s">Sponsorët</div>
    <div class="text center">Sponsor i të gjitha aktiviteteve në lidhje me garat për vitin 2022/2023:</div>
    <img  class="masht_logo" :src="logo_src_masht" />
</template>
<script>
    export default{
        data(){
            return{
                logo_src_masht: require('../assets/MASHT_logo.jpg'), 
            }
        }
    }
</script>
<style>
    .masht_logo{
        height: 30vw;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
@media (min-width: 1400px){
    .masht_logo{
        height: 420px;
    }
}
</style>
