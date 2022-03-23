<template>
   <div class="signUp_entity">
       <div class="container_signUp_entity">
           <h2>FORMULARIO REGISTRO ENTIDAD</h2>
           <form v-on:submit.prevent="createEntity" >
               
               <input type="text" v-model="this.nit" placeholder="NIT">
                <br/>
                
                <input type="text" v-model="this.name" placeholder="Nombre">
                <br/>

                <input type="text" v-model="this.address" placeholder="Dirección">
                <br/>

                <input type="text" v-model="this.phone" placeholder="Telefono">
                <br/>

                <input type="email" v-model="this.email" placeholder="Email">
                <br/>
                <Button label="Registrar entidad" icon="pi pi-check" class="p-button-rounded p-button-info" type="submit"/>
            </form>
        </div>
    </div>     
</template>

<script>

import gql from 'graphql-tag';
import Button from 'primevue/button';
import Icon from 'primevue/button';


export default {

    name: "createEntity",
    components:{
       Button,
       Icon
    },

    data: function(){
        
        return {
            nit:'',
            name: '',
            address: '',
            phone: '',
            email: '',
        }
    },
    
    methods: {

        validateEmail: function(email) {
            // Expresiones regulares nombre@dominio.co
            const regex = /\S+@\S+\.\S+/
            return regex.test(email);
        },

        createEntity: function(){
            if(!this.nit || !this.name || !this.address || !this.phone || !this.email) {
                alert('Todos los campos son obligatorios')
            } else if(!this.validateEmail(this.email)){
                alert('Correo no valido')
            } else {
                const entity = {
                    nit: this.nit,
                    name: this.name,
                    address: this.address,
                    phone: this.phone,
                    email: this.email,
                };

                this.$apollo
                .mutate({
                    mutation: gql`
                    mutation Mutation($entityInput: EntitypInput) {
                        createEntity(entityInput: $entityInput)
                        }
                    `,
                    variables: {
                        entityInput: entity
                    }
                }) .then((response)=> {
                    console.log(response.data.createEntity);
                     alert('Entidad registrada con exito');
                     this.$router.push({ name: "Entities" });

                   
                    })
                    .catch(() => { 
                        alert("ERROR: Fallo en el registro.");
                        });

            }
        },
    }
}
</script>
<style>

.signUp_entity{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

.container_signUp_entity {
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

    .signUp_entity h2{
        color: #283747;
        font: 250% Bahnschrift;
        font-weight: bold;

    }

    .signUp_entity form{
        width: 70%;
        
    }

.signUp_entity input,
select {
  height: 35px;
  width: 100%;
  background-color: rgba(197, 246, 246, 0.966);
  box-sizing: border-box;
  padding: 10px 20px;
  margin: 5px 0;

  border: 1px solid #283747;
}
.signUp_entity button{
    width: 100%;
    height: 40px;

    color: #E5E7E9;
    font:  Bahnschrift;
    background: #28517e;
    border: 1px solid #E5E7E9;

    border-radius: 5px;
    padding: 10px 25px;
    margin: 5px 0 25px 0;
    }

    .signUp_entity button:hover{
        color: #E5E7E9;
        background: #99303e;
        border: 1px solid #283747;
    }
</style>