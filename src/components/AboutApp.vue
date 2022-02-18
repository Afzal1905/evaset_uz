<template>
    <div>
        <section class="about-app">
            <v-container class="container">
                <h1 id="text" v-scrollanimation>Dastur kimlar uchun mo'ljallangan?</h1>
                <v-layout class="row" row xs12>
                    <v-flex md4 class="cards">
                        <div class="div-cards"  v-scrollanimation>
                            <img src="../assets/young-woman1.png" alt="">
                            <p class="small-text">Dorixona egalari uchun</p>
                            <p class="batafsil">Batafsil	&rarr;</p>
                        </div>
                        <div class="div-cards"  v-scrollanimation>
                            <img src="../assets/restaurant-hall-with-round-square-tables-some-chairs-plants 1.png" alt="">
                            <p class="small-text">Kafe va Restoranlar uchun</p>
                            <p class="batafsil">Batafsil	&rarr;</p>
                        </div>
                    </v-flex>
                    <v-flex md4 class="cards">
                        <div class="div-cards"  v-scrollanimation>
                            <img src="../assets/image 4.png" alt="">
                            <p class="small-text">Do‘kon va omborlar uchun</p>
                            <p class="batafsil">Batafsil	&rarr;</p>
                        </div>
                        <div class="div-cards"  v-scrollanimation>
                            <img src="../assets/manager-industrial-engineer-using-tablet-check-control-automation-robot-arms-machine 1.png" alt="">
                            <p class="small-text">Ishlab chiqarishlar uchun</p>
                            <p class="batafsil">Batafsil	&rarr;</p>
                        </div>
                    </v-flex>
                    <v-flex md4 class="cards"  v-scrollanimation>
                        <div class="card-table">
                            <div class="rectangle"></div>
                            <h4>Nimalarni avtomatlashtiramiz</h4>
                            <div class="table-text"  v-for="item in items" :key="item.id" >
                                <p>	<span>&#128504;</span>{{item.title}}</p>
                            </div>
                        </div>
                    </v-flex>
                </v-layout>
            </v-container>
        </section>
        <section class="easy">
            <v-container class="container">
                <v-layout class="row" xs12 row>
                    <v-flex md3></v-flex>
                    <v-flex md6 class="biznes--col">
                        <h1 v-scrollanimation>Biznesni masofadan oson boshqaring!</h1>
                        <p v-scrollanimation>Biznesda mayda muammolar rivojlanishingizga xalaqit beryaptimi?
                            Bepul diagnostika uchun hoziroq ro‘yxatdan o‘ting!</p>
                            <div class="buttons" v-scrollanimation>
                                <a href="#contact"><button v-scrollanimation class="btn btn--1">Ro'yxatdan o'tish</button></a>
                            </div>
                    </v-flex>
                    <v-flex md3></v-flex>
                </v-layout>
            </v-container>
        </section>
    </div>
</template>
<script>
export default {
    data: () => ({
      items:[
          {id: 1, title: "Biznes jarayonlarni"  },
          {id: 2, title: "Savdo zalini"  },    
          {id: 3, title: "Omborxona nazorati"  },    
          {id: 4, title: "Hodimlarni boshqarish"  },    
          {id: 5, title: "Moliya bo‘limi"  },    
          {id: 6, title: "Ishlab chiqarish"  },    
          {id: 7, title: "Xisob kitob va pul oqimi"  },    
          {id: 8, title: "Marketing bo‘limi"  },    
          {id: 9, title: "Mijozlarni sodiqlik tizimi"  },    
          {id: 10,title: "Sotuv bo‘limi"  },    
          {id: 11,title: "Mijozlar bazasi"  },    
          {id: 12,title: "va hokazo"  },    
      ],
    }),
}
</script>
<style scoped>
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
.about-app{
    transition-delay: .2s;
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
    .easy{
        margin-bottom: 0 !important;
    }
    .easy .container .row{
        margin-left: -100px !important;
        padding: 0 !important;
        width: 210% !important;
    }
    .easy .container .row .biznes--col h1{
        font-size: 36px !important;
        font-weight: 600!important;
    }
    .easy .container .row .biznes--col p{
        font-size: 16px !important;
        font-weight: normal!important;
    }
    .about-app .container #text{
        font-size: 36px !important;
        font-weight: 500 !important;
    }
}
@media only screen and (max-width: 375px){
    .easy{
        margin-bottom: 0 !important;
    }
    .easy .container .row{
        margin-left: -100px !important;
        padding: 0 !important;
        width: 220% !important;
    }
    .easy .container .row .biznes--col h1{
        font-size: 36px !important;
        font-weight: 600!important;
    }
    .easy .container .row .biznes--col p{
        font-size: 16px !important;
        font-weight: normal!important;
    }
    .about-app .container #text{
        font-size: 36px !important;
        font-weight: 500 !important;
    }
}
@media only screen and (max-width: 500px){
    .easy .container .row .biznes--col h1{
        font-size: 30px !important;
        font-weight: 400 !important;
    }
    .easy .container .row .biznes--col .buttons .btn{
        width: 1000px !important;
    }
    .easy .container .row .biznes--col .buttons {
        width: 100% !important;
        margin-bottom: 0 !important;
    }
    .easy .container .row .biznes--col .buttons .btn{
        width: 40% !important;
        /* margin-left: -3% !important; */
    }
    .about-app .container .row .cards {
        width: 100% !important;
        margin: 0 auto;
    }
    .about-app .container .row .cards .card-table{
        width: 100% !important;
        margin: 0 auto;
    }
}
@media only screen and (max-width: 600px){
    .easy .container .row .biznes--col .buttons .btn{
        width: 40% !important;
    }
    
}
@media only screen and (max-width: 900px){
    .footer{
    padding: 50px;
  }
    .easy .container .row .biznes--col h1{
        font-size: 40px !important;
        font-weight: 700 !important;
    }
    .easy .container .row .biznes--col p{
        font-size: 20px !important;
        font-weight: 300 !important;
    }
    .easy{
        padding: 100px;
        margin-bottom: 0 !important;
    }
    .about-app{
        padding: 30px;
    }
    .about-app .container h1{
        font-size: 40px !important;
        font-weight: 700 !important;
    }
    .about-app .container .row .cards {
        width: 50%;
    }
    .about-app .container .row .cards .card-table{
        width: 50%;
        margin: 0 auto;
    }
}
.easy{
    padding-top: 100px;
    background-color: #0B163F;
    margin-bottom: 100px;
}
.easy .container .row .biznes--col h1{
        font-size: 48px;
        text-align: center;
        font-weight: 800;
        color: white;
        margin-bottom: 32px;
    }
    .easy .container .row .biznes--col p{
        font-weight: 500;
        font-size: 20px;
        color: white;
        text-align: center;
        margin-bottom: 30px;
    }
    .easy .container .row .biznes--col .buttons{
        justify-content: space-between;
        display: center;
        margin-bottom: 100px;
        align-items: center;
    }
    .easy .container .row .biznes--col .buttons .btn{
        display: inline-block;
        text-align: center;
        justify-content: space-between;
        color: #0065FF;
        border: 1px solid #0065FF;
        border-radius: 12px;
        padding-top: 16px;
        padding-bottom: 16px;
        width: 40%;
        transform: translate(72%, 0) !important;
        background-color: white;
    }
    .easy .container .row .biznes--col .buttons .btn:hover{
        background-color: #0065FF;
        color: white;
        cursor: pointer;
        transition: 1s;
    }
.about-app .container .row .cards .card-table h4{
    margin-bottom: 30px;
    color: #5F5B58;
    font-size: 24px;
    font-weight: 700;
}
.about-app .container .row .cards .card-table .table-text p span{
    color: white;
    padding: 4px;
    background-color: #3798FA;
    border-radius: 50%;
    margin-right: 10px;
}
.about-app .container .row .cards .card-table .table-text p{
    margin-bottom: 13px;
    color: #5F5B58;
    font-size: 16px;
    font-weight: 300;
}
.about-app {
    margin-top: 100px;
}
.about-app .container .row .cards .card-table{
    padding: 20px;
    -webkit-box-shadow: 0px 7px 4px -1px rgba(34, 60, 80, 0.14);
    -moz-box-shadow: 0px 7px 4px -1px rgba(34, 60, 80, 0.14);
    box-shadow: 0px 7px 4px -1px rgba(34, 60, 80, 0.14);
    border-radius: 16px;
}
.about-app .container .row .cards .card-table .rectangle{
    background-color: #3798FA;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-top: 20px;
    margin-bottom: 24px;
}
.about-app{
    margin-bottom: 100px;
}
.about-app .container h1{
    margin-bottom: 60px;
    text-align: center;
    font-size: 48px;
    font-weight: 800;
}
.about-app .container .row .cards{
    padding: 16px;
}
.about-app .container .row .cards .div-cards{
    margin-bottom: 16px !important;
    border-radius: 20px;
    display: inline-block;
    margin: 0;
    padding: 0;
}
.about-app .container .row .cards .div-cards:hover{
    -webkit-box-shadow: 0px 7px 4px -1px rgba(34, 60, 80, 0.14);
    -moz-box-shadow: 0px 7px 4px -1px rgba(34, 60, 80, 0.14);
    box-shadow: 0px 7px 4px -1px rgba(34, 60, 80, 0.14);
    cursor: pointer;
    transform: translate(0, -10px);
    transition: 1s;
}
.about-app .container .row .cards .div-cards img{
    width: 100%;
}
.about-app .container .row .cards .div-cards .small-text{
    padding: 10px;
    color: #5F5B58;
}
.about-app .container .row .cards .div-cards .batafsil{
    padding-left: 10px;
    margin-bottom: 16px;
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