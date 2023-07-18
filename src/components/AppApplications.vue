<template>
    <form @submit.prevent="authenticate()" id="form" class="form" v-if="!islogedin">
        <div class="akti width20" >
            <center class="admin">Admin Login</center>
            <div class="akti_div">
                <div class="text text_left">Email</div>
                <input type="text" class="input" v-model="email" required>
            </div>
            <div class="akti_div">
                <div class="text text_left">Password</div>
                <input type="password" class="input" v-model="password" required>
            </div>
        </div>
        <div class="center">
            <button type="submit" class="submit_button">Login</button>       
        </div>
    </form>
    
    <div class="applications" v-if="islogedin">    
        <div v-for="(aplicants,index) in aplications" :key="aplicants.id" class ="akti application_div" :id="index">
            <div class="akti_div small_font">{{aplicants.id}}</div>
            <div class="akti_div small_font">{{aplicants.emri}}</div>
            <div class="akti_div small_font">{{aplicants.mbiemri}}</div>
            <div class="akti_div small_font">{{aplicants.dataLindjes}}</div>
            <div class="akti_div small_font">{{aplicants.vendiLindjes}}</div>
            <div class="akti_div small_font">{{aplicants.telefoni}}</div>
            <div class="akti_div small_font">{{aplicants.email}}</div>
            <div class="akti_div small_font">{{aplicants.profesioni}}</div>
            <div class="akti_div small_font">{{aplicants.vendiPunes}}</div>
            <div class="akti_div small_font">{{aplicants.vendbanimi}}</div>
            <div class="akti_div small_font delete" @click="delete_api(aplicants.id, index)">
                <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 482.428 482.429" xml:space="preserve">
                    <g>
                        <g>
                            <path d="M381.163,57.799h-75.094C302.323,25.316,274.686,0,241.214,0c-33.471,0-61.104,25.315-64.85,57.799h-75.098
                                c-30.39,0-55.111,24.728-55.111,55.117v2.828c0,23.223,14.46,43.1,34.83,51.199v260.369c0,30.39,24.724,55.117,55.112,55.117
                                h210.236c30.389,0,55.111-24.729,55.111-55.117V166.944c20.369-8.1,34.83-27.977,34.83-51.199v-2.828
                                C436.274,82.527,411.551,57.799,381.163,57.799z M241.214,26.139c19.037,0,34.927,13.645,38.443,31.66h-76.879
                                C206.293,39.783,222.184,26.139,241.214,26.139z M375.305,427.312c0,15.978-13,28.979-28.973,28.979H136.096
                                c-15.973,0-28.973-13.002-28.973-28.979V170.861h268.182V427.312z M410.135,115.744c0,15.978-13,28.979-28.973,28.979H101.266
                                c-15.973,0-28.973-13.001-28.973-28.979v-2.828c0-15.978,13-28.979,28.973-28.979h279.897c15.973,0,28.973,13.001,28.973,28.979
                                V115.744z"/>
                            <path d="M171.144,422.863c7.218,0,13.069-5.853,13.069-13.068V262.641c0-7.216-5.852-13.07-13.069-13.07
                                c-7.217,0-13.069,5.854-13.069,13.07v147.154C158.074,417.012,163.926,422.863,171.144,422.863z"/>
                            <path d="M241.214,422.863c7.218,0,13.07-5.853,13.07-13.068V262.641c0-7.216-5.854-13.07-13.07-13.07
                                c-7.217,0-13.069,5.854-13.069,13.07v147.154C228.145,417.012,233.996,422.863,241.214,422.863z"/>
                            <path d="M311.284,422.863c7.217,0,13.068-5.853,13.068-13.068V262.641c0-7.216-5.852-13.07-13.068-13.07
                                c-7.219,0-13.07,5.854-13.07,13.07v147.154C298.213,417.012,304.067,422.863,311.284,422.863z"/>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
import { aplicationsRef, getDocs } from '../main.js'
import { deleteAplicant } from '../main.js'
import { auth, signInWithEmailAndPassword } from '../main.js'

export default {
    data(){
        return{
            aplications: [],
            email: "",
            password:"",
            islogedin: false
        }
    },
    methods: {
        loweropacity(element){
            element.style.opacity=0;
        },
        delete_api(id, index){
            deleteAplicant(id);
            delete this.aplications[index]
            const element = document.getElementById(index);
            element.style.opacity=0;
            setTimeout(() => element.remove(index), 500)
        },
        authenticate(){
            signInWithEmailAndPassword(auth, this.email, this.password).then(() =>{
                this.islogedin = true;
            });
        }
    },
    mounted(){
        getDocs(aplicationsRef).then((snapshot)=>{
            snapshot.docs.forEach((doc) => {
                this.aplications.push({ ...doc.data(), id: doc.id});
            })
        }).catch(err =>{console.log(err.message)});
    }
}
</script>

<style >
    .width20{
        margin: auto;
        margin-bottom: 1vw;
        width: 40vw;
    }
    .admin{
        color: white;
        font-size: 3vw;
    }
    
    .applications{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
    .application_div{
        margin: 0.4vw;
        transition: 500ms;
    }
    .small_font{
        display: flex;
        justify-content: center;
        text-align: center;
        font-size: 1.3vw;
        padding: 0.1vw;
    }
    .delete{
        background-color: rgb(142, 244, 207);
    }
    .delete:hover{
        background-color: rgb(237, 112, 122);
    }
    @media (min-width: 1400px){
        .width20{
            margin: auto;
            margin-bottom: 1vw;
            width: 560px;
        }
        .admin{
        font-size: 42px;
        }
        .application_div{
            margin: 5.6px;
        }
        .small_font{
            font-size: 18px;
            padding: 2px;
        }
    }
</style>