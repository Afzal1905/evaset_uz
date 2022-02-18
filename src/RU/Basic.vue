<template>
    <div>
        <section class="biznes--section">
            <v-container class="biznes--container">
                <v-layout class="row" row xs12>
                    <v-flex md3></v-flex>
                    <v-flex md6 class="biznes--col">
                        <h1  data-aos="fade" v-scrollanimation>Управляйте бизнесом удаленно легко!</h1>
                        <p v-scrollanimation>Мелкие проблемы в бизнесе мешают вашему развитию?
                            Зарегистрируйтесь сейчас для бесплатной диагностики!</p>
                            <div class="buttons" v-scrollanimation>
                                <a href="#contact" v-scrollanimation><button v-scrollanimation class="btn btn--1">Регистрация</button></a>
                            </div>
                    </v-flex>
                    <v-flex md3></v-flex>
                </v-layout>
            </v-container>
        </section>
        <section class="facts" >
            <v-container class="facts-container">
                <v-layout class="programm-screen" row xs12>
                    <img v-scrollanimation src="../assets/Programscreen.png" alt="">
                </v-layout>
                <h1 style="text-align: center;" v-scrollanimation>Факты в цифрах</h1>
                <v-layout class="facts-row" row xs12 >
                    <v-flex md3 class="facts-1">
                        <h1  v-scrollanimation>{{time1}}</h1>
                        <p v-scrollanimation>летний опыт</p>
                    </v-flex>
                    <v-flex md3 class="facts-1">
                        <h1 v-scrollanimation>{{time2}}%</h1>
                        <p v-scrollanimation>Экономия времени до 50%</p>
                    </v-flex>
                    <v-flex md3 class="facts-1">
                        <h1 v-scrollanimation>{{time3}}%</h1>
                        <p v-scrollanimation>возможность увеличения чистой прибыли до 30%</p>
                    </v-flex>
                    <v-flex md3 class="facts-1">
                        <h1 v-scrollanimation>{{time4}}+</h1>
                        <p v-scrollanimation>Обслуживание более 150 компаний</p>
                    </v-flex>
                </v-layout>
            </v-container>
        </section>
    </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script>
export default {
    data() {
        return {
            time1: 0,
            time2: 0,
            time3: 0,
            time4: 0,
        }
    },
    updated() {
        interval = setInterval(() => {
            if(this.time3 == 30) {
                return;
            }
            this.time3 = this.time3+1;
        }, 3000)
    },
    beforeCreate() {
        interval = setInterval(() => {
            if(this.time4 == 150) {
                return;
            }
            this.time4 = this.time4+1;
        }, 50)
    },
    mounted() {
        interval = setInterval(() => {
            if(this.time1 == 8) {
                return;
            }
            this.time1 = this.time1+1;
        }, 800)
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);

        interval = setInterval(() => {
            if(this.time2 == 50) {
                return;
            }
            this.time2 = this.time2+1;
        }, 100)
    },
    destroyed(){
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods:{
        handleScroll(event){
            return value.event === this.setInterval
        }
    }
    
    

//   created() {
//     setInterval(() => {
//       this.counter++;
//       this.stop();
//     }, 100)
//   },
//     stop(){
//         if(this.counter == 10){
//             return this.counter ++;
//         }
//     },
}
</script>
<style scoped>
.before-enter{
    opacity: 0 !important;
    transform: translateY(100px) !important;
    transition: all 2s ease-out !important;
}
.enter{
    opacity: 1 !important;
    transform: translateY(0px) !important;
}
@media only screen and (max-width: 414px){
     .footer .footer__container{
    width: 100% !important;  
    /* display: none; */
  }
  .footer .footer__container .footer-flex1{
    width: 100% !important; 
  }
  .footer .footer__container .footer--flex{
    width: 50% !important; 
  }
  .footer{
    padding: 12px !important; 
  }
    .facts .facts-container .facts-row .facts-1{
        margin-bottom: -60px !important;
        width: 50% !important;
    }
    .facts .facts-container .facts-row .facts-1 h1{
        font-size: 36px !important;
        font-weight: 500 !important;
    }
    .facts .facts-container .facts-row .facts-1 p{
        font-size: 16px !important;
        font-weight: normal !important;
    }
    .facts{
        margin-top: -100px !important;
        padding: 28px !important;
        margin-bottom: 0 !important;
    }
    .biznes--section{
        margin-bottom: -1000px !important;
    }
    .biznes--section .biznes--container .row{
        margin-left: -100px !important;
        padding:20px !important;
        width: 210% !important;
        margin-bottom: 0 !important;
        margin-top: -120px !important;
    }
    .biznes--section .biznes--container .row .biznes--col h1{
        font-size: 36px !important;
        font-weight: 600!important;
    }
    .biznes--section .biznes--container .row .biznes--col p{
        font-size: 16px !important;
        font-weight: normal!important;
    }
}
@media only screen and (max-width: 375px){
    .facts .facts-container .facts-row .facts-1{
        margin-bottom: -60px !important;
        width: 50% !important;
    }
    .facts .facts-container .facts-row .facts-1 h1{
        font-size: 36px !important;
        font-weight: 500 !important;
    }
    .facts .facts-container .facts-row .facts-1 p{
        font-size: 16px !important;
        font-weight: normal !important;
    }
    .facts{
        margin-top: -140px;
        padding: 28px !important;
        margin-bottom: 0 !important;
    }
    .facts .facts-container{
        margin-top: 28px !important;
    }
    .biznes--section{
        padding-top: 60px !important;
        margin-bottom: 0 !important;
    }
    .biznes--section .container{
        padding: 20px !important;
        margin-bottom: 0 !important;
        margin-top: 30px !important;
    }
    .biznes--section .biznes--container .row{
        margin-left: -100px !important;
        padding: 0 !important;
        width: 220% !important;
        margin-top: -170px !important;
    }
    .biznes--section .biznes--container .row .biznes--col h1{
        font-size: 36px !important;
        font-weight: 600!important;
    }
    .biznes--section .biznes--container .row .biznes--col p{
        font-size: 16px !important;
        font-weight: normal!important;
    }
}
@media only screen and (max-width: 400px){
    .biznes--section .biznes--container .row .biznes--col .buttons .btn{
        position: absolute;
        margin: 0 auto !important;
        width: 50%;
    }
}
@media only screen and (max-width: 450px){
    .biznes--section{
        padding: 0 !important;
    }
    .biznes--section .biznes--container .row .biznes--col .buttons .btn{
        width: 60% !important;
    }
    .biznes--section .biznes--container .row .biznes--col .buttons {
        width: 100% !important;

    }
}
@media only screen and (max-width: 400px){
    .biznes--section .biznes--container .row .biznes--col .buttons .btn{
        margin-right: -10% !important;

    }
    .biznes--section .biznes--container .row .biznes--col .buttons {
        width: 100% !important;
        padding: 0 !important;
    }
}
@media only screen and (max-width: 500px){
    
    
}
@media only screen and (max-width: 600px){
    .biznes--section .biznes--container .row .biznes--col .buttons .btn{
        width: 50% !important;
        display: inline-block;
        margin-left: -10% !important;
    }
}
@media only screen and (max-width: 900px){
    .footer{
    padding: 50px;
  }
    .biznes--section{
        margin-bottom: 0 !important;
        padding: 100px !important;
    }
    .facts .facts-container  h1{
        font-size:40px !important;
        font-weight: 700 !important;
        margin-bottom: 40px;
    }
}
    .facts{
        background-color: #0B163F;
        margin-bottom: 100px;
        margin-top: 50px !important;
    }
    .facts .facts-container .programm-screen img{
        width: 100%;
        margin-top: -350px;
        position: relative;
        z-index: 0;
        margin-bottom: 100px;
    }
    .facts .facts-container .facts-row .facts-1 h1{
        color: white;
        margin-bottom: 10px;
        font-size: 96px;
    }
    .facts .facts-container .facts-row .facts-1 p{
        font-size: 24px;
        margin-bottom: 100px;
        color: white;
    }
    .facts .facts-container .facts-row{
        align-items: center;
        text-align: center;
    }
    .facts .facts-container  h1{
        color: white;
        font-size: 48px;
        font-weight: 800;
        margin-bottom: 40px;
    }
    .biznes--section .biznes--container .row .biznes--col h1{
        font-size: 48px;
        text-align: center;
        font-weight: 800;
        margin-bottom: 32px;
        animation: moveInRight 1.4s ease-in;
    }
    .biznes--section .biznes--container .row .biznes--col p{
        font-weight: 500;
        font-size: 20px;
        text-align: center;
        color: #5F5B58;
        margin-bottom: 30px;
        animation: moveOnleft 1.4s ease-in;
    }
    .biznes--section .biznes--container .row .biznes--col .buttons{
        justify-content: space-between;
        margin-bottom: 400px;
        align-items: center;
    }
    .biznes--section .biznes--container .row .biznes--col .buttons .btn{
        text-align: center;
        color: #0065FF;
        border: 1px solid #0065FF;
        border-radius: 12px;
        padding-top: 16px;
        padding-bottom: 16px;
        width: 40%;
        transform: translate(72%,0) !important;
    }
    .biznes--section .biznes--container .row .biznes--col .buttons .btn:hover{
        background-color: #0065FF;
        color: white;
        cursor: pointer;
        transition-duration: .5s;
    }
</style>