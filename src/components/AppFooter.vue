<template>
    <div class="gridfooter">
        <center>
            <a :href="facebook.href">
                <img :src="facebook.src" class="facebook">
            </a>
            <div v-html="moon_svg" v-if="isOn == 1" @click="themeChanger()" class="width0"></div>
            <div v-html="sun_svg"  v-if="isOn == 0" @click="themeChanger()" class="width0"></div>
            <h3 class="copyright-text">ShoqataKosovareeFizikes ©</h3>
        </center>
        <center class="text_s">
            <svg fill="#000000" viewBox="0 0 24 24" id="top-square-3" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" class="topicon" @click="goToTop()">
                <rect id="secondary" x="5.34" y="5.34" width="13.31" height="13.31" rx="1" transform="translate(-4.97 12) rotate(-45)"></rect>
                <polyline id="primary" points="14 11 12 9 10 11"></polyline>
                <path id="primary-2" data-name="primary" d="M12,10v5m.71,5.71,8-8a1,1,0,0,0,0-1.42l-8-8a1,1,0,0,0-1.42,0l-8,8a1,1,0,0,0,0,1.42l8,8A1,1,0,0,0,12.71,20.71Z" style="fill:none;"></path>
            </svg>
            Developed by: Klevis Imeri
        </center>      
    </div>  
</template>

<script>
export default {
    data(){
        return{
            facebook: {
                href: 'https://www.facebook.com/ShoqataKosovareeFizikes/',
                src: require('../assets/facebook-logo.png')
            },
            moon_svg: `<svg class="moon" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z" />
                    </svg>`,
            sun_svg: `<svg class="sun" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13" />
                    </svg>`,
            isOn: 0,
        }
    },
    methods: {
        goToTop(){
            document.body.scrollIntoView({behavior: 'smooth', block: 'start'});
        },
        themeChanger(){
            document.body.classList.toggle('dark');
            if(this.$parent.theme == 0){
                this.$parent.logo_src = require('../assets/logowhite.png');
                this.isOn = 1;
                this.$parent.theme++;
            }else{
                this.$parent.logo_src = require('../assets/logo.png');
                this.isOn = 0;
                this.$parent.theme--;
            }
        }
    }
}
</script>

<style>
.text_s{
    font-size: 1vw;
}
.width0{
    width: 4vw;
}
.topicon{
    width: 6vw;
    fill: var(--tablediv-color); 
    stroke: var(--button-color); 
    stroke-linecap: round; 
    stroke-linejoin: round; 
    stroke-width: 1;
}
.topicon:hover{
    fill: var(--button-color); 
    stroke: var(--buttondiv-color); 
}
.gridfooter{
    display: grid;
    grid-template-columns: 5fr 0.5fr;
    border-top: 0.1vw solid var(--linecolor-color);
    color: var(--linecolor-color);
    margin-top: 2vw;
    padding: 1vw;
}
.copyright-text{
    text-align: center; 
    margin-top: 0vw; 
    font-size: 1.3vw;
    color: var(--linecolor-color);
}
.center{
    display: flex;
    justify-content: center;
    align-items: center;
}
.facebook{
    width: 4vw;
}
.moon{
    display: flex;
    justify-content: center;
    width: 3vw;
    color: white;
}
.moon:hover{
    color:rgb(233, 200, 92);
}
.sun{
    display: flex;
    justify-content: center;
    width: 3vw;
}
.sun:hover{
    color: rgb(233, 200, 92);
}
@media (min-width: 1400px) {
.text_s{
    font-size: 14px;
}
.width0{
    width: 56px;
}
.topicon{
    width: 84px;
}
.gridfooter{
    border-top: 1px solid var(--linecolor-color);
    margin-top: 28px;
    padding: 14px;
}
.copyright-text{ 
    font-size: 18.2px;
}
.facebook{
    width: 56px;
}
.moon{
    width: 42px;
}
.sun{
    width: 42px;
}
}
</style>