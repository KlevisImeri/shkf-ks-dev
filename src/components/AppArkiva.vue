<template>
    <div class="wrapper_4">
        <div class="s_menu">
                <div class="s_menu_button" v-for="button in menu_buttons" :key="button.text" @click="scrollTo(button.text)"><div>{{button.text}}</div></div>
        </div>
        <div class="main">
            <div class="" v-for="(menu, index) in menu_buttons" :key="menu.text">
                <div class="title text_center" :ref="menu.text">{{menu.text}}</div>
                <div class="big_box">
                    <div class="box" v-for="(n,index_1) in menu.number" :key="n">
                    <div class="text text_2 text_center">{{menu.starting+(n-1)}}</div>
                    <div class="text text_2 text_center">{{menu.op1}}</div>
                    <div class="text text_2 text_center">{{menu.op2}}</div>
                    <a class="nounderline" :href="links[index][index_1]"><div class="text text_2 text_center">{{menu.op3}}</div></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import axios from "axios";

export default {
    data() {
        return{
            url: "IPHO2019.zip",
            links: [
                ["https://www.google.com/","https://www.google.com/","https://www.google.com/","https://www.google.com/","https://www.google.com/","https://www.google.com/","https://www.google.com/"],
                ["https://www.google.com/","https://www.google.com/","https://www.google.com/","https://www.google.com/","https://www.google.com/","https://www.google.com/","https://www.google.com/"],
                [],
                ["https://physprob.com/","https://physprob.com/","https://physprob.com/","https://ipho2022.com/exam-problems/","https://ipho2023.jp/en/"],
                ["https://eupho.ee/archive/","https://eupho.ee/archive/","https://eupho.ee/archive/","https://eupho.ee/archive/","https://eupho.ee/archive/","https://eupho.ee/eupho-2022/"]
            ],
            menu_buttons: [{
                text: 'Garat komunale',
                starting: 2017,
                number: 7,
                op1: 'Fituesit',
                op2: 'Fotogaleria',
                op3: 'Detyrat',
            },{
                text: 'Garat shtetërore',
                starting: 2017,
                number: 7,
                op1: 'Fituesit',
                op2: 'Fotogaleria',
                op3: 'Detyrat',
            },{
                text: 'Olimpiada e Kosovës',
                starting: 2023,
                number: 1,
                op1: 'Fituesit',
                op2: 'Fotogaleria',
                op3: 'Detyrat',
            },{
                text: 'Olimpiada IPhO',
                starting: 2019,
                number: 5,
                op1: 'Pjesëmarrësit',
                op2: 'Fotogaleria',
                op3: 'Detyrat',
            },{
                text: 'Olimpiada EuPhO',
                starting: 2017,
                number: 6,
                op1: 'Pjesëmarrësit',
                op2: 'Fotogaleria',
                op3: 'Detyrat'
            }],
        }
    },
    methods: {
        // async downloadItem({ url, label}){
        //     const response = await axios.get(url, { responseType: "blob" });
        //     const blob = new Blob([response.data], { type: "application/zip" });
        //     const link = document.createElement("a");
        //     link.href = URL.createObjectURL(blob);
        //     link.download = label;
        //     link.click();
        //     URL.revokeObjectURL(link.href);
        // },
        scrollTo(refName) {
            var element = this.$refs[refName];
            var top = element[0].offsetTop;
            window.scrollTo(0, top);
        },
        path_scroll(i) {
            const button = this.menu_buttons[i];
            return button.text;
        }
    }
}
</script>

<style>
    .nounderline{
        text-decoration: none;
    }
    .big_box{
        display: flex;
        justify-content: center;
        margin-top: 1vw;
        margin-bottom: 3vw;
    }
    .box{
        border: 0.1vw solid var(--linecolor-color); ;
        border-radius: 0.8vw;
        margin-left: 0.8vw;
        overflow: hidden;
    }
    .text_2{
        margin-left: 0.5vw;
        margin-right: 0.3vw;
        padding: 0.2vw;
        font-size: 1.3vw;
        border-bottom: 0.1vw solid var(--linecolor-color);
    }
    .text_2:hover{
        background-color: var(--hover-color);
    }
    .no_border{
        border: none;
    }
    .text_center{
        text-align: center;
    }
    @media (min-width: 1400px){
        .big_box{
            margin-top: 14px;
            margin-bottom: 42px;
        }
        .box{
            border: 1px solid var(--linecolor-color); ;
            border-radius: 11px;
            margin-left: 11px;
        }
        .text_2{
            margin-left: 7px;
            margin-right: 4px;
            padding: 3px;
            font-size: 20px;
            border-bottom: 1px solid var(--linecolor-color);
        }
    }
</style>