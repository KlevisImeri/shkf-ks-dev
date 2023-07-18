<template>
    <div class="wrapper_3">
        <div class="s_menu">
                <div :class="button.path == current_page ? 's_menu_button active' : 's_menu_button'" v-for="button in menu_buttons" :key="button.text" @click="scrollTo(button.text.replaceAll('','-'))">
                    <div>{{button.text}}</div>
                </div>
        </div>
        <div class="main">
            <div class="title_s">REVISTA</div>
            <div class="text flex" @click="linkto('https://drive.google.com/file/d/1wa-Skdi-cM1rtLKvPicVzVp5jZB0rgQ3/view?usp=share_link')">
                Journal of Physics and Applications
                <svg class="svgdownload" viewBox="0 0 24 24">
                    <path d="M4 4C4 3.44772 4.44772 3 5 3H14H14.5858C14.851 3 15.1054 3.10536 15.2929 3.29289L19.7071 7.70711C19.8946 7.89464 20 8.149 20 8.41421V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4Z" stroke="var(--linecolor-color)"/>
                    <path d="M20 8H15V3" stroke="var(--linecolor-color)"/>
                    <path d="M12 9L12 17" stroke="var(--linecolor-color)"/>
                    <path d="M9 14L12 17L15 14" stroke="var(--linecolor-color)"/>
                </svg>          
            </div>
        </div>
    </div>
</template>

<script>
// import axios from "axios";

export default {
    data() {
        return{ 
            menu_buttons: [{
                current_page: '',
                text: 'Revista',
            }]
        }
    },
    methods: {
        linkto(link){
            window.location.href = link;
        },
        scrollTo(refName) {
            var element = this.$refs[refName];
            console.log(element)
            var top = element.offsetTop;
            console.log(top);
            window.scrollTo(0, top);
        },
        path_scroll(i) {
            const button = this.menu_buttons[i];
            return button.text;
        },  
        // async downloadItem( url, label) {
        //     const response = await axios.get(url, { responseType: "blob" });
        //     const blob = new Blob([response.data], { type: "application/pdf" });
        //     const link = document.createElement("a");
        //     link.href = URL.createObjectURL(blob);
        //     link.download = label;
        //     link.click();
        //     URL.revokeObjectURL(link.href);
        // }
    }
}
</script>

<style>
.svgdownload{
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    margin-left: 2vw;
    width: 3vw;
    
}
.svgdownload:hover{
    stroke: var(--aplikimihover-color);
}
.flex{
    display: flex;
    justify-content: center;
    align-items: center;
}
.wrapper_3{
    margin-top: 1vw;
    display: grid;
    grid-template-columns: 0.2fr 1fr;
}
.main{
    margin: 2vw;
}
/* .a_menu_button{
    padding: 0.3vw;
    margin: 0.5vw;
    background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
    border-radius: 0.5vw;
    box-shadow: rgba(151, 65, 252, 0.2) 0 1vw 2.1vw -0.35vw;
    color: rgb(5, 6, 45);
    cursor: pointer;
    text-decoration: none;
}
.a_menu_button div {
    background-color: #d8fdfe;
    margin: 0.3vw;
    font-size: 1.8vw;
    font-weight: 400;
    line-height: 1.8vw;
    padding: 0.7vw;
    border-radius: 0.4vw;
    transition: 400ms;
}
.a_menu_button:hover div {
    background: none;
    color: white;
}    */
@media (min-width: 1400px) {
    .svgdownload{
        margin-left: 28px;
        width: 42px;
        stroke: black;
    }
}
</style>