<template>
    <div class="wrapper_3">
        <div class="s_menu">
            <router-link :class="button.path == current_page ? 's_menu_button active' : 's_menu_button'" v-for="button in menu_buttons" :key="button.text" :to="button.path" @click="change_path(button.path)">
                <div>{{button.text}}</div>               
            </router-link>
        </div>
        <div class="main">
            <router-view ></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return{
            current_page: "/Per-Shoqaten/Kryesia",
            menu_buttons: [{
                text: 'Kryesia e Shoqatës',
                path: '/Per-Shoqaten/Kryesia'
            },{
                text: 'Këshilli organizativ',  
                path: '/Per-Shoqaten/Këshilli'
            },{
                text: 'Statuti',  
                path: '/Per-Shoqaten/Statuti'
            },{
                text: 'Anëtarsimi',  
                path: '/Per-Shoqaten/Anëtarsimi'
            },{
                text: 'Historiku',
                path: '/Per-Shoqaten/Historiku'
            },{
                text: 'Raportet', 
                path: '/Per-Shoqaten/Raportet'
            },{
                text: 'Sponsorët',
                path: '/Per-Shoqaten/Sponsorët'
            },]
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
.wrapper_3{
    margin-top: 1vw;
    display: grid;
    grid-template-columns: 0.2fr 1fr;
}
.s_menu{
    position: sticky;
    display: flex;
    flex-direction: column;
    align-self: start;
    top: 1vw;
    padding: 1vw;
    border-right: 0.1vw solid var(--linecolor-color);
    outline: none;
}
.s_menu_button{
    margin: 0.5vw;
    padding: 0.8vw;
    
    border: 0.2vw solid var(--button-color);
    border-radius: 0.5vw;

    background-color: var(--button-color);
    color: var(--textbuttons);
    
    font-size: 1.8vw;
    font-weight: 400;
    line-height: 1.8vw;

    text-decoration: none;
    cursor: pointer;
    outline: none;

    transition: 400ms;
}
.s_menu_button:hover{
    background-color: var(--buttondiv-color);
    color: var(--button-color);
}
.active{
    background-color: var(--buttondiv-color);
    color: var(--button-color);
}
.main{
    margin: 2vw;
}
.image_kushjemi{
    height: 20vw;
    margin-left: 1vw;
    margin-right: 1vw;    
    border-radius: 0.5vw;
}
.kush_jemi_width{
    margin-right: 32vw;
}
.ku_kur_width{
    margin-left: 32vw;
}

@media (min-width: 1400px) {
    .wrapper_3{
        margin-top: 14px;
    }
    .s_menu{
        top: 14px;
        padding: 14px;
        border-right: 1px solid var(--linecolor-color);
    }
    .s_menu_button{
        margin: 7px;
        padding: 11px;
        
        border-width: 2.8px;
        border-radius: 7px; 

        font-size: 25.2px;
        line-height: 25.2px;
    }
    .main{
        margin: 2vw;
    }
    .image_kushjemi{
        height: 20vw;
        margin-left: 1vw;
        margin-right: 1vw;    
        border-radius: 0.5vw;
    }
    .kush_jemi_width{
        margin-right: 32vw;
    }
    .ku_kur_width{
        margin-left: 32vw;
    }
}
</style>