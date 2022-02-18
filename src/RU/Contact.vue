<template>
    <div>
        <section class="customers">
            <v-container class="container">
                <h1 class="head-text"  v-scrollanimation>Отзывы наших клиентов</h1>
                <v-layout row class="row" xs12>
                    <v-flex class="card" id="cards" md4>
                        <div class="cards"  v-scrollanimation>
                            <img src="../assets/image8.png" alt="">
                            <button>Шиферный завод</button>
                            <p>Большое спасибо команде Evaset, дизайн тоже отличный, программа быстрая и о производительности речи нет.
                                Особенно хорошо, когда сотрудники call-центра хорошо ориентируются на клиента. 
                                Удачи в делах!</p>
                            <div class="data-bottom">
                                <div class="rectangle"></div>
                                <span>Karimov Baxtiyor</span>
                                <span>01.01.2022</span>
                            </div>

                        </div>
                    </v-flex>
                    <v-flex class="card" id="cards-2" md4>
                        <div class="cards"  v-scrollanimation>
                            <img src="../assets/image8.png" alt="">
                            <button>Шиферный завод</button>
                            <p>Большое спасибо команде Evaset, дизайн тоже отличный, программа быстрая и о производительности речи нет.
                                Особенно хорошо, когда сотрудники call-центра хорошо ориентируются на клиента. 
                                Удачи в делах!</p>
                            <div class="data-bottom">
                                <div class="rectangle"></div>
                                <span>Karimov Baxtiyor</span>
                                <span>01.01.2022</span>
                            </div>

                        </div>
                    </v-flex>
                    <v-flex class="card" md4>
                        <div class="cards"  v-scrollanimation id="cards">
                            <img src="../assets/image8.png" alt="">
                            <button>Шиферный завод</button>
                            <p>Большое спасибо команде Evaset, дизайн тоже отличный, программа быстрая и о производительности речи нет.
                                Особенно хорошо, когда сотрудники call-центра хорошо ориентируются на клиента. 
                                Удачи в делах!</p>
                            <div class="data-bottom">
                                <div class="rectangle"></div>
                                <span>Karimov Baxtiyor</span>
                                <span>01.01.2022</span>
                            </div>

                        </div>
                    </v-flex>
                </v-layout>
            </v-container>
        </section>
        <section class="our-works" >
            <v-container class="container">
                <h1 class="head-text" v-scrollanimation>Как мы работаем?</h1>
                <v-layout row class="row" xs12>
                   <v-flex class="card" md3 >
                       <div class="cards" v-scrollanimation>
                           <img src="../assets/registered1.png" alt="">
                           <p>Зарегистрироваться</p>
                       </div>
                   </v-flex>
                   <v-flex class="card" md3>
                       <div class="cards" v-scrollanimation>
                           <img src="../assets/call-center-agent 1.png" alt="">
                           <p>Сотрудники быстро свяжутся с вами</p>
                       </div>
                   </v-flex>
                   <v-flex class="card" md3>
                       <div class="cards" v-scrollanimation>
                           <img src="../assets/technical-support 1.png" alt="">
                           <p>Будет показан порядок использования платформы и решение проблем</p>
                       </div>
                   </v-flex>
                   <v-flex class="card" md3>
                       <div class="cards" v-scrollanimation>
                           <img src="../assets/cooperate 1.png" alt="">
                           <p>Будет подписано соглашение о сотрудничестве</p>
                       </div>
                   </v-flex>
                </v-layout>
            </v-container>
        </section>
        <section class="button-registration">
            <v-container class="container">
                <a href="#contact"><button  v-scrollanimation class="btn">Зарегистрируйтесь сейчас!</button></a>
            </v-container>
        </section>
        <a  href="https://t.me/coder_91" style="link-style:none; text-decoration:none; color:white;">
            <section class="registration" v-scrollanimation>
            <v-container class="container">
                <v-layout class="row" xs12 row>
                    <v-flex class="col-md-6" md6>
                        <h1>Есть еще вопросы?</h1>
                        <p>Получите ответы на любые вопросы через Telegram</p>
                    </v-flex>
                    <v-flex class="col-md-2" md1><h1>&rarr;</h1></v-flex>
                    <v-flex class="col-md-4" md5>
                        <div class="icon-tg">
                            <img src="../assets/Vector11.png" alt="">
                        </div>
                        <div class="chat">
                            <img src="../assets/tap 1.png" alt="">
                            <p>Нажмите, чтобы перейти в чат</p>
                        </div>
                    </v-flex>
                </v-layout>
            </v-container>
        </section>
        </a>
    </div>
</template>
<style scoped>
.registration:hover{
    cursor: pointer;
}
.card-animate{
    opacity: 0 !important;
    transform: translateY(100px) !important;
    transition: all 2s cubic-bezier(.41, .01, .57, 1.61) !important;
}
.card{
    opacity: 1 !important;
    transform: translateX(0px) !important;
}
.before-enter{
    opacity: 0 !important;
    transform: translateY(100px) !important;
    transition: all 2s ease-out !important;
}
.enter{
    opacity: 1 !important;
    transform: translateY(0px) !important;
}
.customers{
    margin-top: 100px;
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
    .our-works .container .head-text{
        font-size: 32px !important;
        font-weight: 600 !important;
    }
    .our-works .container {
        margin: 0 !important;
        padding: 0 !important;
    }
    .our-works  {
        margin: 10px !important;
        padding: 10px  !important;
    }
    .our-works .container .row .card{
        padding: 0 !important;
        margin-bottom: 50px  !important;

    }
    .our-works .container .row .card .cards{
        width: 100% !important;
        box-shadow: none;
    }
}
@media only screen and (max-width: 375px){
    .our-works .container .head-text{
        font-size: 32px !important;
        font-weight: 600 !important;
    }
    .our-works .container {
        margin: 0 !important;
        padding: 0 !important;
    }
    .our-works  {
        margin: 10px !important;
        padding: 10px  !important;
    }
    .our-works .container .row .card{
        padding: 0 !important;
        margin-bottom: 50px  !important;

    }
    .our-works .container .row .card .cards{
        width: 100% !important;
        box-shadow: none;
    }
}
@media only screen and (max-width: 450px){
    .customers{
        margin: 0 !important;
        padding: 0 !important;
    }
    .customers .container .row #cards-2{
        width: 100% !important;
    }
    .customers .container{
        margin: 0 !important;
        padding: 0 !important;
    }
    .customers .container .row #cards{
        display: none !important;
    }
    .customers .container .row .card{
        width: 100% !important;
        position: relative;
        display: inline !important;
        padding: 0 !important;
    }
    .customers .container .row .card .cards{
        width: 100% !important;
    }
    .customers .container .head-text{
        font-size: 36px !important;
        font-weight: 500 !important;
    }
}
@media only screen and (max-width: 600px){
    .registration .container .row .col-md-4 .chat p{
        margin-top: 16px;
    }
    .registration .container .row .col-md-6 p{
        font-size: 10px!important;
        font-weight: 300 !important;
    }
    .registration .container .row .col-md-6 h1{
        font-size: 20px !important;
        font-weight: 400 !important;
    }
    .registration .container .row .col-md-4{
        width: 100% !important;
    }
    .registration .container .row .col-md-2{
        width: 10%;
    }
    .customers {
        padding: 0 !important;
        margin-bottom: 0 !important;
    }
    .customers .container .card .cards .rectangle{
        display: none;
    }
    .customers .container .row {
        width: 96% !important;
        margin: 0 auto !important;
    }
    .customers .container .row .card {
        padding: 16px;
    }
    .customers .container .row .card .cards{
        width: 100%;
    }
    .button-registration {
        margin-bottom: 30px !important;
        margin-top: -160px !important;
    }
    .button-registration .container .btn{
        width: 50% !important;
    }
    .customers .container .row .card{
        padding: 10px;
        width: 50% !important;
    }
    .our-works .container .row .card{
        width: 50% !important;
        margin-bottom: 48px;
    }
}
@media only screen and (max-width: 700px){
    .registration .container .row .col-md-4 .chat p{
        margin-top: 16px;
    }
    .registration .container .row .col-md-6 p{
        font-size: 10px!important;
        font-weight: 300 !important;
    }
    .registration .container .row .col-md-6 h1{
        font-size: 20px !important;
        font-weight: 400 !important;
    }
    .registration .container .row .col-md-4{
        width: 100% !important;
    }
    .registration .container .row .col-md-2{
        width: 10%;
    }
    .customers {
        padding: 0 !important;
        margin-bottom: 0 !important;
    }
    .customers .container .card .cards .rectangle{
        display: none;
    }
    .customers .container .row {
        width: 96% !important;
        margin: 0 auto !important;
    }
    .customers .container .row .card {
        padding: 16px;
    }
    .customers .container .row .card .cards{
        width: 100%;
    }
    .button-registration {
        margin-bottom: 30px !important;
        margin-top: -160px !important;
    }
    .button-registration .container .btn{
        width: 50% !important;
    }
    .customers .container .row .card{
        padding: 10px;
        width: 50% !important;
    }
    .our-works .container .row .card{
        width: 50% !important;
        margin-bottom: 48px;
    }
}
@media only screen and (max-width: 900px){
    .footer{
    padding: 50px;
  }
    .registration .container .row .col-md-4 .icon-tg{
        padding: 10px;
    }
    .registration .container .row .col-md-4 .chat {
        padding: 12px !important;
        margin-left: 30px;
    }
    .registration .container .row .col-md-4 .chat p {
        font-size: 20px !important;
        font-weight: normal;
    }   
    .registration .container .row .col-md-2 h1{
        font-weight: 600 !important;
        font-size: 70px !important;
    }
    .registration .container .row .col-md-6{
        width: 50%;
    }
    .registration .container .row .col-md-6 h1{
        font-size: 32px !important;
        font-weight: 600 !important;
    }
    .registration .container .row .col-md-6 p{
        font-size: 20px !important;
        font-weight: 400 !important;
    }
    .registration .container .row .col-md-4{
        width: 40%;
    }
    .registration .container .row .col-md-2{
        width: 10%;
    }
    .our-works{
        padding: 50px;
        margin-bottom: 0 !important;
    }
    .our-works .container .row .card{
        width: 25% !important;
    }
    .customers{
        padding: 50px;
    }
    .customers .container h1{
        font-size: 40px !important;
        font-weight: 700 !important;
    }
    .our-works .container h1{
        font-size: 40px !important;
        font-weight: 700 !important;
    }
    .customers .container .card{
        width: 50%;
    }
    .customers .container .card #cards{
        width: 50%;
        margin: 0 auto !important;
    }
}
.registration .container .row .col-md-4 .chat p {
    font-size: 24px;
    font-weight: normal;
}
.registration .container .row .col-md-4 .chat img {
    width: 50px;
    height: 50px;
}
.registration .container .row .col-md-4 .chat {
    display: flex;
    color: white;
    padding: 16px;
    margin-left: 30px;
}
.registration{
    padding: 24px;
    background-color: #0065FF;
    color: white;
}
.registration .container .row .col-md-4{
    display: flex;
    padding: 16px;
}
.registration .container .row .col-md-4 .icon-tg{
    background-color: white;
    border-radius: 50%;
    width: 85px;
    height: 80px !important;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    padding-top: 16px;
}
.registration .container .row .col-md-6 h1{
    font-weight: 800;
    font-size: 48px;
}
.registration .container .row .col-md-2 h1{
    font-weight: 800;
    font-size: 80px;
}
.registration .container .row .col-md-6 p{
    font-weight: 400;
    font-size: 24px;
}
.button-registration{
    margin-bottom: 100px;
}
.button-registration .container {
    justify-content: space-between;
    text-align: center;
}
.button-registration .container .btn{
    color: #0065FF;
    width: 30%;
    border: 1px solid #0065FF;
    border-radius: 16px;
    padding: 20px;
}
.button-registration .container .btn:hover{
    background-color: #0065FF;
    color: white;
        transition-duration: 1s;
}
.our-works .container .row{
    margin-bottom: 100px;
}
.our-works .container .row .card {
    width: 50% !important;
    transition-delay: 2s;
}
.our-works .container .row .card .cards img{
    width: 50%;
    margin-bottom: 16px;
}
.our-works .container .row .card .cards:hover {
    transform:  translate(0, -10px);
    cursor: pointer;
    transition: .5s;
}
.our-works .container .row .card .cards {
    box-shadow: 0px 0px 40px -11px rgba(0, 0, 0, 0.25);
    color: #5F5B58;
    transition-delay: 2s;
    height: 260px;
    padding-top: 50px;
    text-align: center;
    justify-content: space-between;
    width: 80%;
    border-radius: 20px;
}
.our-works .container .head-text{
    font-weight: 800;
    font-size: 48px;
    text-align: center;
    margin-bottom: 60px;
}
.customers{
    margin-bottom: 100px;
}
.customers .container .card .cards .data-bottom{
    display: flex;
}
.customers .container .card .cards span{
    font-size: 16px;
    color: #5F5B58; 
    margin-left: 8px;
    margin-top: 16px;
    margin-right: 40px;
}
.customers .container .card .cards .rectangle{
    width: 50px;
    height: 50px;
    background-color: #0065FF;
    border-radius: 50%;
    margin-left: 8px;
}
.customers .container .head-text{
    font-weight: 800;
    font-size: 48px;
    text-align: center;
    margin-bottom: 60px;
}
.customers .container .card .cards img{
    width: 100%;
    margin-bottom: 16px;
    padding: 0 !important;
}
.customers .container .card {
    padding: 16px;
    display: flex;
}
.customers .container .card .cards{
    padding: 10px;
    -webkit-box-shadow: 0px 7px 4px -1px rgba(34, 60, 80, 0.14);
    -moz-box-shadow: 0px 7px 4px -1px rgba(34, 60, 80, 0.14);
    box-shadow: 0px 7px 4px -1px rgba(34, 60, 80, 0.14);
    border-radius: 20px;
}
.customers .container .card .cards:hover p{
    color: white;
}
.customers .container .card .cards:hover span{
    color: white;
}
.customers .container .card .cards:hover .rectangle{
    background-color: white;
}
.customers .container .card .cards:hover{
    background-color: #0065FF;
    transition: 2s;
    transform: rotateX(-180) !important;
    /* position: absolute; */
    transition: all 2s cubic-bezier(.41, .01, .57, 1.61) !important;
}
.customers .container .card .cards button{
    padding: 4px;
    text-align: center;
    color: #0065FF;
    background-color: #f1f1f1;
    border-radius: 10px;
    margin-left: 8px;
    margin-bottom: 16px;
}
.customers .container .card .cards p{
    font-size: 20px;
    color: #5F5B58; 
    margin-left: 8px;
    margin-bottom: 32px;
}
.footer {
  padding-top: 48px;
  background-color: #0B163F;
}
.footer .footer__container .footer__row .footer--flex .footer--menu a {
  list-style: none;
  text-decoration: none;
  color: white;
}
.footer .footer__container .footer__row .footer--flex p{
  margin-bottom: 16px;
  color: white;
}
.footer .footer__container .footer__row  .footer-flex1 p{
  margin-bottom: 20px;
}
.footer .footer__container .footer__row  .footer-flex1 .footer--menu{
  margin-bottom: 12px;
}
.footer .footer__container .footer__row  .footer-flex1{
  padding: 8px;
  margin-bottom: 20px;
}
.footer .footer__container .footer__row  .footer-flex1 .footer--menu:hover{
  border-bottom: .5px solid white;
  cursor: pointer;
  display: inline-block;
}
</style>