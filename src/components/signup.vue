<template>
  <div class="cover">
    <img class="logo" src="../assets/iconn.jpg" alt="" />
  <h1>Sign up</h1>
  <div class="register">
    <input type="text " v-model="name"  placeholder=" Enter Name"/>
    
    <input type="text " v-model="email" placeholder=" Enter Email"/>
    
    <input type="password" v-model="password" placeholder=" Enter password"/>
    <button v-on:click="Signup">Sign Up</button>
    <br>
    <router-link to="/login">log in</router-link>

  </div>
  </div>
</template>
<script>

import axios  from 'axios'
export default
 {
  
  name: "signup",
  data()
  {
    return{
        name:'',
        email:'',
        password:''
    }
  },
  methods:
  {
    async Signup()
    {
        console.warn("Signup",this.email,this.name,this.password);
        let result = await axios.post("http://localhost:3000/user",
        {
          email:this.email,
          name:this.name,
          password:this.password
        });
        console.warn(result);
        if(result.status==201)
        {
        localStorage.setItem("user-info",JSON.stringify(result.data))
        this.$router.push({name:'home'})
        }


        const formData = {
        
        name: this.name,
        
        email: this.email,
        password: this.password
}
axios.post('http://localhost:5000/users', formData)
      .then((response) => {
        console.log(response);
      })
      .catch(error => console.log(error))

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
.cover{
  text-align: center;
}

.register input{
    width: 300px;
    height: 40PX;
    PADDING-LEFT: 20PX;
    DISPLAY: BLOCK;
    MARGIN-BOTTOM: 30PX;
    MARGIN-LEFT: auto;
    MARGIN-RIGHT: auto;
    BORDER: 1PX SOLID skyblue ;

}
.register button{
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background-color: skyblue;
    cursor: pointer;
}
</style>
