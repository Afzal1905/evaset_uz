<template>
    <div>
        <section class="group--section">
            <v-container class="group--container">
                <v-layout class="group--row" xs12 row>
                    <v-flex class="group-col group-col-1" md6>
                        <h1 v-scrollanimation>Salom biz Evaset jamoasimiz!</h1>
                        <p v-scrollanimation>Bizning jamoa 8 yillik tajribaga ega mutaxasislardan tashkil topgan.
                            Biz biznes egasiga dunyoning istalgan nuqtasidan turib, 
                            osonlikcha o'z
                             ishini boshqarishiga yordam beramiz. Jamoamiz sizga
                            qulayliklar yaratish maqsadida biznesingizga moslab
                             alohida oson
                            yechim taqdim etadi va bankrotlikni oldini olishda
                            yordam beradi.
                        </p>
                        <div class="divs">
                            <div class="group--divs"  v-scrollanimation>
                                <div class="img--icon icon-text">
                                    <img src="../assets/Trending_Up.svg" alt="">
                                </div>
                                <div class="icon-text">
                                    <h4>Oliy maqsadimiz</h4>
                                    <p>Biznes egasini halovat topishiga yordam berish</p>
                                </div>
                            </div>
                            <div class="group--divs"  v-scrollanimation>
                                <div class="img--icon icon-text">
                                    <img src="../assets/Users_Group.svg" alt="">
                                </div>
                                <div class="icon-text">
                                    <h4>Asosiy qadriyatimiz</h4>
                                    <p>Tadbirkorni biznesini rivojlantirish orqali qo’shimcha ish o’rinlarini yaratish</p>
                                </div>
                            </div>
                        </div>
                    </v-flex>
                    <v-flex md6 class="group-col group-col-2">
                        
                    </v-flex>
                </v-layout>
            </v-container>
        </section>
    </div>
</template>
<script>
export default {
    
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
    .group--section .group--container .group--row .group-col-1 .divs .group--divs{
        margin-bottom: -40px !important;
    }
    .group--section{
        margin-bottom: 0 !important;
    }
}
@media only screen and (max-width: 375px){
    .group--section .group--container .group--row .group-col-1 .divs .group--divs{
        margin-bottom: -40px !important;
    }
    .group--section{
        margin-bottom: 0 !important;
    }
}
@media only screen and (max-width: 500px){
    .group--section .group--container .group--row .group-col-1 .divs .group--divs .img--icon{
        width: 100px !important;
        height: 100px !important;
        padding: 0 !important;
    }
    .group--section .group--container .group--row .group-col-1 .divs .group--divs .img--icon img{
        width: 30px !important;
        margin-top: 20px;
        position: relative;
        height: 30px !important;
        padding: 0 !important;
    }
}
@media only screen and (max-width: 450px){
    .group--section{
        margin-bottom: -200px  !important;
        padding: 40px !important;
    }
}
@media only screen and (max-width: 600px){
    .group--section .group--container .group--row .group-col-1 .divs .group--divs .img--icon{
        width: 100px !important;
        height: 100px !important;
        position: relative !important;
        margin-right: 24px !important;
    }
    .group--section .group--container .group--row .group-col-1 .divs .group--divs .img--icon img{
        width: 50px !important;
        height: 50px !important;
    }
    /* .group--section .group--container .group--row .group-col-1 .divs .group--divs h4{
        width: 70% !important;
        position: absolute;
        margin-bottom: 8px !important;
    }
    .group--section .group--container .group--row .group-col-1 .divs .group--divs p{
        width: 70% !important;
        position: absolute;
    } */
    .group--section .group--container .group--row .group-col-1 .divs .group--divs{
        margin-bottom: 30px !important;
        display: flex !important;
    }
    .group--section .group--container .group--row .group-col-1 .divs .group--divs .img--icon{
        width: 20% !important;
    }
    .group--section .group--container .group--row .group-col-1 .divs{
        width: 100% !important;
        display: inline-table !important;
    }
    .group--section .group--container .group--row .group-col-1 .divs .group--divs{
        width: 100% !important;
        display: none;
    }
}
@media only screen and (max-width: 900px){
    .footer{
    padding: 50px;
  }
    .group--section{
        padding: 100px;
        margin-bottom: 0 !important;
    }
}
.group--section{
    margin-bottom: 200px;
    margin-top: 100px;
    z-index: 10;
}
.group--section .group--container .group--row .group-col-1 h1{
    font-weight: 800;
    font-size: 40px;
    margin-bottom: 30px;
} 
.group--section .group--container .group--row .group-col-1 p{
    color: #5F5B58;
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 60px;
}
.group--section .group--container .group--row .group-col-1 .divs{
    display: flex;
    margin-bottom: 30px;
}
.group--section .group--container .group--row .group-col-1 .divs .group--divs{
    width: 50%;
    display: inline-block;
}
.group--section .group--container .group--row .group-col-1 .divs .group--divs .img--icon{
    background-color: #3798FA;
    width: 20% !important;
    position: relative;
    padding: 16px;
    border-radius: 12px;
    margin-bottom: 28px;
}
.group--section .group--container .group--row .group-col-1 .divs .group--divs h4{
    font-weight: 800;
    margin-bottom: 16px;
    font-size: 24px;
}
.group--section .group--container .group--row .group-col-1 .divs .group--divs .img--icon img{
    width: 100%;
}
.group--section .group--container .group--row .group-col-2{
    background-image: url('../assets/Слой22.png');
    background-size: 90%;
    /* background-position-y: -50px; */
    background-position-x: 44px;
}
.group--section .group--container .group--row .group-col-2{
    margin-bottom: -100px;
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