<template>
    <div>
        <h1><span>404</span>
        <br>page not found</h1>
    </div>
</template>
<script>
export default {
    name: 'NotFound'
}
</script>

<style scoped>
@media screen and (max-width: 414px){
    *{
      background: #eee;
    }
    div{
        padding-top: 50px !important;
        padding-bottom: 50px !important;
    }
    div h1{
        font-size: 32px !important;
        margin-bottom: 30px !important;
    }
    div h1 span{
        font-size: 40px !important;
    }
}
    *{
      background: #eee;
      margin-top: 50px;
    }
    div h1{
        font-size: 40px;
        text-align: center;
        text-transform: uppercase;
    }
    div h1 span{
        font-size: 60px;
    }
    div{
        padding-top: 50px !important;
        padding-bottom: 50px !important;
    }
    .footer{
        display: none;
    }
</style>