<template>
     <div class="scroll-table-container">
      <div id="Entities">
        <table class="tableEntity">
          <caption class = "captionEntity">
            ENTIDADES REGISTRADAS
          </caption>
          <thead  class = "trentity">
            <tr>
              <th>NIT</th>
              <th>Nombre de la Entidad</th>
              <th>Direccion</th>
              <th>Telefono</th>
              <th>Correo Electronico</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody class= "bodyentity">
            <tr v-for="e in allEntityDetail.entidades" v-bind:key="e.name">
              <td> {{ e.nit }} </td>
              <td> {{ e.name }}</td>
              <td> {{ e.address }}</td>
              <td> {{ e.phone }}</td>
              <td> {{ e.email }} </td>
              <td> 
                <center>
                  <Button v-on:click="DeleteEntity(e.name)" label="Eliminar Entidad" icon="pi pi-times-circle"/>
                </center>  
             </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>
import gql from "graphql-tag";
import Button from 'primevue/button';
import Icon from 'primevue/button';


export default {
    name: "Entities",
    components: {
        Button,
        Icon
    },

     data: function() {
       return {
          allEntityDetail : Object, 
          name: null,
          entidades: [],
        }
      },


    apollo: {
        allEntityDetail: {
          query: gql`
          query Query {
                     allEntityDetail {
                       entidades {
                         nit
                         name
                         address
                         phone
                         email
                        }
                     }
                  }
                  `,       
            },
      },

      created: function() {
        this.$apollo.queries.allEntityDetail.refetch();
      },
    
    methods: {
        /* AllPatientDetail: function() {
            this.$apollo.query({
                query: gql`
                   query Query {
                     allEntityDetail {
                       entidades {
                         nit
                         name
                         address
                         phone
                         email
                        }
                    }
                  }
                  `,   
            }).then((response)=>{

            this.entidades = response.data.allEntityDetail.entidades
            console.log(this.entidades);
            
            }).catch((error)=>{
              console.log(error);
              alert('Se presento un error');
            });
        },  este cierra la funcion get*/

        
        DeleteEntity: function(name) {
            this.$apollo.mutate({
                mutation: gql`
                   mutation Mutation($name: String!) {
                        deleteEntity(name: $name)
                  }
                  `,   
                
                variables: {
                      name: name,
            }, 
            }).then(()=>{
                alert("Eliminada Exitoxamente");
                this.$apollo.queries.allEntityDetail.refetch();
            
            }).catch((error)=>{
              console.log(error)
              alert('No fue posible eliminar la entidad');
            });
        }, 

      }  
    } 
</script>

<style>

.tableEntity{
  table-layout: fixed;
  width: auto;
  border-collapse: collapse;
  border: 5px solid rgb(0, 2, 128);
}

.captionEntity{
  font: bold 400% monospace; 
  margin-bottom: 20px;
  margin-top: 20px;
  background-color: cornflowerblue;
}

.trentity {
  border: 5px solid rgb(0, 2, 128);
}

.trentity th{
  text-align: center;
  font-size: 25px;
  background-color: rgb(84, 175, 175);
}

.bodyentity td{
  background-color: rgba(245, 248, 248, 0.842);
}


 



</style>