<template>
   <div class="signUp_user">
       <div class="container_signUp_user">
           <h2>FORMULARIO DE REGISTRO</h2>
           <form v-on:submit.prevent="processSignUp" >
               
               <select v-model="this.tipo_documento">
                    <option disabled value="">Seleccione tipo de documento</option>
                    <option>CC</option>
                    <option>PA</option>
                    <option>CE</option>
                </select>
                <br/>
                
                
                <input type="text" v-model="this.numero_documento" placeholder="Número documento">
                <br/>
                
                <input type="text" v-model="this.fullname" placeholder="Nombre completo">
                <br/>

                <select v-model="this.sex">
                    <option disabled value="">Seleccione el sexo</option>
                    <option>F</option>
                    <option>M</option>
                    <option>O</option>
                </select>
                <br/>

                <input type="number" v-model="this.age" placeholder="Edad">
                <br/>

                <input type="datetime-local" v-model="this.dateBirth" placeholder="Fecha nacimiento">
                <br/>

                <input type="text" v-model="this.address" placeholder="Dirección">
                <br/>

                <input type="text" v-model="this.phone" placeholder="Telefono">
                <br/>

                <input type="email" v-model="this.email" placeholder="Email">
                <br/>

                <input type="text" v-model="this.username" placeholder="Usuario">
                <br/>

                <input type="password" v-model="this.password" placeholder="Contraseña">
                <br/>

                <input id="password2" type="password" v-model="this.confirmPassword" placeholder="Confirmar contraseña">
                <br/>

                <input type="text" v-model="this.professionalCard" placeholder="N° tarjeta profesional">
                <br/>
    
                <select v-model="this.entity">
                    <option disabled value="">Seleccione una entidad</option>
                    <option>Clinca San Francisco</option>
                    <option>Clinica Santa Monica</option>
                    <option>Clinica Santa Rita</option>
                    <option>Famisalud</option>
                    <option>Fundación Cardioinfantil</option>
                    <option>Fundación Valle del Lili</option>
                    <option>Hospital de la Niña</option>
                </select>
                <br/>
                <Button label="Registrarse" icon="pi pi-check" class="p-button-rounded p-button-info" type="submit"/>
            </form>
        </div>
    </div>     
</template>

<script>

import gql from 'graphql-tag';
import Button from 'primevue/button';
import Icon from 'primevue/button';


export default {

    name: "signUp",
    components:{
       Button,
       Icon
    },

    data: function(){
        
        return {
            tipo_documento:'',
            numero_documento: '',
            fullname: '',
            sex: '',
            age: '',
            dateBirth: '',
            address: '',
            phone: '',
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
            professionalCard: '',
            entity: ''
        }
    },
    
    methods: {

        validateEmail: async function(email) {
            // Expresiones regulares nombre@dominio.co
            const regex = /\S+@\S+\.\S+/
            return regex.test(email);
        },

        processSignUp: async function(){
            if(!this.tipo_documento || !this.numero_documento || !this.fullname || !this.sex || !this.age || !this.dateBirth || !this.address || !this.phone || !this.email || !this.username || !this.password || !this.confirmPassword || !this.professionalCard || !this.entity) {
                alert('Todos los campos son obligatorios')
            } else if(!this.validateEmail(this.email)){
                alert('Correo no valido')
            } else if(this.password !== this.confirmPassword) {
                alert('Las contraseñas no coinciden')
            } else {
                const user = {

                    tipo_documento: this.tipo_documento,
                    numero_documento: this.numero_documento,
                    fullname: this.fullname,
                    sex: this.sex,
                    age: this.age,
                    dateBirth: this.dateBirth,
                    address: this.address,
                    phone: this.phone,
                    email: this.email,
                    username: this.username,
                    password: this.password,
                    professionalCard: this.professionalCard,
                    entity: this.entity,

                };

                await this.$apollo
                .mutate({
                    mutation: gql`
                        mutation CreateUser($data: SignUpInput!) {
                            createUser(userInput: $data) {
                                refresh
                                access
                                }
                        }
                    `,
                    variables: {
                        data: user
                    }
                }) .then((result) => {
                    let dataSignUp = {
                        token_access: result.data.createUser.access,
                        token_refresh: result.data.createUser.refresh,
                    }
                    this.$emit("completedSignUp", dataSignUp);
                    })
                    .catch((error) => {
                        console.log(error)
                        alert("ERROR: Fallo en el registro.");
                        });

            }
        },
    }
}
</script>
<style scoped>

.signUp_user{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

.container_signUp_user {
        border: 3px solid  #283747;
        border-radius: 10px;
        width: 50%;
        height: 50%;
        background: #cfe2f7;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
        position: static;
        background-image: url(https://i.pinimg.com/originals/4e/d9/55/4ed9551939c4af7745227b184dce4fc6.jpg);
        background-size: cover; 
        
    }

    .signUp_user h2{
        color: #283747;
        font: 250% Bahnschrift;
        font-weight: bold;

    }

    .signUp_user form{
        width: 70%;
        
    }

.signUp_user input,
select {
  height: 35px;
  width: 100%;
  background-color: rgba(197, 246, 246, 0.966);
  box-sizing: border-box;
  padding: 10px 20px;
  margin: 5px 0;

  border: 1px solid #283747;
}


.signUp_user button{
    width: 100%;
    height: 40px;

    color: #E5E7E9;
    font:  Bahnschrift;
    background: #28517e;
    border: 1px solid #E5E7E9;

    border-radius: 5px;
    padding: 10px 25px;
    margin-left: auto;
    margin-right: auto;
    }

    .signUp_user button:hover{
        color: #E5E7E9;
        background: #99303e;
        border: 1px solid #283747;
    }
</style>