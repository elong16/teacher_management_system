<template>
<div class="main">
<router-view></router-view>
</div>
</template>
<script>

export default {
  name: "MainContent",
  components:{


  }
}
</script>

<style >
.main{
  width: 95%;
  margin-left: 35px;
  /*height: 400px;*/
  margin-top: 20px;
  border: 2px solid #ccc;
  border-radius: 7px;
}

.page-name {
  display: flex;
  margin-top: 20px;
  margin-left: 30px;
  height: 20px;
  font-size: 16px;
  line-height: 20px;
  font-weight: bold;
}

.page-name .zhu {
  width: 4px;
  background-color: red;
}

.page-name .tool{
  margin-left: 10px
}



</style>