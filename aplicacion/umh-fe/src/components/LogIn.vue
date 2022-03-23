<template>
  <div class="logIn_user">
    <div class="container_logIn_user">
      <h2>INGRESAR</h2>
      <form v-on:submit.prevent="processLogInUser">
        <input type="text" v-model="user.username" placeholder="Username" />
        <br />
        <input type="password" v-model="user.password" placeholder="Password" />
        <br />
        <Button label="Iniciar Sesion" icon="pi pi-user" type="submit"/>
        
      </form>
    </div>
  </div>
</template>


<script>
import gql from "graphql-tag";
import Button from 'primevue/button';
import Icon from 'primevue/button';
import 'primeicons/primeicons.css';

export default {
  name: "LogIn",
  components:{
       Button,
       Icon
    },

  data: function () {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    processLogInUser: async function () {
      // ir al servicio de apollo(api gateway)
      await this.$apollo
        //alert(`username: ${user.username}, password: ${user.password}`);
        .mutate({
          mutation: gql`
            mutation logIn($credentials: CredentialsInput!) {
              logIn(credentials: $credentials) {
                access
                refresh
              }
            }
          `,
          variables: {
              credentials: this.user,
          },
        })
        .then((result) => {
          let dataLogIn = {
            token_access: result.data.logIn.access,
            token_refresh: result.data.logIn.refresh,
          };
          this.$emit("completedLogIn", dataLogIn);
        })
        .catch((error) => {
          alert("ERROR 401: Credenciales Incorrectas.");
        });
    },
  },
};
</script>
<style scoped>
.logIn_user {
  margin: 0;
  padding: 0%;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container_logIn_user {
  border: 3px solid;
  border-radius: 10px;
  width: 30%;
  height: 100%;
  
  background-image:url(https://images.unsplash.com/photo-1485848395967-65dff62dc35b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80);
  padding: 15px 30px 35px 30px;
  background-repeat: no-repeat;

  display: flex;
  background-size: cover;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 110px;
  position: static;
}

.container_logIn_user button{
    height: 40px;
    width: 100%;
    padding: 10px 20px;
    margin: 5px 0;  
     
   
   
}

.logIn_user h2 {
  color: #fafafa;
  font: 250% Bahnschrift;
  font-weight: bold;
}

.logIn_user form {
  width: 70%;
}

.logIn_user input {
  height: 40px;
  width: 100%;
  background-color: rgb(178, 221, 241);
  box-sizing: border-box;
  padding: 10px 20px;
  margin: 5px 0;

  border: 3px solid #283747;
}

</style>
