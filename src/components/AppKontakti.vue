<template>
    <div class="title_s top_margin">KONTAKTI</div>
    <div class="akti">
        <div class="akti_div" v-for="kontakt in kontakt_buttons" :key="kontakt.text1">
            <div>{{kontakt.text1}}</div>
            <div v-html="kontakt.text2"></div>
        </div>
    </div>
    <div class="text margin"> <br><br> Nëse nuk jeni anëtar i Shoqatës kosovare të fizikës, por dëshironi të bëheni, ju
        ftojmë të plotësoni deklaratën e anëtarësimit (<router-link to="/Per-Shoqaten/Antarsimi">formularin online</router-link>). <br> <br>
        Ftojmë organizatat publike dhe private të kontribuojnë në zhvillimin e
        aktiviteteve të Shoqatës përmes donacioneve. Në këtë rast ju ftojmë ta
        plotësoni formularin (Formularin online)    
    </div>
    <div class="map_div center">
        <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11737.197198643029!2d21.1511452!3d42.6550125!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ee896b552d7%3A0x31bf5e925cb705a3!2sThe%20Faculty%20of%20Mathematics%20and%20Natural%20Sciences!5e0!3m2!1sen!2shu!4v1664561913029!5m2!1sen!2shu" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>  
</template>
<script>
    export default {
        data () {
            return{
                kontakt_buttons: [{
                    text1: 'Adresa',
                    text2: 'Nëna Terezë pn (FSHMN, Departamenti i fizikës)'
                },{
                    text1: 'Emaili',  
                    text2: 'shoqatakosovareefizikes@gmail.com'
                },{
                    text1: 'Numri i regjistrimit',  
                    text2: '5100348-9'
                },{
                    text1: 'Numri fiskal',
                    text2: '601792022'
                },{
                    text1: 'Numri i xhirollogarisë', 
                    text2: '1501001018546977'
                },{
                    text1: 'Banka',
                    text2: 'Raiffeisen Bank, Kosovë'
                },{
                    text1: 'IBAN',
                    text2: 'XP95 1501001018546977'
                },{
                    text1: 'SWIFT',
                    text2: `RBKOXKPR <br>
                            RAIFFEISEN BANK KOSOVO <br>
                            10000 PRISTINA <br>
                            Rruga AGIM RAMADANI 15`
                },]
            }
        },
    }
</script>
<style>
    .top_margin{
        margin-top: 3vw;
    }
    .akti{
        margin-top: 3vw;
        margin-left: 10vw;
        margin-right: 10vw;
        margin-bottom: 2.2vw;
        padding: 0.1vw;
        background-color:var(--tableborder-color);
        border-radius: 0.5vw;
    }
    .akti_div{
        background-color:var(--tablediv-color);
        color: var(--linecolor-color);
        margin: 0.3vw;
        padding: 1vw;
        font-size: 2vw;
        font-weight: 400;
        line-height: 2.6vw;
        border-radius: 0.4vw;
        text-align: left;
        display: grid; 
        grid-template-columns: 0.5fr 1fr;
    }
    .margin{
        margin-left: 5vw;
        margin-right: 5vw;
    }
    .map{
        width: 87vw;
        height: 40vw;
        padding: 0.5vw;
        padding-bottom: 0vw;
        border: none;
        border-radius: 2vw;
    }
    .map_div{
        padding: 0;
        padding-bottom: 0.5vw;
        margin: 5vw;
        background-color: var(--tableborder-color);
        border-radius: 2vw;
    }
    @media (min-width: 1400px){
        .top_margin{
            margin-top: 42px;
        }
        .akti{
            margin-top: 42px;
            margin-left: 140px;
            margin-right: 140px;
            margin-bottom: 31px;
            padding: 2px;
            border-radius: 7px;
        }
        .akti_div{
            margin: 4px;
            padding: 14px;
            font-size:  28px;
            line-height: 36.4px;
            border-radius: 3px;
        }
        .margin{
            margin-left: 70px;
            margin-right: 70px;
        }
        .map{
            width: 1245px;
            height: 560px;
            padding: 7px;
            padding-bottom: 3px;
            border-radius: 28px;
        }
        .map_div{
            padding: 0px;
            padding-bottom: 4px;
            margin: 70px;
            border-radius: 28px;
        }
    }
</style>
