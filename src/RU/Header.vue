
<template>
  <div>
    <div  @click="toggleMobileNav"><BurgerButton  v-show="mobileNav" :class="{'scrolled-nav' : scrolledNav}" id="burger-button"/></div>
    <v-section class="header" >
      <v-container class="container" >
        <v-layout class="row" xs12>
            <v-flex col md2 class="header--menu" id=" header-menu2">
                <img src="../assets/Logo1.png" alt="" id="logo" class="logo-photo">
            </v-flex>

            <v-flex col md7 class="header--menu center-menu">
                <ul id="ul" v-show="!mobile">
                  <li><a style="text-decoration:none; color:black" href="#basic">Основные</a></li>
                  <li><a style="text-decoration:none; color:black" href="#about">О нас</a></li>
                  <li><a style="text-decoration:none; color:black" href="#aboutapp">О программе</a></li>
                  <li><a style="text-decoration:none; color:black" href="#partners">Наши партнеры</a></li>
                  <li><a style="text-decoration:none; color:black" href="#contact">Контакты</a></li>
                </ul>
                
            </v-flex>

            <v-flex col md3 class="header--menu menu-1" >
              <router-link to="/" id="router" class="select">
                Уз
              </router-link>
                
              
                <a href="#contact">
                  <button href="" class="btn" id="btn">
                    <img src="../assets/Icon.png" alt="">
                    <p class="btn-text" id="btn-text">Call center:</p>
                    <span class="btn-text">+99871-200-2322</span>
                  </button>
                </a>
                <ul id="select" class="min-menu">
                  <button @click="toggleMobileNav" :class="{'icon-active': mobileNav}">
                    <div class="icon-menu" id="icon-menu">
                    <div class="bar1" id="bar1"></div>
                    <div class="bar2" id="bar2"></div>
                    <div class="bar3" id="bar3"></div>
                  </div>
                  </button>
                </ul> 
            </v-flex>
        </v-layout>
    
    
    </v-container>
  </v-section>
  <div id="basic"><Basic/></div>
  <div id="about"><About/></div>
  <div id="aboutapp"><About-app/></div>
  <div id="partners"><Partners/></div>
  <div id="contact"><Contact/></div>
  <div id="contact1"><Footer/></div>
  </div>
</template>
<script>
import Basic from '../RU/Basic.vue'
import About from '../RU/About.vue'
import AboutApp from '../RU/AboutApp.vue'
import Partners from '../RU/Partners.vue'
import Contact from '../RU/Contact.vue'
import Footer from '../RU/Footer.vue'  
import BurgerButton from '../RU/BurgerButton.vue'  
// import '../js/button'


export default ( {
  components: { Footer, Basic , About ,AboutApp , Partners, Contact, BurgerButton},
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
      scrollPosition: null,
      scrolledNav: null      
    }
  },
  created(){
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  mounted(){
    window.addEventListener("scroll", this.uptadeScroll)
  },
  methods: {
    noneMenu(){
      this.mobile = null
      this.mobileNav = null
      this.scrolledNav = null
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    
    updateScroll(){
      const scrollPosition = window.scrollY;
      if(scrollPosition > 50){
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
    },
    checkScreen(){
      this.windowWidth = window.innerWidth;
      if(this.windowWidth<=700){
        this.mobile = true;
        return;      
      }
      this.mobile = false;
      this.mobileNav =false;
      return;  
    },
  },

});

</script>

<style scoped>
.scrolled-nav{
  transition: .5s ease all;
}
.icon-active{
  transition: .5s ease all !important;
}
.icon-active #icon-menu{
  position: absolute;
  margin-top: -6px;
}
@media (max-width: 450px){
  .icon-active #icon-menu{
    margin-top: -8px !important;
  }
}
.icon-active #bar1{
  transform: rotate(140deg);
  position: absolute;
}
.icon-active #bar2{
  transform: translateX(-20px);
  opacity: 0;
  position: absolute;
}
.icon-active #bar3{
  transform: rotate(-140deg);
  position: absolute;
}
@media (max-width: 375px){
  #li-menu{
    text-align: center !important;
  }
  .header .container .row .menu-1 .select{
    margin-left: 20% !important;
  }
  .header .container .row .menu-1 .btn[data-v-7c75f3f0]{
    width: 40px !important;
    height: 40px !important;
    border-radius: 50%;
    margin-right: 22% !important;
  }
  .header .container .row .menu-1 .btn img[data-v-7c75f3f0]{
    display: block !important;
    width: 90% !important;
    margin-top: -2px !important;
    margin-left: 2px !important;
  }
  .header .container .row .menu-1 .btn .btn-text[data-v-7c75f3f0]{
    display: none !important;
  }
}
@media (max-width: 390px){
  #li-menu{
    text-align: center !important;
  }
  #router{
    margin-left: 18% !important;
  }
  .header .container .row .menu-1 .select{
    margin-right: -20px !important;
  }
  .header .container .row .menu-1 .btn[data-v-7c75f3f0]{
    width: 40px !important;
    height: 40px !important;
    border-radius: 50%;
    margin-right: 22% !important;
  }
  .header .container .row .menu-1 .btn img[data-v-7c75f3f0]{
    display: block !important;
    width: 90% !important;
    margin-top: -2px !important;
    margin-left: 2px !important;
  }
  .header .container .row .menu-1 .btn .btn-text[data-v-7c75f3f0]{
    display: none !important;
  }
}
@media (max-width: 450px){
  #li-menu{
    text-align: center !important;
  }
  .header .container .row .menu-1 .min-menu .icon-menu{
    margin-top: -2px !important;
  }
  .header .container .row .menu-1 .select{
    margin-left: 20% !important;
    margin-top: 12px !important;
  }
  .header .container .row .menu-1 .btn[data-v-7c75f3f0]{
    width: 40px !important;
    height: 40px !important;
    border-radius: 50%;
    margin-right: 22% !important;
  }
  .header .container .row .menu-1 .btn img[data-v-7c75f3f0]{
    display: block !important;
    width: 90% !important;
    margin-top: -2px !important;
    margin-left: 2px !important;
  }
  .header .container .row .menu-1 .btn .btn-text[data-v-7c75f3f0]{
    display: none !important;
  }
}
@media (max-width: 700px){
  .header .container .row .center-menu{
    display: none !important;
  }
  .header .container .row .menu-1 .min-menu{
    display: block  !important;
    position: absolute;
  }
  .header .container .row .menu-1 .min-menu .hover-menu{
    margin-top: -4px !important;
  }
  .header .container .row .menu-1 .min-menu div .ul-menu{
    text-align: center !important;
    text-decoration: none !important;
    list-style: none !important;
    padding: 8px !important;
    box-shadow: 0 2px 2px 2px #f1f1f1;
    position:  relative !important;
    background-color: white;
    display: none !important;
  }
  .header .container .row .menu-1 .min-menu div .ul-menu:hover{
    cursor: pointer;
    box-shadow: 0 2px 2px 2px #0066ff;
    transition: all .2s;
  }
  .header .container .row .menu-1 .min-menu .icon-menu:hover{
    cursor: pointer;
  }
  #li-menu{
    margin-left: -70px !important;
    position: relative !important;
  }
  .header .container .row .menu-1 .btn{
    width: 50% !important;
    margin-right: 30% !important;
    margin-top: 6px;
  }
  .header .container .row .menu-1 .btn img{
    display: none;
  }
  .header .container .row .menu-1 .min-menu:hover #li-menu,
  .header .container .row .menu-1 .min-menu:active #li-menu{
    display: block !important;
  }
   .header .container .row .header--menu .min-menu {
     float: right !important;
     position: absolute!important;
     margin-top: 12px !important;
     margin-left: 40% !important;
   }
  .header .container .row .header--menu .min-menu .icon-menu .bar1, .bar2, .bar3 {
    width: 24px;
    height: 3px !important;
    background-color: black;
    margin: 6px;
    transition: 0.4s; 
  }
  .header .container .row .header--menu .min-menu .icon-menu .bar2{
    width: 20px !important;
    margin-left: 10px !important;
  }
.header .container .row .header--menu .min-menu .icon-menu{
  height: 26px !important;
}
  .header .container .row .header--menu .min-menu .icon-menu .change .bar1 {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-9px, 6px);
  }

  .header .container .row .header--menu .min-menu .icon-menu .change .bar2 {
    opacity: 0;
  }

  .header .container .row .header--menu .min-menu .icon-menu .change .bar3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
  }
}

.header .container .row .header--menu .min-menu:hover .ul-menu:hover,
.header .container .row .header--menu .min-menu:hover .ul-menu:active {
  transform: translate(-.3rem, -2px);
  position: absolute;
}
.header .container .row .menu-1 .btn .btn-text{
  display: block !important;
  text-align: center;
  position: relative;
}
.header .container .row .menu-1 .select{
  cursor: pointer;
  color: black;
  text-decoration: none;
  list-style: none;
  position: absolute;
  margin-top: 16px ;
}
.header .container .row .menu-1 .btn img{
  position: relative;
  float: left !important;
  margin-top: 4px;
  align-items: center;
  justify-content: space-between;
}
.header .container .row #header-menu2 .logo-photo{
  widows: 90% !important;
  height: 100px !important;
  position: absolute !important;
}
.header .container .row .menu-1 .btn{
  float: right;
  border-radius: 8px;
  padding: 6px;
  background-color: #0066ff;
  width: 70%;
  text-align: center;
  color: white;
}
.header .container .row .header--menu #ul{
  display: flex;
  padding-top: 16px;
  padding-left: 32px;
  align-items: center;
}
.header .container .row .header--menu #ul li{
  text-align: center;
  text-decoration: none;
  list-style: none;
  margin-right: 5%;
}
.header{
  position: relative;
}
.header .container{
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  -webkit-box-shadow: 0px 5px 4px -1px rgba(34, 60, 80, 0.14);
  -moz-box-shadow: 0px 5px 4px -1px rgba(34, 60, 80, 0.14);
  box-shadow: 0px 5px 4px -1px rgba(34, 60, 80, 0.14);
  border-radius: 10px;
  position: fixed;
  width: 90%;
  background-color: white;
  z-index: 100;
  margin: 0 auto !important;
  margin-top: -100px !important;
  margin-left: 5.5% !important;
}
.menu{
  display: none !important;
}
.min-menu{
  display: none !important;
}
.before-enter{
    opacity: 0 !important;
    transform: scale(.5) !important;
    transition: all 1s ease-out !important;
}
.enter{
    opacity: 1 !important;
    transform: translateY(0px) !important;
}
#basic{
  top: 100px !important;
  margin-top: 100px !important;
  /* position: absolute; */
}
#about{
  margin-top: 100px !important;
}
#aboutapp{
  margin-top: 100px !important;
}
#partners{
  margin-top: 100px !important;
}



@media screen and (max-width: 414px){
  .header .container .row .menu1 .btn{
    margin-bottom:  10px !important;
    position: absolute !important;
  }
  .header .container .row .menu-1 .select{
    padding-top: 4px !important;
    position: absolute;
  }
  .header .container .row .menu-1{
    padding-top: 6px !important;
    margin-left: -30px !important;
  }
  .header .container .row .header--menu .min-menu {
    display: block !important;
    height: 20px;
    padding: 0 !important;
    position: absolute;
  }
  .header .container .row .header--menu .menu:hover{
    cursor: pointer;
  }
  .header .container .row .header--menu .min-menu .ul-menu:hover{
    border-bottom: 0px !important;
    position: relative;
  }
}
@media only screen and (max-width: 500px){
  .header .container .row .menu1 .btn{
    margin-bottom:  10px !important;
    position: absolute !important;
  }
  .header .container .row .menu-1 .select{
    padding-top: 4px !important;
    position: absolute;
  }
  .header .container .row .menu-1{
    padding-top: 6px !important;
    margin-left: -30px !important;
  }
  .header .container .row .header--menu .min-menu {
    display: block !important;
    height: 20px;
    padding: 0 !important;
    position: absolute;
  }
  .header .container .row .header--menu .menu:hover{
    cursor: pointer;
  }
  .header .container .row .header--menu .min-menu .ul-menu:hover{
    border-bottom: 0px !important;
    position: relative;
  }
}
@media only screen and (max-width: 600px){
  
  .header .container .row .center-menu{
    display: none !important;
  }
  .header .container .row .menu-1 .min-menu{
    display: block  !important;
    position: absolute;
  }
  .header .container .row .menu-1 .min-menu div .ul-menu{
    text-align: right !important;
    text-decoration: none !important;
    list-style: none !important;
    padding: 8px !important;
    box-shadow: 0 2px 2px 2px #f1f1f1;
    position:  relative !important;
    background-color: white;
    display: none !important;
  }
  .header .container .row .menu-1 .min-menu div .ul-menu:hover{
    cursor: pointer;
    box-shadow: 0 2px 2px 2px #0066ff;
    transition: all .2s;
  }
  .header .container .row .menu-1 .min-menu .icon-menu:hover{
    cursor: pointer;
  }
  #li-menu{
    margin-left: -70px !important;
    position: relative !important;
  }
  .header .container .row .menu-1 .btn{
    width: 50% !important;
    margin-right: 30% !important;
    margin-top: 6px;
  }
  .header .container .row .menu-1 .btn img{
    display: none;
  }
  .header .container .row .menu-1 .min-menu:hover #li-menu,
  .header .container .row .menu-1 .min-menu:active #li-menu{
    display: block !important;
  }
   .header .container .row .header--menu .min-menu {
     float: right !important;
     position: absolute!important;
     margin-top: 12px !important;
     margin-left: 40% !important;
   }
  .header .container .row .header--menu .min-menu .icon-menu .bar1, .bar2, .bar3 {
    width: 24px;
    height: 3px;
    background-color: black;
    margin: 6px;
    transition: 0.4s; 
  }

  .header .container .row .header--menu .min-menu .icon-menu .change .bar1 {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-9px, 6px);
  }

  .header .container .row .header--menu .min-menu .icon-menu .change .bar2 {
    opacity: 0;
    float: right !important;
  }

  .header .container .row .header--menu .min-menu .icon-menu .change .bar3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
  }
}

@media only screen and (max-width: 1200px){
  /* .header .container{
    width: 100% !important;
    margin: 0 auto !important;
  } */
}
@media only screen and (max-width: 900px){
  .header .container{
    width: 100% !important;
    margin-left: 0 !important;
  }
  .header .container .row .header--menu .btn span{
    font-size: 12px;
  }
  .header .container .row .header--menu .btn p{
    font-size: 12px;
  }
  .header .container .row .header--menu .btn img{
    width: 16% !important;
  }
  .header .container .row .header--menu select{
    margin-left: -200px;
    padding: 6px !important;
  }
  .header .container .row .header--menu #logo{
    width: 75% !important;
  }
  .header .container .row .header--menu ul li{
    margin-right: 30px !important;
  }
}


</style>