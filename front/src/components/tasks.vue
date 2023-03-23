<template>
   <Header/>
  <main>
    <div v-if="showmodal" class="overlay">
      <div class="modal">
        <textarea
          v-model="inputref"
          name="task"
          id="task"
          cols="30"
          rows="10"
        ></textarea>
        <button @click="addnote">ADD TASK</button>

        <button @click="showmodal = false" class="close">CLOSE</button>
      </div>
    </div>

    <div class="container">
      <header class="head">
        <h1>TASKS</h1>
        <button class="add" @click="showmodal = true">ADD</button>
      </header>
    </div>

    <div class="card-container">
      <div v-for="item in items"  >
        <div class="card"  style="background-color: getcolour();">
          <p class="main-text">
            {{ item.task }}
          </p>
          <p class="date">{{ currentDate }}</p>
         
         
        </div>
        <button class="del" @click="deletee(item.task_id)" > TASK COMPLETED</button>
       
      </div>
    </div>
  </main>
</template>

<script>
import Header from './Header.vue'

import axios from "axios";
import { ref } from "vue";
export default {
  name: "tasks",
  components:{
  Header
},

  created() {
    this.user=JSON.parse(localStorage.getItem('user-info'))

    axios
      .get("http://localhost:5000/gettask/"+this.user.user_id)
      .then((response) => {
        this.items = response.data;
      })
      .catch((error) => console.log(error));
  },
  setup() {
    const inputref = ref(" I have to do .....");
    const del=ref();
    const note = ref([]);

    const items = ref([]);

   

    function addnote() {
      this.user=JSON.parse(localStorage.getItem('user-info'))
      
      {
        const formData ={
          inputref:inputref,
          user_id:this.user.user_id
        };
        axios
          .post("http://localhost:5000/add-task", formData)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => console.log(error));
         

        axios
          .get("http://localhost:5000/gettask/"+this.user.user_id)
          .then((response) => {
            this.items = response.data;
          })
          .catch((error) => console.log(error));
      }
    }
 

    function deletee(id){
console.warn("delete");
console.log(id);

axios.delete("http://localhost:5000/deletetask/"+id)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => console.log(error));



    }
    return {
      inputref,
      note,
      addnote,
      items,
      deletee,del
    };
  },

  // methods: {
  //     addnote:()=>
  // {
  //     notes.value.push({
  //         id:Math.floor(Math.random()* 1000000),
  //         text:inputref.value,
  //         date: new data(),

  //     })
  // }
  // },

  data() {
    return {
      showmodal: false,
      id:"",
      user:null,
      currentDate: new Date().toLocaleDateString()
    
    };
  },
  mounted()
   {
       let user=JSON.parse(localStorage.getItem('user-info'))
     if(!user)
     {
       this.$router.push({name:'signup'}) 
     }
     else if(user.role=="USER"){

        this.$router.push({name:'tasks'})
     }
     else{
        this.$router.push({name:'adminhome'})
     }
 }
};
</script>

<style scoped>
main {
  height: 100vh;
  width: 100vh;
}

.container {
  width: 1000px;
  padding: auto;
  margin: 0 auto;
}

.head {
  display: flex;
  justify-content: space-between;

  align-items: center;
}

h1 {
  font-weight: bold;
  margin-bottom: 25px;
  font-size: 75px;
}
.card {
  width: 225px;
  height: 225px;
  background-color: rgb(237, 182, 44);
  padding: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  margin-bottom: 20px;
}
.date {
  font-size: 12.5px;
  font-weight: bold;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
}

.overlay {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.77);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
 
}
.modal {
  width: 750px;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.modal button {
  padding: 10px 20px;
  font-size: 20px;
  width: 100%;
  background-color: blueviolet;
  border: none;
  color: white;
  cursor: pointer;
  margin-top: 15px;
}
.modal .close {
  background-color: rgb(193, 15, 15);
  margin-top: 7px;
}

.add{
  height: 100px;
  width: 100px;
  background-color: #007bff;
  border: 2px solid #007bff;
  color: #fff;
  border-radius: 5px;
 
  box-shadow: 10px 10px 14px rgba(0, 0, 0, 0.25);
}
 button:hover
{ background-color: #0056b3;
  border-color: #0056b3;

}

.del
{
  box-shadow: 10px 10px 14px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: row;
    border-radius: 5px;
    margin-bottom: 20px;
    margin-right: 200px;
}
</style>