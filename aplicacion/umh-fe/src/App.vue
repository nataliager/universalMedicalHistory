<template>
  <div id="app" class="app">
    <div class="header">
      <nav>
        <button v-if="is_auth" v-on:click="logOut">Cerrar Sesión</button>
        <button v-if="is_auth" v-on:click="allPatients">Ver Pacientes Registrados</button>
        <button v-if="is_auth" v-on:click="createPatient">Registro de pacientes</button>
        <button v-if="is_auth" v-on:click="allEntities">Ver Entidades Registradas</button>
        <button v-if="is_auth" v-on:click="createEntity">Registro de Entidades</button>
        <button v-if="is_auth" v-on:click="allHc">Buscar historia clínica</button>
        <button v-if="is_auth" v-on:click="createHc">Registrar historia clínica</button>
        <button v-if="!is_auth" v-on:click="loadLogIn">Iniciar Sesión</button>
        <button v-if="!is_auth" v-on:click="loadSignUp">Registrarse</button>
      </nav>
    </div>

    <body></body>

    <div class="main-component">
      <router-view
        v-on:completedLogIn="completedLogIn"
        v-on:completedSignUp="completedSignUp"
        v-on:logOut="logOut"
        >
      </router-view>
    </div>
  </div>
</template>


<script>
export default {
  name: "App",

  data: function () {
    return {
      is_auth: false,
    };
  },

  components: {},

  methods: {

    verifyAuth: function () {

      /*Permite verificar si esta autenticado*/
      this.is_auth =
        localStorage.getItem("isAuth") ||
        false; /*verifica si estoy autenticado*/

      if (this.is_auth == false)
        this.$router.push({ name: "home" });/*si no estoy autenticado me voy a home*/
      else
        this.$router.push({ name: "hc" });/*si estoy autenticado me voy a account*/ 
    },

    loadLogIn: function () {
      this.$router.push({ name: "logIn" });/*redirige al componente de login con router push*/
    },

    loadSignUp: function () {
      this.$router.push({ name: "signUp" });
    },

    completedLogIn: function (data) {

      console.log('error');
      /*datos a guardar en el localstorage*/
      localStorage.setItem("isAuth", true); /*esta autenticado*/
      localStorage.setItem(
        "username",
        data.username /*guardar username, data que envia el hijo*/
      ); 
      localStorage.setItem("token_access", data.token_access);
      localStorage.setItem("token_refresh", data.token_refresh);
      alert("¡Sesión iniciada con éxito!:");
      
      this.verifyAuth();
    },

    completedSignUp: function (data) {
      alert("Te has registrado exitosamente.");
      this.completedLogIn(data);
    },

    loadHome: function () {
      this.$router.push({ name: "home" });/*me redirijo a home*/
    },

    logOut: function () {
      localStorage.clear(); /*quitar todo lo del local storage*/
      alert("Sesión Cerrada");
      this.verifyAuth(); /*llamo a la func, y lo busca y como no esta toma valor false*/
    },
    allPatients: function () {
      this.$router.push({ name: "patients" });
    },
    allEntities: function () {
      this.$router.push({ name: "Entities" });
    },
    createPatient: function () {
      this.$router.push({ name: "createPatient" });/*me redirijo a createPtient*/
    },
    createEntity: function () {
      this.$router.push({ name: "createEntity" });/*me redirijo a createPtient*/
    },
    allHc: function () {
      this.$router.push({ name: "hc" });/*me redirijo a allHc*/
    },
    createHc: function () {
      this.$router.push({ name: "createHc" });/*me redirijo a createHc*/
    },
  },

  created: function () {/*se ejecuta cuando se carga la pagina*/
    this.verifyAuth();
  },
};
</script>

<style>

.header {
  background-color: rgba(0, 0, 0, 0);
  background-repeat: repeat;
  background-size: auto;
  background-color: #00000052;
  box-shadow: #060606 0px 0px 3px 0px;
  z-index: 999;
  width: 100%;
  left: 0;
  top: 0;
  background-color: #06a5aae5;
  padding: 0;
  padding-top: 0px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color: #f8fcff;

  margin: 0;
  padding: 0;
  height: 10vh;
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

body {
  background-size: cover;
  background-image: url(https://www.lasvegasbariatrics.com/wp-content/uploads/2017/09/Family-Medical-History.jpg);
  background-repeat: no-repeat;
  width: 100%;
  margin: 0 0 0 0;
}

.header h1 {
  width: 50%;
  text-align: center;
  font: 300% mostery;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
}

.header nav {
  height: 100%;
  width: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
}
.header nav button {
  color: #e5e7e9;
  width: 150px;
  border: 1px solid #e5e7e9;
  background-color: rgb(2, 255, 255);
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  background-color: #00000052;
  
  border-radius: 5px;
  
  margin: 1.5%;
  margin-right: 50px;
  padding: 10px 15px;
}

.header nav button:hover {
  /*Cuando paso mouse por encima*/
  color: #283747;
  background: #e5e7e9;
  border: 1px solid #e5e7e9;
}

.main-component {
  height: fit-content;
  min-height: 80vh;
  margin: 0%;
  padding: 0%;
}
/*
.footer {
  background-color: rgba(0, 0, 0, 0);
  background-size: auto;
  background-color: #00000052;
  box-shadow: #060606 0px 0px 3px 0px;
  z-index: auto;
  background-color: #00000052;
  padding: 0;
  padding-top: 0px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color: #f8fcff;
  margin: 0;
  padding: 0;
  min-height: 100px;

  width: 100%;
  height: 81px;
  position: absolute;
  bottom: 0;
}

.footer li {
  width: 100%;
  height: 80%;
  font: 140% mostery center;
  display: flex;
  justify-content: center;
  align-items: center;
}*/
</style>