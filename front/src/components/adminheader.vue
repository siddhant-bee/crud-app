<template>
    <div class="nav">
     <router-link to="/adminhome"> HOME</router-link>
     <router-link to="/admin">ALL TASKS</router-link>
     <!-- <router-link to="/update"> ALL USERS</router-link> -->
    
 
      <a @click="logout" href="#"> LOGOUT</a>
     </div>
   
 </template>
 <script>
 export default{
     name:'adminheader ',
     methods:{
         logout()
         {
             localStorage.clear();
             this.$router.push({name:'login'})
             console.warn("logout");
         }
     }
 }
 </script>
 
 <style scoped>
 .nav{
     background-color:#333 ;
     overflow: hidden;
 }
 
 .nav a{
     float: left;
    
     color: #f2f2f2f2;
     padding: 16px 16px;
     text-align: center;
     font-size: 17px;
     margin-right: 5px;
     text-decoration: none;
 }
 .nav a:hover{
     background-color: #ddd;
     color: #333;
 }
 
 
 </style>