<template>
  <div class="all">
    <AppHeader />
    <router-view></router-view>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
export default{
  components: {
    AppHeader,
    AppFooter
  },
  data(){
    return{
      logo_src: require('./assets/logo.png'),
      theme: 0,
    };
},
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
  body{
    padding: 1vw;
    font-family: 'Open Sans';
    margin: 0;
    background-color: white;
    --linecolor-color: black;
    --hover-color:#d8fdfe;
    --framepx: 1400px;
    --subtitle-color:#032362;
    --aplikimi-color:  rgb(163, 211, 240);
    --aplikimihover-color: rgb(0, 106, 177);
    --slider-color: rgb(235, 235, 235); 
    --button-color: #0270C0;
    --buttondiv-color: #D7FDFD;
    --tablediv-color: #F6FAFF;
    --tableborder-color: #AFD2EC;
    --title-color: #001E5E;
    --textblue-color: #0270C0;
    --textbuttons: white;
    }
  body.dark{
    font-family: 'Open Sans';
    margin: 0;
    background-color:  rgb(28, 28, 28);
    --linecolor-color: rgb(190, 186, 186);
    --hover-color:rgb(5, 6, 45);
    --background-color: rgb(28, 28, 28); 
    --subtitle-color: #6eb0b3;
    --aplikimi-color: #2a199b;
    --aplikimihover-color:rgb(134, 166, 224);
    --slider-color: rgb(50, 50, 50);
    --button-color: #034575;
    --buttondiv-color:#93adc3;
    --tablediv-color: #242627;
    --tableborder-color: #505e6a;
    --title-color: #88a9ee;
    --textbuttons: rgb(190, 186, 186);
    
    
  }
  .all{
    margin: 0vw;
    background-color: var(--background-color);
  }
  @media  (min-width: 1400px) {
    body{
      margin: auto;
      max-width: 1400px;
      background-color: white;
    }
    body.dark{
      margin: auto;
      max-width: 1400px;
      background-color:  rgb(28, 28, 28);
    }
    .all{
    margin: 0vw;
    background-color: var(--background-color);
    }
  }
</style>