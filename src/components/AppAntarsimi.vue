<template>
    <div class="title_s">Anëtarsimi</div>
    <div class="text">Anëtarë të Shoqatës kosovare të fizikës, mund të jenë të gjithë fizikanët e
    Kosovës si dhe personat tjerë të cilët i pranojnë qëllimet dhe programin e
    Shoqatës.
    </div>
    <ul class="list">
        <li class="neni">Kuota vjetore e anëtarsimit për të punësuarit është: 10.00 euro.</li>
        <li class="neni">Kuota vjetore e anëtarësimit për studentë dhe nxënës është: 5.00 euro.</li>
        <li class="neni">Fëmijët e dëshmorëve dhe martirëve janë të liruar nga pagesa.</li>
        <li class="neni">Pensionistët dhe të papunët janë të liruar nga pagesa.</li>
    </ul>
    <div class="text box color"><i>Kuota e anëtarsimit paguhet në xhirollogarinë e Shoqatës kosovare të fizikës
    - 1501001018546977 në RAIFFEISEN BANK, Kosovë, Prishtinë.</i>
    </div>
    <div class="text">Anëtarsimi vlen deri më 31 dhjetor të vitit.
        <div class="sub_title center">Aplikim për anëtarsim në Shoqatën kosovare të fizikës</div>
    </div>
    <div class="text">
        Nëse dëshironi të bëheni anëtar i Shoqatës, ju lutemi plotësoni të gjitha fushat dhe
        dorëzoni aplikacionin online. Kopjen e fletëpagesës duhet ta dërgoni në përmes emailit:
        <span class="link">shoqatakosovareefizikes@gmail.com</span>. Pas aplikimit të suksesshëm, do të merrni një email konfirmimi.
    </div>
    <form @submit.prevent="emtyAplicant()" id="form" class="form">
        <div class="akti">
            <div class="akti_div">
                <div class="text text_left">Emri</div>
                <input type="text" class="input" v-model="aplicant.emri" required>
            </div>
            <div class="akti_div">
                <div class="text text_left">Mbiemri</div>
                <input
                type="text" class="input" v-model="aplicant.mbiemri" required>
            </div>
            <div class="akti_div">
                <div class="text text_left">Data e lindjes</div>
                <input type="date" class="input" v-model="aplicant.dataLindjes" required>
            </div>
            <div class="akti_div">
                <div class="text text_left">Vendi i lindjes</div>
                <input type="text" class="input" v-model="aplicant.vendiLindjes" required>
            </div>
            <div class="akti_div">
                <div class="text text_left">Telefoni</div>
                <input type="tel" class="input" v-model="aplicant.telefoni" required>
            </div>
            <div class="akti_div">
                <div class="text text_left">E-maili</div>
                <input type="email" class="input" v-model="aplicant.email" required>
            </div>
            <div class="akti_div">
                <div class="text text_left">Profesioni</div>
                <input type="text" class="input" v-model="aplicant.profesioni" required>
            </div>
            <div class="akti_div">
                <div class="text text_left">Vendi i punës</div>
                <input type="text" class="input" v-model="aplicant.vendiPunes" required>
            </div>
            <div class="akti_div">
                <div class="text text_left">Vendbanimi</div>
                <input type="text" class="input" v-model="aplicant.vendbanimi" required>
            </div>   
        </div>
        <div class="center">
            <button type="submit" class="submit_button">Dërgo</button> 
        </div>
    </form>
    <div class="center">
        <div class="submit_button green" id="green">
            Dërgesa u realizua me sukses
        </div>
    </div>
</template>

<script>
import { addAplicant } from '../main.js'

export default{
    data(){
        return{
            aplicant: {
                emri: "",
                mbiemri: "",
                dataLindjes: "",
                vendiLindjes: "",
                telefoni: "",
                email: "",
                profesioni: "",
                vendiPunes: "",
                vendbanimi: "",
                data: ""
            },
            submited: false
        }
    },
    methods: {
        emtyAplicant(){
            this.aplicant.data= Date();
            addAplicant(this.aplicant);
            this.aplicant = {
                emri: "",
                mbiemri: "",
                dataLindjes: "",
                vendiLindjes: "",
                telefoni: "",
                email: "",
                profesioni: "",
                vendiPunes: "",
                vendbanimi: ""
            }
            const element = document.getElementById("form");
            element.style.opacity=0;
            setTimeout(() => element.remove("form"), 500);
            this.submited = true;
            const green = document.getElementById("green");
            green.style.opacity=1;
        }
    }  
}
</script>


<style>
    .form{
        transition: 500ms;
    }
    .color{
        background-color: var(--tablediv-color);
        border-color: var(--tableborder-color);
        border-width: 0.2vw;
    }
    .input{
        display: flex;
        background-color: var(--tablediv-color);
        padding: 0.5vw;
        font-size: 1.6vw;
        font-weight: 400;
        line-height: 1.8vw;
        border-radius: 0.4vw;
        outline: none;
        border:  0.3vw solid var(--tableborder-color);
        transition: 0.5s;
        color: var(--linecolor-color);
    }
    .input:hover{
        border: 0.3vw solid var(--button-color);
    }
    .text_left{
        margin: 0;
    }
    .submit_button{
        width: 31vw;
        padding: 0.7vw;


        background-color: var(--tablediv-color); 
        color: var(--linecolor-color);
        
        border: 0.3vw solid var(--tableborder-color);
        border-radius: 0.4vw;

        font-size: 1.6vw;
        font-weight: 400;
        line-height: 1.8vw;
    }
    .submit_button:hover{
        color: white;
        transition: 200ms;
        background-color: #AFD2EC; 
    }
    .green{
        background-color: #34eb98;
        border: none;
        opacity: 0;
        transition: 1000ms;
    }  
    @media (min-width: 1400px){
        .color{
             border-width: 2px;
        }
        .input{
            padding: 7px;
            font-size: 22.4px;
            line-height: 25px;
            border-radius: 5.6px;
            border-width: 4.2px;
        }
        .input:hover{
            border-width: 4.2px;
        }
        .submit_button{
            width: 434px;
            padding: 9.8px;

            
            border-width: 4.2px;
            border-radius: 5.6px;

            font-size: 22.4px;
            line-height: 25px;
        }
 
    }
</style>