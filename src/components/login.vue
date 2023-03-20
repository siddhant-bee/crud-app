import router from '@/routes';

<template>

  <div class="allcover">
    <img class="logo" src="../assets/iconn.jpg" alt="" />
  <h1>login</h1>
  <div class="login">
    <input type="text " v-model="email" placeholder=" Enter Email" />
    <input type="password" v-model="password" placeholder=" Enter password" />
    <button v-on:click="login">log in</button>
    <p>
      <router-link to="/signup">sign up</router-link>
    </p>
  </div>
  </div>
  
</template>

<script>
import axios from "axios";
export default {
  name: "login",

  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let result = await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}` );

      if(result.status==200 && result.data.length>0)
        {
        localStorage.setItem("user-info",JSON.stringify(result.data[0]))
        this.$router.push({name:'home'})
        }
      console.warn(result);
    }
  },
  mounted()
  {
    
    let user=localStorage.getItem('user-info')
    if(user)
    {
      this.$router.push({name:'home'}) 
    }
  }

  
};
</script>

<style scoped >
.logo {
  width: 200px;
}
.allcover{
  text-align: center;
}
.login input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: BLOCK;
  
margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px SOLID skyblue;
}
.login button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  background-color: skyblue;
  cursor: pointer;
}
</style>
