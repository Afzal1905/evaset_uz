<template>
    <div>
        <footer class="footer" v-scrollanimation>
      <v-container class="footer__container">
        <v-layout class="footer__row" row xs12>
          <v-flex class=" footer-flex1" md3>
            <img src="../assets/whitelogo1.png" alt="" style="margin-bottom: 16px;">
            <p style="color:white;margin-bottom: 68px">Мы помогаем владельцу бизнеса легко управлять 
                своим бизнесом из любой точки мира. Наша команда предоставит вам простое решение, 
                адаптированное к вашему бизнесу с целью создания удобств...</p>
            
          </v-flex>
          <v-flex class=" footer-flex1" md3>
            <a style="text-decoration:none;"  href="#basic" ><p class="footer--menu" style="color:white;">Основные</p></a>
            <a style="text-decoration:none;"  href="#about"><p class="footer--menu" style="color:white;">О нас</p></a>
            <a style="text-decoration:none;"  href="#aboutapp"><p class="footer--menu" style="color:white;">О программе</p></a>
            <a style="text-decoration:none;"  href="#partners"><p class="footer--menu" style="color:white;">Наши партнеры</p></a>
            <p class="footer--menu" style="color:white;">Контакты</p>
          </v-flex>
          <v-flex class="footer--flex" md3>
            <p>Подписывайтесь на нас:</p>
            <p class="footer--menu" style="color:white;"><a href="https://facebook.com/evasetuz">Facebook</a></p>
            <p class="footer--menu" style="color:white;"><a href="https://instagram.com/evaset.uz">Instagram</a></p>
            <p class="footer--menu" style="color:white;" ><a href="https://t.me/evaset_uz">Telegram</a></p>
          </v-flex>
          <v-flex class="footer--flex" md3>
            <p>Kontaktlar:</p>
            <p style="color:white;">Город Ташкент,<br>
               заезд с правой стороны от Fedupi</p>
            <p style="color:white;">+998 (71) 200-23-22</p>
            <p style="color:white;">+998 (97) 332-78-70</p>
            <p style="color:white;"> office@evaset.uz</p>
          </v-flex>
        </v-layout>
      </v-container>
  </footer>
    </div>
</template>
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
        margin-top: -140px;
        padding: 28px !important;
        margin-bottom: 0 !important;
    }
    .facts .facts-container{
        margin-top: 28px !important;
    }
    .biznes--section{
        margin-bottom: 0 !important;
    }
    .biznes--section .biznes--container .row{
        margin-left: -100px !important;
        padding: 0 !important;
        width: 210% !important;
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
        margin-bottom: 0 !important;
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
@media only screen and (max-width: 450px){
    .biznes--section{
        padding: 0 !important;
    }
    .biznes--section .biznes--container .row .biznes--col .buttons .btn{
        width: 60% !important;
    }
    .biznes--section .biznes--container .row .biznes--col .buttons {
        width: 100% !important;
        margin-left: 20px  !important;

    }
}
@media only screen and (max-width: 500px){
    .biznes--section .biznes--container .row .biznes--col .buttons .btn{
        width: 1000px !important;
    }
    .biznes--section .biznes--container .row .biznes--col .buttons {
        width: 100% !important;
        margin-left: 20px  !important;

    }
}
@media only screen and (max-width: 600px){
    .biznes--section .biznes--container .row .biznes--col .buttons .btn{
        width: 40% !important;
        display: inline-block;
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
        /* text-align: center; */
        font-size: 48px;
        font-weight: 800;
        margin-bottom: 40px;
        /* justify-content: space-between; */
    }
    .biznes--section{
        margin-top: 160px;
    }
    .biznes--section .biznes--container .row .biznes--col h1{
        font-size: 48px;
        text-align: center;
        font-weight: 800;
        margin-bottom: 32px;
    }
    .biznes--section .biznes--container .row .biznes--col p{
        font-weight: 500;
        font-size: 20px;
        text-align: center;
        color: #5F5B58;
        margin-bottom: 30px;
    }
    .biznes--section .biznes--container .row .biznes--col .buttons{
        justify-content: space-between;
        display: center;
        margin-bottom: 400px;
        align-items: center;
        margin-left: 22%;
    }
    .biznes--section .biznes--container .row .biznes--col .buttons .btn{
        display: inline-block;
        text-align: center;
        justify-content: space-between;
        color: #0065FF;
        border: 1px solid #0065FF;
        border-radius: 12px;
        padding-top: 16px;
        padding-bottom: 16px;
        width: 30%;
        margin-right: 20px;
    }
    .biznes--section .biznes--container .row .biznes--col .buttons .btn:hover{
        background-color: #0065FF;
        color: white;
        cursor: pointer;
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
.footer .footer__container .footer__row  .footer-flex1 .footer--menu:link,
.footer .footer__container .footer__row  .footer-flex1 .footer--menu:visited{
    color: #f7f7f7;
    display: inline-block;
    text-decoration: none;
    font-size: 1.8rem;
}
.footer .footer__container .footer__row  .footer-flex1 .footer--menu:hover,
.footer .footer__container .footer__row  .footer-flex1 .footer--menu:active{
    background-color: #0B163F;
    color: #55c57a;
    transform: translateY(30%)  scale(1.5);
    transition: all .2s;
}
.footer .footer__container .footer__row  .footer-flex1{
  padding: 8px;
  margin-bottom: 20px;
}
.footer .footer__container .footer__row  .footer-flex1 .footer--menu:hover{
  cursor: pointer;
  display: inline-block;
}
</style>