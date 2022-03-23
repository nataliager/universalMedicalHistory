<template>
    <div class="scroll-table-container">
      <div id="pacientes">
        <table class="tablepatients">
          <caption class="captionPatients">
            PACIENTES REGISTRADOS
          </caption>
          <thead class="headPatients">
            <tr>
              <th>Tipo de Documento</th>
              <th>Numero de Documento</th>
              <th>Nombre del Paciente</th>
              <th>Sexo</th>
              <th>Edad</th>
              <th>Fecha de Nacimiento</th>
              <th>Tipo de Sangre</th>
              <th>Eps</th>
              <th>Direccion</th>
              <th>Telefono</th>
              <th>Email</th>
              <th>Ocupacion</th>
              <th>Estado Civil</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody class = "bodyPatients">
            <tr v-for="patient in allPatientDetail.pacientes" v-bind:key="patient.numero_documento">
              <td> {{ patient.tipo_documento }} </td>
              <td> {{ patient.numero_documento }}</td>
              <td> {{ patient.fullname }}</td>
              <td> {{ patient.sex }}</td>
              <td> {{ patient.age }} </td>
              <td> {{ patient.dateBirth }} </td>
              <td> {{ patient.bloodType }} </td>
              <td> {{ patient.EPS }} </td>
              <td> {{ patient.address }} </td>
              <td> {{ patient.phone }} </td>
              <td> {{ patient.email }} </td>
              <td> {{ patient.ocupation }} </td>
              <td> {{ patient.maritalStatus }} </td>
                <td> 
                <center>
                  <Button v-on:click="DeletePatient(patient.numero_documento)" label="Eliminar Paciente" icon="pi pi-times-circle"/>
                </center>  
             </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>


<script> 
import gql from 'graphql-tag';
import Button from 'primevue/button';
import Icon from 'primevue/button';

export default {
    name: "Patients",
    components:{
       Button,
       Icon
    },
    data: function() {
       return {
        allPatientDetail: Object, 
        numero_documento: null,
        pacientes: [],
        }
    },

    apollo: {
        allPatientDetail: {
          query: gql`
          query Query {
                      allPatientDetail {
                        pacientes {
                          tipo_documento
                          numero_documento
                          fullname
                          sex
                          age
                          dateBirth
                          bloodType
                          EPS
                          address
                          phone
                          email
                          ocupation
                          maritalStatus
                        }
                      }
                    }
                  `,       
            },
      },
    
       created: function() {
          this.$apollo.queries.allPatientDetail.refetch();
      },

    methods: {

        DeletePatient: function(numero_documento) {
            this.$apollo.mutate({
                mutation: gql`
                   mutation Mutation($numeroDocumento: String!) {
                       deletePatient(numero_documento: $numeroDocumento)
                            }
                  `,   
                
                variables: {
                      numeroDocumento: numero_documento,
            }, 
            }).then(()=>{
                alert("Eliminado Exitoxamente");
                 this.$apollo.queries.allPatientDetail.refetch();
              
            
            }).catch((error)=>{
              console.log(error)
              alert('No fue posible eliminar el paciente');
            });
        }, 



      } /* Este cierra el metodo */
    } /* Este cierra el export*/
</script>


<style>
.captionPatients {
  font: bold 400% monospace; 
  margin-bottom: 20px;
  margin-top: 20px;
  background-color: cornflowerblue;
}
.tablepatients {
  table-layout: fixed;
  width: auto;
  border-collapse: collapse;
  border: 5px solid rgb(83, 70, 68);
}
.headPatients{
  border: 5px solid rgb(83, 70, 68);
  background-color:rgb(83, 70, 68);
}
.headPatients th{
  font-size: 20px;
  font: bold serif; 
}
.bodyPatients{
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(245, 248, 248, 0.842);

}
.bodyPatients td{
  text-align: center;
  font: oblique bold serif;
  font-size: 15px; 

}

</style>