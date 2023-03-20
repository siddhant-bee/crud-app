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
            <button @click="addnote">UPDATE TASK</button>
    
            <button @click="showmodal = false" class="close">CLOSE</button>
          </div>
        </div>
    
        <div class="container">
          <header class="head">
            <h1>UPDATE TASKS</h1>
            <!-- <button @click="showmodal = true">ADD</button> -->
          </header>
        </div>
    
        <div class="card-container">
          <div v-for="item in items">
            <div class="card">
              <p class="main-text">
                {{ item.task }}
              </p>
              <p class="date">{{ currentDate }}</p>
             
             
            </div>
            <button class="del" @click="deletee(item.id);showmodal=true">UPDATE TASK</button>
           
          </div>
        </div>
      </main>
    </template>
    
    <script>
  
  import Header from './Header.vue'
  
    import axios from "axios";
    import { ref } from "vue";
    export default {
      name: "update",
      components:{
    Header
  },
    
      created() {
        axios
          .get("http://localhost:5000/gettask")
          .then((response) => {
            this.items = response.data;
          })
          .catch((error) => console.log(error));
      },
      setup() {
        const inputref = ref("i have to do.....");
        const del=ref();
        const note = ref([]);
    
        const items = ref([]);
    
        function addnote() {
          console.warn("hello");
          {
            const formData = inputref;
            axios
              .post("http://localhost:5000/add-task", formData)
              .then((response) => {
                console.log(response);
              })
              .catch((error) => console.log(error));
    
            axios
              .get("http://localhost:5000/gettask")
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
          currentDate: new Date().toLocaleDateString()
    
        };
      },
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
    