<template>
    <div class="wrapper_4">
        <div class="s_menu">
            <router-link :class="button.path == current_page ? 's_menu_button active' : 's_menu_button'" v-for="button in menu_buttons" :key="button.text" :to="button.path" @click="change_path(button.path)">
                <div>{{button.text}}</div>
            </router-link>
        </div>
        <div class="main">
           <router-view @change_path="change_path('/Garat/Rregullorja')"></router-view>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return{ 
            current_page: "/Garat/Orari",
            menu_buttons: [{
                text: 'Orari i i garave',
                path: '/Garat/Orari'
            },{
                text: 'Garat shkollore',
                path: '/Garat/Shkollore'
            },{
                text: 'Garat komunale',
                path: '/Garat/Komunale'
            },{
                text: 'Garat shtetërore',
                path: '/Garat/Shteterore'
            },{
                text: 'Olimpiada e Kosovës',
                path: '/Garat/Olimpiada_e_Kosoves'
            },{
                text: 'Olimpiadat nderkombëtare',
                path: '/Garat/Olimpiadat_nderkombetare'
            },{
                text: 'Rregullorja e garave',
                path: '/Garat/Rregullorja'
            },{
                text: 'Planprogrami i garave',
                path: '/Garat/Planprogrami'
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
.wrapper_4{
    margin-top: 1vw;
    display: grid;
    grid-template-columns: 0.3fr 1fr;
}
/* .s_menu{
    position: sticky;
    align-self: start;
    top: 1vw;
    padding: 1vw;
    border-right: 0.1vw solid var(--linecolor-color);
}
.s_menu_button{
    padding-left: 0.4vw;
    margin: 0.5vw;
    border-radius: 0.3vw;
    border: 0.1vw solid var(--linecolor-color);
    font-size: 2vw;
    color: var(--linecolor-color);
}
.s_menu_button:hover{
    background-color: var(--hover-color);
}
.main{
    margin: 2vw;
} */
@media (min-width: 1400px){
    .wrapper_4{
        margin-top: 14px;
    }
}
</style>