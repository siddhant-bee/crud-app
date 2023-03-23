<template>
  <Header/>
<h1>{{storedName}}Welcome To Task Manager From Here You Can Add,Modify,Delete Tasks</h1>
<img src="../assets/How-to-be-more-efficient-with-tasks-cover.png" alt="">


</template>


<script>

import Header from './Header.vue'
export default{
    name: 'home',
    data() {
    return {
      storedName: ""
    };
  },
components:{
  Header
},

    methods: {
      task(){
        this.$router.push({name:'tasks'})
      }
    },
    mounted()
  {
     let user=localStorage.getItem('user-info')
    if(!user)
    {
      this.$router.push({name:'signup'}) 
    }
}
}
</script>

<style scoped>
body{
  text-align: center;
}
</style>