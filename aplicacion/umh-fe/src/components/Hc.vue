<template>

<div class="container_document">
      <h2 id = "titu">Buscar historia clínica</h2>

      <form class="formulario" v-on:submit.prevent="getMedicalHistory">
        <input type="text" v-model="this.document" placeholder="No documento" />
        <br/>

        <Button label="Buscar" icon="pi pi-search" type="submit"/>
      </form>
</div>

<div v-if="loaded" class = "tabla">
      <table class="table-stripped-bordered3">
        <caption class="captionHc">
          HISTORIA CLINICA No <span>{{hc}}</span>
        </caption>
        <thead>
          <tr>
            <th colspan = "2"><center><h3>Historia clínica</h3></center></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan = "2" ><center><h3>Datos personales</h3></center></td>
          </tr>
          <tr>
            <td>No documento</td>
            <td>{{document}}</td>
          </tr>
          <tr>
              <td>Nombre completo</td>
              <td>{{fullname}}</td>
        </tr>
        <tr>
              <td>Sexo</td>
              <td>{{sex}}</td>
        </tr>
        <tr>
              <td>Edad</td>
              <td>{{age}}</td>
        </tr>
         <tr>
              <td>Fecha nacimiento</td>
              <td>{{dateBirth}}</td>
        </tr>
         <tr>
              <td>Tipo sangre</td>
              <td>{{bloodType}}</td>
        </tr>
         <tr>
              <td>EPS</td>
              <td>{{eps}}</td>
        </tr>
         <tr>
              <td>Dirección</td>
              <td>{{address}}</td>
        </tr>
         <tr>
              <td>Telefono</td>
              <td>{{phone}}</td>
        </tr>
         <tr>
              <td>Email</td>
              <td>{{email}}</td>
        </tr>
         <tr>
              <td>Ocupación</td>
              <td>{{occupation}}</td>
        </tr>
         <tr>
            <td>Estado civil</td>
            <td>{{maritalStatus}}</td>
        </tr>
        <tr>
            <td colspan = "2" ><center><h3>Datos Exploratorios</h3></center></td>
        </tr>
        <tr>
            <td>No historia clínica</td>
            <td>{{hc}}</td>
        </tr>
         <tr>
            <td>Peso</td>
            <td>{{weight}}</td>
        </tr>
         <tr>
            <td>Estatura</td>
            <td>{{height}}</td>
        </tr>
         <tr>
            <td>Enfermedad</td>
            <td>{{diseases}}</td>
        </tr>
         <tr>
            <td>Enfermedades hereditarias</td>
            <td>{{hdiseases}}</td>
        </tr>
        <tr>
            <td>Medicamentos consumidos</td>
            <td>{{medication}}</td>
        </tr>
        <tr>
            <td>Cirugías realizadas</td>
            <td>{{surgeries}}</td>
        </tr>
        <tr>
            <td>No abortos</td>
            <td>{{nabortion}}</td>
        </tr>
        <tr>
            <td>Alergias</td>
            <td>{{allergies}}</td>
        </tr>
        <tr>
            <td colspan = "2" ><center><h3>Datos de contacto</h3></center></td>
        </tr>
        <tr>
            <td>Nombre contacto de emergencia</td>
            <td>{{nemergencyContact}}</td>
        </tr>
        <tr>
            <td>Telefono contacto de emergencia</td>
            <td>{{pemergencyContact}}</td>
        </tr>
        <tr>
            <td colspan = "2" ><center><h3>Datos de consulta</h3></center></td>
        </tr>
        <tr>
            <td>Motivo de consulta</td>
            <td>{{motive}}</td>
        </tr>
        <tr>
            <td>Fecha de consulta</td>
            <td>{{dateConsult}}</td>
        </tr>
        <tr>
            <td>Tipo de consulta</td>
            <td>{{typeConsult}}</td>
        </tr>
        <tr>
            <td>Entidad de la consulta</td>
            <td>{{entity}}</td>
        </tr>
        <tr>
            <td>Doctor engargado</td>
            <td>{{doctor}}</td>
        </tr>
        <tr>
            <td>Medicamentos recetados</td>
            <td>{{medication}}</td>
        </tr>
        <tr>
            <td>Prescripción</td>
            <td>{{prescription}}</td>
        </tr>
        <tr>
            <td>Evolución</td>
            <td>{{evolution}}</td>
        </tr>
        <tr>
            <td>Remitido a</td>
            <td>{{consultation}}</td>
        </tr> 
        </tbody>         
      </table>
            <div class="BotonDeleteHc">
                <center>
                  <Button v-on:click="DeleteHc(document)" label="Eliminar Historia Clinica" icon="pi pi-times-circle"/>
                </center>  
            </div> 
    </div>   
</template>

<script> 
import gql from 'graphql-tag';
import Button from 'primevue/button';
import Icon from 'primevue/button';
export default {
    name: "hc",
    components:{
       Button,
       Icon
    },
    data: function(){
        
        return {
            document: '',
            fullname: '',
            sex: '',
            age: '',
            dateBirth: '',
            bloodType: '',
            eps : '',
            address: '',
            phone: '',
            email: '',
            occupation: '',
            maritalStatus: '',
            hc: '',
            weight:'',
            height:'',
            diseases: '',
            hdiseases: '',
            medication: '',
            surgeries: '',
            nabortion: '',
            planification: '',
            allergies: '',
            nemergencyContact: '',
            pemergencyContact: '',
            motive: '',
            dateConsult: '',
            typeConsult: '',
            entity: '',
            doctor: '',
            nmedication: '',
            prescription: '',
            evolution: '',
            consultation: '',
            loaded: false,
            
        }
    },
    
    
    methods: {
        getMedicalHistory: function(document) {
            document = this.document,
            this.$apollo.query({
                query: gql`
                    query Query($document: String!) {
                        getMedicalHistory(document: $document) {
                            document
                            fullname
                            sex
                            age
                            dateBirth
                            bloodType
                            eps
                            address
                            phone
                            email
                            occupation
                            maritalStatus
                            hc
                            weight
                            height
                            diseases
                            hdiseases
                            medication
                            surgeries
                            nabortion
                            planification
                            allergies
                            nemergencyContact
                            pemergencyContact
                            motive
                            dateConsult
                            typeConsult
                            entity
                            doctor
                            nmedication
                            prescription
                            evolution
                            consultation
                        }
                        }
                  `,
                  variables: {
                      document: this.document,
                      },
                      }).then((result)=>{
                            this.document = result.data.getMedicalHistory.document,
                            this.fullname =  result.data.getMedicalHistory.fullname,
                            this.sex = result.data.getMedicalHistory.sex,
                            this.age = result.data.getMedicalHistory.age,
                            this.dateBirth = result.data.getMedicalHistory.dateBirth,
                            this.bloodType = result.data.getMedicalHistory.bloodType,
                            this.eps = result.data.getMedicalHistory.eps,
                            this.address = result.data.getMedicalHistory.address,
                            this.phone = result.data.getMedicalHistory.phone,
                            this.email = result.data.getMedicalHistory.email,
                            this.occupation = result.data.getMedicalHistory.occupation,
                            this.maritalStatus = result.data.getMedicalHistory.maritalStatus,
                            this.hc = result.data.getMedicalHistory.hc,
                            this.weight = result.data.getMedicalHistory.weight,
                            this.height = result.data.getMedicalHistory.height,
                            this.diseases = result.data.getMedicalHistory.diseases,
                            this.hdiseases = result.data.getMedicalHistory.hdiseases,
                            this.medication = result.data.getMedicalHistory.medication,
                            this.surgeries = result.data.getMedicalHistory.surgeries,
                            this.nabortion = result.data.getMedicalHistory.nabortion,
                            this.planification = result.data.getMedicalHistory.planification,
                            this.allergies = result.data.getMedicalHistory.allergies,
                            this.nemergencyContact = result.data.getMedicalHistory.nemergencyContact,
                            this.pemergencyContact = result.data.getMedicalHistory.pemergencyContact,
                            this.motive = result.data.getMedicalHistory.motive,
                            this.dateConsult = result.data.getMedicalHistory.dateConsult,
                            this.typeConsult = result.data.getMedicalHistory.typeConsult,
                            this.entity = result.data.getMedicalHistory.entity,
                            this.doctor = result.data.getMedicalHistory.doctor,
                            this.nmedication = result.data.getMedicalHistory.nmedication,
                            this.prescription = result.data.getMedicalHistory.prescription,
                            this.evolution = result.data.getMedicalHistory.evolution,
                            this.consultation = result.data.getMedicalHistory.doctor,
                            this.loaded = true
                        
                        }).catch((error)=>{
                            console.log(error);
                            alert('No se encuentra historia clínica registrada con el No de documento '+ this.document);
                            this.$router.push({ name: "createHc" });
                            });
        },/* Cierra el get */
        
        DeleteHc: function(document) {
            this.$apollo.mutate({
                mutation: gql`
                   mutation Mutation($document: String!) {
                         deleteMedicalHistory(document: $document)
                    }
                  `,   
                
                variables: {
                      document: document,
            }, 
            }).then(()=>{
                alert("Eliminado Exitoxamente");
                this.$router.push({ name: "createHc" });                 
            
            }).catch((error)=>{
              console.log(error)
              alert('No fue posible eliminar la entidad');
            });
        },

      } /* Cierra methods */ 
    }  /* Cierra el export */ 
</script>


<style>


.captionHc{
    font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; 
    color: #0a0808dc; 
    font-size: 50px; 
    font-weight: 400; 
    text-align: center; 
    margin-top: 50px; 
    margin-bottom: 30px; 
    overflow: hidden; 
    padding: 20px; 
    border-radius: 35px 0px 35px 0px; 
    -moz-border-radius: 35px 0px 35px 0px; 
    -webkit-border-radius: 35px 0px 35px 0px; 
    border: 10px solid #5878ca;
    }

    .BotonDeleteHc button{
        color: #E5E7E9;
        background: #99303e;
        border: 1px solid #283747;
        margin-bottom: 20px ;
        margin-top: 15px ;
        margin-left: 820px;
    }
 .historia_clinica{
        margin: 0;
        padding: 0%;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items:center ;
    }

    .historia_clinica h1{
        font-size: 60px;
        font-family:  Bahnschrift Bold;
        color: #051825;
    }

    .historia_clinica h2{
        font-size: 40px;
        font-family:  Bahnschrift Bold;
        color: #283747;
    }
     .historia_clinica h3{
        font-size: 35px;
        font-family:  Bahnschrift Bold;
        color: #283747;
    }


    .historia_clinica span{
        color: rgb(182, 32, 65);
        font-weight: bold;
    }
    .table-stripped-bordered3 caption {
        font-family:  Bahnschrift Bold;
    }

    .container_document input{
        height: 35px;
        width:center;
        background-color: rgba(197, 246, 246, 0.966);
        box-sizing: border-box;
        padding: 10px 20px;
        margin: 5px 0;
        margin-top: -40px;
        margin-left: 122px;
        border: 1px solid #283747;
    }

    .container_document button{
        padding: 10px;
        margin-top: -05px;
        margin-left: 190px;
        margin-bottom: 20px;
        border: 1px solid #283747;
    }

.container_document {
  border: 3px solid #283747;
  border-radius: 10px solid;
  width: 30%;
  height: 100%;
  background-color: rgba(22, 83, 83, 0.822);
  font: Bahnschrift Bold white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 469px;
  margin-top: 30px;
  position: static;
  padding: 200%;
  padding: 0px 0px 0px 0px;
  background-repeat: no-repeat;
}


h2 {
  color: #f1f5fa;
  font: 150% Bahnschrift Bold;
  font-weight: bold;
}

.table-stripped-bordered3 h3 {
  color: #030101;
  font: 150% Bahnschrift Bold;
  font-weight: bold;
}


.tabla table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
  padding: 7px;
  border-spacing: 3px;
  width: 1100px;
  margin-left: 186px;

}
.table-stripped-bordered3 td {
  text-align: left;
  background-color: rgba(238, 232, 232, 0.712);
}
.table-stripped-bordered3 tr:nth-child(even) {
  /*renglones pares*/
  background-color: #ffffff;
}
.table-stripped-bordered3 tr:nth-child(odd) {
  /*renglones impares*/
  background-color: #c2ceda;
}
.table-stripped-bordered3 th {
  color: white;
  background: #3c5570ed;
}
    
</style>