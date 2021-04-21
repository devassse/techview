<template>
<q-layout>
<div id="menu">
  <div class="wrapper">
    <h2>TechView<br/><span><small>Portal de Tecnologia</small></span></h2>
  </div>
</div>
<div id="topslider" class="text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 10vw">
        Hello World, This is TechView!!!
      </div>

      <div style="opacity:.4; font-size:4vw">
        Portal de Tecnologia...
      </div>

    </div>
  </div>
</q-layout>
</template>
<script>
export default {
  name: 'TechView Website'
}
</script>
<style scoped>
#menu h2{
  font-size: 2rem;
  line-height: 1rem;
}
#menu h2 span{
  font-size: 1.2rem;
}
.wrapper{
  width: 80%;
  margin: 0 auto;
}
#topslider{
    width: 100%;
    height: 80%;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
}
@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
</style>