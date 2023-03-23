<template>
    <adminheader/>
  <h1>{{storedName}}Welcome To Admin Home Add,Modify,Delete Tasks</h1>
  <img src="../assets/shutterstock_1803078475-e1608144132637.webp" alt="">
  
  
  </template>
  
  
  <script>
  
  import adminheader from './adminheader.vue'
  export default{
      name: 'adminhome',
      data() {
      return {
        storedName: ""
      };
    },
  components:{
    adminheader
  },
  
      methods: {
        task(){
          this.$router.push({name:'tasks'})
        }
      },
      mounted()
   {
       let user=JSON.parse(localStorage.getItem('user-info'))
     if(!user)
     {
       this.$router.push({name:'signup'}) 
     }
     else if(user.role=="USER"){

        this.$router.push({name:'home'})
     }
     else{
        this.$router.push({name:'adminhome'})
     }
 }
  }

  </script>
  
  <style scoped>
  body{
    text-align: center;
  }
  </style>