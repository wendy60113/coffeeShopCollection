<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
import "@/css/landingpage.scss"
import "@/css/listpage.scss"

export default {
  mounted(){
      this.$router.push('/home')
  }
}
</script>