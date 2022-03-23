<template>
   <div class="signUp_hc">
       <div class="container_signUp_hc">
           <h2>FORMULARIO REGISTRO HISTORIA CLÍNICA</h2>
           <form v-on:submit.prevent="processSignUp" >
               <div class="datos">
                <h1 id= "datos">DATOS PERSONALES</h1>
                </div>
                <input type="text" v-model="this.document" placeholder="Número documento" >
                <br/>
                
                <input type="text" v-model="this.fullname" placeholder="Nombre completo">
                <br/>

                <select v-model="this.sex">
                    <option disabled value="">Seleccione el sexo</option>
                    <option value = "F">F</option>
                    <option value = "M">M</option>
                    <option value = "O">O</option>
                </select>
                <br/>

                <input type="number" v-model="this.age" placeholder="Edad">
                <br/>

                <input type="datetime-local" v-model="this.dateBirth" placeholder="Fecha nacimiento">
                <br/>

                 <select v-model="this.bloodType">
                    <option disabled value="">Seleccione el tipo de sangre</option>
                    <option value = "O+" >O+</option>
                    <option value = "O-" >O-</option>
                    <option value = "A+" >A+</option>
                    <option value = "A-" >A-</option>
                    <option value = "B+" >B+</option>
                    <option value = "B-" >B-</option>
                    <option value = "AB+" >AB+</option>
                    <option value = "AB-" >AB-</option>
                </select>
                <br/>

                <input type="text" v-model="this.eps" placeholder="EPS">
                <br/>

                <input type="text" v-model="this.address" placeholder="Dirección">
                <br/>

                <input type="text" v-model="this.phone" placeholder="Telefono">
                <br/>

                <input type="email" v-model="this.email" placeholder="Email">
                <br/>

                 <select v-model="this.occupation">
                    <option disabled value="">Seleccione ocupación</option>
                    <option value = "Estudiante" >Estudiante</option>
                    <option value = "Empleado" >Empleado</option>
                    <option value = "Independiente" >Independiente</option>
                    <option value = "Pensionado" >Pensionado</option>
                    <option value = "Otros" >Otros</option>
                </select>
                <br/> 
    
                <select v-model="this.maritalStatus">
                    <option disabled value="">Seleccione estado civil</option>
                    <option value = "Soltera/o" >Soltera/o</option>
                    <option value = "Union libre" >Unión libre</option>
                    <option value = "Casada/o" >Casada/o</option>
                    <option value = "Divorciada/o" >Divorciada/o</option>
                    <option value = "Viuda/o" >Viuda/o</option>
                </select>
                <br/>

                <h1>DATOS EXPLORATORIOS</h1>

                <input type="text" v-model="this.hc" placeholder="N° historia clínica">
                <br/>

                <input type="number" v-model="this.weight" placeholder="Peso">
                <br/>

                <input type="number" v-model="this.height" placeholder="Altura">
                <br/>

                <input type="text" v-model="this.diseases" placeholder="Enfermedades">
                <br/>

                <input type="text" v-model="this.hdiseases" placeholder="Enfermedades hereditarias">
                <br/>

                <textarea type="text" v-model="this.medication" placeholder="Medicamentos que toma" ></textarea>
                <br/>

                <textarea type="text" v-model="this.surgeries" placeholder="Cirugías realizadas" ></textarea>
                <br/>

                <input type="number" v-model="this.nabortion" placeholder="N° abortos">
                <br/>

                <select v-model="this.planification">
                    <option disabled value="">Planifica</option>
                    <option value = "Si" >Si</option>
                    <option value = "No" >No</option>
                    <option value = "No Responde" >No responde</option>
                </select>
                <br/>

                <textarea type="text" v-model="this.allergies" placeholder="Alergias" ></textarea>
                <br/>

                <h1>DATOS DE CONTACTO</h1>

                <input type="text" v-model="this.nemergencyContact" placeholder="Nombre contacto de emergencia">
                <br/>

                <input type="text" v-model="this.pemergencyContact" placeholder="Telefono contacto de emergencia">
                <br/>

                <h1>DATOS DE CONSULTA</h1>

                <textarea type= "text" v-model="this.motive" placeholder="Motivo de consulta" ></textarea>
                <br/>

                <input type="datetime-local" v-model="this.dateConsult" placeholder="Fecha de consulta">
                <br/>

                <input type="text" v-model="this.typeConsult" placeholder="Tipo de consulta">
                <br/>

                <input type="text" v-model="this.entity" placeholder="Entidad donde se realizó la consulta">
                <br/>

                <input type="text" v-model="this.doctor" placeholder="Doctor encargado">
                <br/>

                <h1>ORDENES MEDICAS</h1>

                <textarea  type="text" v-model="this.nmedication" placeholder="Medicamentos recetados" ></textarea>
                <br/>

                <textarea type="text" v-model="this.prescription" placeholder="Prescripción médica" ></textarea>
                <br/>

                <textarea type="text" v-model="this.evolution" placeholder="Evolución" ></textarea>
                <br/>

                <textarea type="text" v-model="this.consultation" placeholder="Remitido a" ></textarea>
                <br/>

                <Button label="Registrar Historia Clinica" icon="pi pi-check" class="p-button-rounded p-button-info" type="submit"/> 

            </form>
        </div>
    </div>     
</template>

<script>

import gql from 'graphql-tag';
import Button from 'primevue/button';
import Icon from 'primevue/button';


export default {

    name: "createHc",
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
            
        }
    },
    
    methods: {

        validateEmail: function(email) {
            // Expresiones regulares nombre@dominio.co
            const regex = /\S+@\S+\.\S+/
            return regex.test(email);
        },

        processSignUp: function(){
            console.log(this.document, this.fullname, this.sex, this.age, this.dateBirth, this.bloodType, this.eps, this.address, this.phone, this.email, this.occupation, this.maritalStatus, this.hc, this.weight, this.height, this.diseases, this.hdiseases, this.medication, this.allergies, this.nabortion, this.planification, this.allergies, this.nemergencyContact, this.pemergencyContact, this.motive, this.dateConsult, this.typeConsult, this.entity, this.doctor, this.nmedication, this.prescription, this.evolution, this.consultation )
            if(!this.document || !this.fullname || !this.sex || !this.age || !this.dateBirth || !this.bloodType || !this.eps || !this.address || !this.phone || !this.email || !this.occupation || !this.maritalStatus || !this.hc || !this.weight || !this.height || !this.diseases || !this.hdiseases || !this.medication|| !this.surgeries || !this.planification || !this.allergies || !this.nemergencyContact || !this.pemergencyContact || !this.motive || !this.dateConsult || !this.typeConsult || !this.entity || !this.doctor || !this.nmedication || !this.prescription || !this.evolution || !this.consultation){
                alert('Todos los campos son obligatorios')
            } else if(!this.validateEmail(this.email)){
                alert('Correo no valido')
            } else {

                this.$apollo
                .mutate({
                    mutation: gql`
                        mutation CreateMedicalHistory($medicalhistoryInput: MedicalHistorypInput!) {
                            createMedicalHistory(medicalhistoryInput: $medicalhistoryInput) {
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
                         medicalhistoryInput: {
                                document: this.document,
                                fullname: this.fullname,
                                sex: this.sex,
                                age: this.age,
                                dateBirth: this.dateBirth,
                                bloodType: this.bloodType,
                                eps: this.eps,
                                address: this.address,
                                phone: this.phone,
                                email: this.email,
                                occupation: this.occupation,
                                maritalStatus: this.maritalStatus,
                                hc: this.hc,
                                weight: this.weight,
                                height: this.height,
                                diseases: this.diseases,
                                hdiseases: this.hdiseases,
                                medication: this.medication,
                                surgeries: this.surgeries,
                                nabortion: this.nabortion,
                                planification: this.planification,
                                allergies: this.allergies,
                                nemergencyContact: this.nemergencyContact,
                                pemergencyContact: this.pemergencyContact,
                                motive: this.motive,
                                dateConsult: this.dateConsult,
                                typeConsult: this.typeConsult,
                                entity:this.entity,
                                doctor: this.doctor,
                                nmedication: this.nmedication,
                                prescription: this.prescription,
                                evolution: this.evolution,
                                consultation: this.consultation
                    }}
                }) .then((response) => {
                    console.log(response.data.createMedicalHistory);
                    alert("Se registro la hsitoria clínica exitosamente!!");
                    this.$router.push({ name: "hc" });                 

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
<style>

.signUp_hc{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

.container_signUp_hc {
        border: 3px solid  #283747;
        border-radius: 10px;
        width: 50%;
        height: 50%;
        background: #cfe2f7;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        position: static;
        background-image: url(https://i.pinimg.com/originals/4e/d9/55/4ed9551939c4af7745227b184dce4fc6.jpg);
        background-size: cover;
        
    }

    .signUp_hc h2{
        color: #283747;
        font: 200% Bahnschrift;
        font-weight: bold;
    }

    .signUp_hc h1{
        color: #283747;
        font: 170% Bahnschrift;
        font-weight: bold; 
    }

    .datos h1{
        color: #283747;
        font: 170% Bahnschrift;
        font-weight: bold;
        margin-top: -18%;
    }

    .signUp_hc form{
        width: 70%;
        
    }

.signUp_hc input,
select {
  height: 35px;
  width: 100%;
  background-color: rgba(197, 246, 246, 0.966);
  box-sizing: border-box;
  padding: 10px 20px;
  margin: 5px 0;

  border: 1px solid #283747;
}
.signUp_hc textarea{

  height: 60px;
  width: 100%;
  background-color: rgba(197, 246, 246, 0.966);
  box-sizing: border-box;
  padding: 10px 20px;
  margin: 5px 0;

  border: 1px solid #283747;
  }

.signUp_hc button{
    width: 100%;
    height: 40px;

    color: #E5E7E9;
    font:  mostery;
    background: #28517e;
    border: 1px solid #E5E7E9;

    border-radius: 5px;
    padding: 10px 25px;
    margin: 5px 0 25px 0;
    }

    .signUp_hc button:hover{
        color: #E5E7E9;
        background: #99303e;
        border: 1px solid #283747;
    }
    form{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	width: 100%;
	max-width: 800px;
	margin-top: 2.8rem;
	margin-right: auto;
	margin-left: auto;
}


</style>