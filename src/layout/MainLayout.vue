<template>
  <div>
    <MainTop></MainTop>
    <MainHeader></MainHeader>
    <MainContent></MainContent>
  </div>
</template>
<script>


import MainHeader from "@/components/MainHeader";
import MainTop from "@/components/MainTop";
import MainContent from "@/components/MainContent";

export default {
  name: "MainLayout",
  components: {
    MainContent,
    MainHeader,
    MainTop
  },
  data() {
    return {}
  },

  methods: {}

}
</script>

<style scoped>

</style>
