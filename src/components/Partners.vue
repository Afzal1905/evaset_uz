<template>
    <div>
        <section class="partners" >
            <v-container class="container">
                <v-layout class="row" xs12 row>
                    <v-flex class="problems" md7 v-scrollanimation>
                        <h1 id="heading-text" >Biz quyidagi muammolarni
                            bartaraf qilishda tadbirkorga
                            yordam beramiz:</h1>
                        <p v-for="item in items" :key="item.id" ><span>&#128504;</span> {{item.title}}  </p>    
                    </v-flex>
                    <v-flex class="problems" md5>
                        <img v-scrollanimation src="../assets/serious-young-businessman-looking-financial-report-seem-like 1.png" alt="">
                    </v-flex>
                </v-layout>
            </v-container>
        </section>
        <section class="must" >
            <v-container class="container">
                    <h1 v-scrollanimation class="text-must" id="text-must">Avzallik va ustunliklarimiz:</h1>
                <v-layout class="row" xs12 row >
                    <v-flex class="col cool" md6>
                        <img class="bg-image" v-scrollanimation src="../assets/5 1.png" alt="">
                    </v-flex>
                    <v-flex class="col" md3>
                        <div class="hhh" v-scrollanimation>
                            <div class="icons">
                                <img src="../assets/Phone.svg" alt="">
                            </div>
                            <p>Bizda 24/7 qo’llab quvatlash xizmati mavjud</p>
                        </div>
                        <div class="hhh" v-scrollanimation>
                            <div class="icons">
                                <img src="../assets/Shield_Check.svg" alt="">
                            </div>
                            <p>Dasturda xafvsizlik to'liq
                                taminlangan</p>
                        </div>
                        <div class="hhh" v-scrollanimation>
                            <div class="icons">
                                <img src="../assets/Vector.png" alt="">
                            </div>
                            <p>Kirim-chiqimlarni
                                masofadan boshqarish </p>
                        </div>
                        
                    </v-flex>
                    <v-flex class="col" md3>
                        <div class="hhh" v-scrollanimation>
                            <div class="icons">
                                <img src="../assets/Mobile_Button.svg" alt="">
                            </div>
                            <p>Mobil ilovamiz orqali doimiy nazoratni qo'lga olasiz</p>
                        </div>
                        <div class="hhh" v-scrollanimation>
                            <div class="icons">
                                <img src="../assets/Shopping_Cart_02.svg" alt="">
                            </div>
                            <p>Har kunlik savdo va foyda taqsimotidan xabardor bo'lasiz</p>
                        </div>
                        <div class="hhh" v-scrollanimation style="margin-top: -12px;">
                            <div class="icons">
                                <img src="../assets/Octagon_Check.svg" alt="">
                            </div>
                            <p>Korxona rahbaridan boshqa odam platformaga kirmasligiga kafolat </p>
                        </div>
                    </v-flex>
                </v-layout>
            </v-container>
        </section>
        <section class="partners2" >
            <v-container class="container">
                <v-layout class="row" xs12 row>
                    <v-flex md4></v-flex>
                    <v-flex md4 class="partner-problem">
                        <h1 class="text" v-scrollanimation>Hamkorlarimiz</h1>
                        <p class="p-text" v-scrollanimation>Siz ham biznesingizni avtomatizatsiyalashtiring, muammolardan halos bo’ling.</p>
                        <a href="#contact" v-scrollanimation><button  v-scrollanimation class="btn">Xoziroq ro'yxatdan o'ting!</button></a>
                    </v-flex>
                    <v-flex md4></v-flex>
                </v-layout>
            </v-container>
        </section>
    </div>
</template>
<script>
export default {
    data: () => ({
      items:[
          {id: 1, title: "Rahbar hamma ishni o'zi qiladi va hech narsaga ulgirolmaydi"  },
          {id: 2, title: "Muammoni qayerdaligini aniq bilmaydi"  },    
          {id: 3, title: "O'g'rilik sodir bo'lganini aniqlay olmaydi"  },    
          {id: 4, title: "Ombor va do'kondagi qoldiq maxsulotlarni miqdorini aniq bilmaydi"  },    
          {id: 5, title: "Kamomat bo’lsa xatolik qayerda bo'lganini bilmaydi"  },    
          {id: 6, title: "Maxsulotlarning sotilish darajasini aniq bilmaydi"  },    
          {id: 7, title: "Mijozlarning sodiqligini aniqlashtira olmaydi"  },   
      ],
    }),
}
</script>
<style>
.before-enter{
    opacity: 0 !important;
    transform: translateY(100px) !important;
    transition: all 2s ease-out !important;
}
.enter{
    opacity: 1 !important;
    transform: translateY(0px) !important;
}
.partners{
    margin-top: 100px;
}
@media  screen and (max-width: 414px){
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
    .partners2 .container .row .partner-problem{
        width:300% !important;
    }
    .partners2 .container .row .partner-problem .text{
        font-size: 28px !important;
        font-weight: 500 !important;
    }
    .partners2 .container .row .partner-problem .p-text{
        font-size: 12px !important;
        font-weight: 400 !important;
    }
    .partners2 .container .row .partner-problem .btn{
        width: 100% !important;
        padding: 4px !important;
    }
    .partners2{
        margin-bottom: 20px !important;
        height: 0;
        display: none;
    }
    .partners{
        padding: 0 !important;
        margin-top: -60px !important;
        margin-bottom: 0  !important;
    }
    .partners .container .row{
        width: 180% !important;
        padding: 0 !important;
        margin-left: -70px;
    }
        .must{
            margin-top: -100px !important;
            margin-bottom: 0 !important;
        }
        .must .container{
            width: 128%;
            margin-left: -30px !important;
        }
}
@media  screen and (max-width: 375px){
    .partners2 .container .row .partner-problem{
        width:300% !important;
    }
    .partners2 .container .row .partner-problem .text{
        font-size: 28px !important;
        font-weight: 500 !important;
    }
    .partners2 .container .row .partner-problem .p-text{
        font-size: 12px !important;
        font-weight: 400 !important;
    }
    .partners2 .container .row .partner-problem .btn{
        width: 100% !important;
        padding: 4px !important;
    }
    .partners2{
        margin-bottom: 20px !important;
        height: 0;
        display: none;
    }
    .partners{
        padding: 0 !important;
        margin-top: -60px !important;
        margin-bottom: 0  !important;
    }
    .partners .container .row{
        width: 180% !important;
        padding: 0 !important;
        margin-left: -70px;
    }
        .must{
            margin-top: -100px !important;
            margin-bottom: 0 !important;
        }
        .must .container{
            width: 128%;
            margin-left: -30px !important;
        }
}
@media only screen and (max-width: 450px){
    .partners .container{
        padding: 0 !important;
    }
    .partners .container .row .problems{
        width: 100% !important;
        margin: 0 auto !important;
    }
}
@media only screen and (max-width: 500px){
    .must .container #text-must{
        font-size: 32px !important;
        font-weight: normal !important;
    }
    .partners{
        padding: 0 !important;
        margin-bottom: 0 !important;
    }

    .partners .container{
        width: 100% !important;
    }
    .partners .container .row .problems #heading-text{
        font-size: 32px !important;
        font-weight: 400 !important;
    }
    .partners .container .row .problems p{
        font-size: 18px !important;
        font-weight: normal !important;
    }
    .partners2 .container .row .partner-problem h1{
        font-size: 36px !important;
        font-weight: 400 !important;
        margin-top: -10px !important;
    }
    .partners2 .container .row .partner-problem p{
        font-size: 16px !important;
        margin-bottom: 10px !important;
        margin-top: -16px ;
    }
    .partners2 .container .row .partner-problem button{
        width: 80% !important;
        padding: 6px !important;
    }
}
@media only screen and (max-width: 600px){
    .partners2 .container .row .partner-problem p{
        margin-bottom: 20px !important;
    }
    .partners2 .container .row .partner-problem h1{
        margin-bottom: 20px !important;
        margin-top: -60px !important;
    }
    .must .container .row .cool{
        display: none;
    }
    .partners2{
        margin-top: 100px !important;
        padding-top: -10px !important;
        margin-bottom: 30px !important;
    }
}
@media only screen and (max-width: 900px){
    .footer{
    padding: 50px;
  }
    .partners2{
        padding: 80px !important;
        background-color:  none;
        margin-bottom: 0 !important;
    }
    .must {
        padding: 50px;
    }
    .must .container .text-must{
        font-size: 40px !important;
        font-weight: 700 !important;
        text-align: center;
        margin-bottom: 30px;
    }   
    .partners .container .row .problems h1{
        font-weight: 700 !important;
        font-size: 40px !important;
    }
    .partners{
        padding: 100px !important;
    }
}
.partners2{
    padding-top:140px;
    background-image:  url("../assets/double-exposure-many-business-people 1.png") ;
    background-size: 100%;
    margin-bottom: 100px;

}
.partners2 .container .row .partner-problem h1{
    font-weight: 800;
    font-size: 48px;
    margin-bottom: 40px;
}
.partners2 .container .row .partner-problem button{
    background: white;
    color: #0065FF;
    padding: 16px;
    border-radius: 10px;
    border:1px solid #0065FF;
    margin-bottom: 150px;
}
.partners2 .container .row .partner-problem button:hover{
    background-color: #0065FF;
    color: white;
    transition: 1s;
}
.partners2 .container .row .partner-problem p{
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 30px;
}
.partners2 .container .row .partner-problem{
    text-align: center;
    color: white;
    justify-content: space-between;
    justify-items: center;
}
.must{
    margin-bottom: 100px;
}
.must .container .text-must{
    font-size: 48px;
    font-weight: 800;
    text-align: center;
}
.must .container .row .col .hhh p{
    color: #5F5B58;
}
.must .container .row .col .hhh{
    margin-bottom: 40px;
    margin-top: 50px;
}
.must .container .row .col .bg-image{
    width: 80%;
    justify-content: space-between;
}
.must .container .row .col .icons {
    background-color: #0065FF;
    padding: 16px;
    border-radius: 10px;
    width:70px;
    height: 70px;
    margin-bottom: 16px;
}

.partners{
    margin-bottom: 100px;
}
.partners .container .row .problems h1{
    font-weight: 800;
    font-size: 48px;
    margin-bottom: 24px;
}
.partners .container .row .problems p{
    color: #5F5B58;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 10px;
}
.partners .container .row .problems p span{
    background-color: #3798FA;
    border-radius: 50%;
    padding: 4px;
    color: white;
}
.partners .container .row .problems img{
    width: 100%;
    margin-top: 40px;
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