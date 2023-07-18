<template>
    <div class="wrapper">
        <router-link to="/"><img  class="logo" @click="current_page=''" :src="$parent.logo_src" /></router-link>
        <div class="wrapper_1">
            <router-link to="/"><div v-html="home_svg" @click="current_page=''"></div></router-link>
            <router-link v-for="button in menu_buttons" :key="button.text" :to="button.path" @click="change_path(button.path)" :class="button.path == current_page ? 'menu_button center active' : 'menu_button center'" ><div>{{button.text}}</div></router-link>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                current_page: "",
                home_svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home home_svg">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                <polyline points="9 22 9 12 15 12 15 22"/>
                            </svg>`,
                menu_buttons: [{
                    path: '/Per-Shoqaten',
                    text: 'Për Shoqatën'
                },{
                    path: '/Aktivitetet',
                    text: 'Aktivitetet'
                },{
                    path: '/Garat',
                    text: 'Garat'
                },{
                    path: '/Arkiva',
                    text: 'Arkiva'
                },{
                    path: '/Kontakti',
                    text: 'Kontakti'
                }]
            }
        },
        methods: {
            change_path(path){
            this.current_page = path;
            }
        }
    }
</script>

<style>
    .wrapper{
        margin-bottom: 1vw;
        display: flex;
        border-bottom: 0.1vw solid;
        border-color: var(--linecolor-color);
    }
    .logo{
        background-color: var(--background--color); 
        margin-top: 0;
        display: block;
        height: 9vw;
        padding-right: 0.3vw;
        padding-left: 0.3vw;
        border-radius: 0.4vw;
    }
    .wrapper_1{
        display: flex;
        justify-content: right;
        width: 80vw;
    }
    .home_svg{
        height: 3.4vw;
        margin-top: 4vw;
        margin-right: 1vw;
        padding: 0.3vw;
        float: right;
        color: var(--button-color);
    }
    .home_svg:hover{
        color: var(--buttondiv-color);
    }
    .menu_button{
        height: 3.6vw;
        margin-top: 3.8vw;
        margin-right: 1vw;
        padding-left: 0.7vw;
        padding-right: 0.7vw;

        border: 0.2vw solid var(--button-color);
        border-radius: 0.5vw;


        background-color: var(--button-color);
        color: var(--textbuttons);


        font-size: 1.8vw;
        font-weight: 400;
        line-height: 1.8vw;
        text-decoration: none;
        cursor: pointer;

        transition: 400ms;
    }
    .menu_button:hover{
        background-color: var(--buttondiv-color);
        color: var(--button-color);
    }
  
    @media (min-width: 1400px){
        .wrapper{
            border-bottom: 0.14px solid;
            border-color: var(--linecolor-color);
        }
        .logo{
            margin: 0;
            height: 126px;
        }
        .wrapper_1{
            width: 1120px;
        }
        .home_svg{
            height: 47.6px;
            margin-top: 54px;
            margin-right: 14px;
            padding: 4.2px;
        }
        .menu_button{
            height: 50px;
            margin-top: 53px;
            margin-right: 14px;
            padding-left: 9.8px;
            padding-right: 9.8px;

            border-width: 2.8px;
            border-radius: 7px;

            font-size: 25px;
            line-height: 25px;
        }
    }
</style>