<template>
  <div>
    <div class="top">
      <div class="title">教学服务平台</div>
      <div class="user">
        <div><a>用户名</a></div>
        <div>|</div>
        <div>退出</div>
      </div>
    </div>
    <div style="margin-left: 40px;margin-top: 10px">
      <img style="height: 50px" src="../assets/img.png">
    </div>
  </div>
</template>


<script>
export default {
  name: "MainTop"
}
</script>

<style scoped>
.top {
  display: flex;
  width: 100%;
  height: 30px;
  background-color: #111111;
}

.top .title {
  padding-left: 20px;
  color: white;
  line-height: 30px;
}

.user {
  position: absolute;
  right: 10px;
  display: flex;
  line-height: 30px;
  color: white;
}
</style>