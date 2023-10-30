<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
import "@/css/landingpage.scss"

export default {
  mounted(){
      this.$router.push('/home')
  }
}
</script>