<template>
  <div>
    <div id="navigaition" class="navigation" >
      <div id="navigation-menu" class="navigation-menu">
        <div id="img-logo">
          <img src="../assets/Logo1.png" id="logo" class="logo-photo">
        </div>
        <a style="text-decoration:none; color:black" href="#basic"><li  class="ul-menu" id="menuItem">Основные</li></a>
        <a style="text-decoration:none; color:black" href="#about"><li class="ul-menu" id="menuItem">О нас</li></a>
        <a style="text-decoration:none; color:black" href="#aboutapp"><li class="ul-menu" id="menuItem">О программе</li></a>
        <a style="text-decoration:none; color:black" href="#partners"><li class="ul-menu" id="menuItem">Наши партнеры</li></a>
        <a style="text-decoration:none; color:black" href="#contact"><li class="ul-menu" id="menuItem">Контакты</li></a>
      </div>
    </div>
  </div>
</template>

<style scoped>

.navigation{
  opacity: 100%;
  
  transition: .5s ease all;
  background-color: white;
}
.navigation .navigation-menu{
  padding: 30px;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: white;
  box-shadow: 0 3px 3px 3px #f1f1f1;
  z-index: 100000;
  margin: 0 auto;
  width: 30%;
  height: 100%;
  position: fixed;
}
#navigation *{
  opacity: 50%;
}
#menuItem{
  position: relative;
  font-size: 20px;
  border-radius: 4px;
  text-decoration: none;
  list-style: none;
  padding: 10px;
  background-color: white;
  width: 80%;
  transition: all .3s;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  border-bottom: 1px solid #f1f1f1;
}
#menuItem:hover{
  background-color: #0066ff;
  color: white;
}
#img-logo{
  margin: 0;
  width: 100%;
  margin-bottom: 20px;
}
@media   (max-width: 800px){
  .navigation .navigation-menu{
    width: 40%;
  }
  #menuItem{
    width: 90%;
  }
  #logo{
    width: 100%;
  }
}
@media   (max-width: 500px){
  .navigation .navigation-menu{
    width: 45%;
    padding: 20px;
  }
  #menuItem{
    font-size: 16px;
  }
}
@media   (max-width: 400px){
  .navigation .navigation-menu{
    width: 50%;
    padding: 16px;
  }
}
@media   (max-width: 375px){
  .navigation .navigation-menu{
    width: 50%;
    padding: 10px;
  }
  #menuItem{
    width: 100%;
  }
}
</style>