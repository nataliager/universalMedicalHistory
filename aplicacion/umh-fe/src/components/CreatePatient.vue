<template>
  <div class="signUp_patient">
    <div class="container_signUp_patient">
      <h2>FORMULARIO REGISTRO PACIENTE</h2>
      <form v-on:submit.prevent="processSignUp">
        <div class="field">
          <label>Tipo documento</label>
          <select v-model="this.tipo_documento">
            <option disabled value="">Seleccione tipo de documento</option>
            <option>CC</option>
            <option>PA</option>
            <option>CE</option>
          </select>
        </div>
        <div class="field">
          <label>Número documento</label>
          <input
            type="text"
            v-model="this.numero_documento"
            placeholder="Número documento"
          />
        </div>
        <div class="field">
          <label>Nombre completo</label>
          <input
            type="text"
            v-model="this.fullname"
            placeholder="Nombre completo"
          />
        </div>
        <div class="field">
          <label>Sexo</label>
          <select v-model="this.sex">
            <option disabled value="">Seleccione el sexo</option>
            <option>F</option>
            <option>M</option>
            <option>O</option>
          </select>
        </div>
        <div class="field">
          <label>Edad</label>
          <input type="number" v-model="this.age" placeholder="Edad" />
        </div>
        <div class="field">
          <label>Fecha de nacimiento</label>
          <input
            type="datetime-local"
            v-model="this.dateBirth"
            placeholder="Fecha nacimiento"
          />
        </div>

        <div class="field">
          <label>Tipo de sangre</label>
          <select v-model="this.bloodType">
            <option disabled value="">Seleccione el tipo de sangre</option>
            <option>O+</option>
            <option>O-</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
          </select>
        </div>
        <div class="field">
          <label>EPS</label>
          <input type="text" v-model="this.EPS" placeholder="EPS" />
        </div>
        <div class="field">
          <label>Dirección</label>
          <input type="text" v-model="this.address" placeholder="Dirección" />
        </div>
        <div class="field">
          <label>Teléfono</label>
          <input type="text" v-model="this.phone" placeholder="Teléfono" />
        </div>
        <div class="field">
          <label>Email</label>
          <input type="email" v-model="this.email" placeholder="Email" />
        </div>

        <div class="field">
          <label>Ocupación</label>
          <select v-model="this.ocupation">
            <option disabled value="">Sel. una opción</option>
            <option>Desempleado</option>
            <option>Trabajador</option>
            <option>Trabajador por cuenta ajena</option>
          </select>
        </div>

        <div class="field">
          <label>Estado civil</label>
          <select v-model="this.maritalStatus">
            <option disabled value="">Seleccione estado civil</option>
            <option>Soltera/o</option>
            <option>Unión libre</option>
            <option>Casada/o</option>
            <option>Divorciada/o</option>
            <option>Viuda/o</option>
          </select>
        </div>

        <div class="Boton">
          <button>REGISTRAR PACIENTE</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import Button from "primevue/button";
import Icon from "primevue/button";

export default {
  name: "createPatient",
  components: {
    Button,
    Icon,
  },

  data: function () {
    return {
      tipo_documento: "",
      numero_documento: "",
      fullname: "",
      sex: "",
      age: "",
      dateBirth: "",
      bloodType: "",
      EPS: "",
      address: "",
      phone: "",
      email: "",
      ocupation: "",
      maritalStatus: "",
    };
  },

  methods: {
    validateEmail: async function (email) {
      // Expresiones regulares nombre@dominio.co
      const regex = /\S+@\S+\.\S+/;
      return regex.test(email);
    },

    processSignUp: async function () {
      if (!this.tipo_documento ||!this.numero_documento || !this.fullname ||!this.sex ||!this.age ||!this.dateBirth ||!this.bloodType ||!this.EPS ||!this.address ||!this.phone ||!this.email ||!this.ocupation ||!this.maritalStatus) {
        alert("Todos los campos son obligatorios");
      } else if (!this.validateEmail(this.email)) {
        alert("Correo no valido");
      } else {
        const patient = {
          tipo_documento: this.tipo_documento,
          numero_documento: this.numero_documento,
          fullname: this.fullname,
          sex: this.sex,
          age: this.age,
          dateBirth: this.dateBirth,
          bloodType: this.bloodType,
          EPS: this.EPS,
          address: this.address,
          phone: this.phone,
          email: this.email,
          ocupation: this.ocupation,
          maritalStatus: this.maritalStatus,
        };

        await this.$apollo
          .mutate({
            mutation: gql`
              mutation Mutation($data: PatientpInput) {
                createPatient(patientInput: $data)
                }
            `,
            variables: {
              data: patient,
            },
            
          }).then((response) => {
             console.log(response.data.createPatient);
            alert('Paciente registrado con exito');
            this.$router.push({ name: "patients" });

          })
          .catch(() => {
            alert("ERROR: Fallo en el registro.");
          });
      }
    },
  },
};
</script>
<style scoped>
.signUp_patient {
  margin: 0;
  padding: 0%;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

}

.Boton{
  display:block;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto; 
}

.container_signUp_patient {
  border: 3px solid #283747;
  border-radius: 10px;
  width: 60%;
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

.signUp_patient h2 {
  color: #283747;
  font: 250% Bahnschrift;
  font-weight: bold;
}

.signUp_patient form {
  width: 70%;
justify-content: space-between;

  width: 100%;
  max-width: 800px;
  margin-top: 2.8rem;
  margin-right: auto;
  margin-left: auto;
  
}

.signUp_patient input,
select {
  height: 35px;
  width: 100%;
  background-color: rgba(197, 246, 246, 0.966);
  box-sizing: border-box;
  padding: 10px 20px;
  margin: 5px 0;
  border: 1px solid #283747;
}
.signUp_patient button {
  width: 100%;
  height: 40px;

  color: #e5e7e9;
  font: Bahnschrift;
  background: #28517e;
  border: 1px solid #e5e7e9;

  border-radius: 5px;
  padding: 10px 25px;
  margin: 5px 0 25px 0;
}

.signUp_patient button:hover {
  color: #e5e7e9;
  background: #99303e;
  border: 1px solid #283747;
}
main {
  padding: 3.5rem 0;

  background-color: lightgray;
}

h1 {
  font-size: 2rem;
  font-weight: bold;

  text-align: center;
  text-transform: uppercase;

  color: #707070;
}

form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  width: 100%;
  max-width: 800px;
  margin-top: 2.8rem;
  margin-right: auto;
  margin-left: auto;
}

.field {
  display: flex;
  flex-direction: column;

  width: 14rem;
  margin: 0.5rem 0;
}

.field label {
  font-size: 16px;

  margin-bottom: 0.2rem;
  margin-top: -04%;


  color: #696969;
}

.field select,input {
  font-size: 16px;

  width: 225px;
  height: 40px;
  padding-left: 0.5rem;

  border: 2px solid #696969;
  border-radius: 5px;
}

.textBox {
  display: flex;
  flex-direction: column;

  width: 25rem;
  margin: 0.75rem 0;
}

textarea {
  font-size: 1.1rem;

  max-width: 100%;
  height: 5rem;
  max-height: 15rem;
  padding-top: 0.5rem;
  padding-left: 0.5rem;

  border: 2px solid #696969;
  border-radius: 5px;
}

.textBox label {
  font-size: 0.9rem;

  margin-bottom: 0.2rem;

  color: #696969;
}

.gustos {
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 20rem;
  margin: 0.75rem 0;
}

.gustos label {
  font-size: 0.9rem;

  margin-bottom: 0.2rem;

  color: #696969;
}

.gustos div {
  display: flex;
  justify-content: flex-start;

  width: 100%;
  padding-left: 0.5rem;
}

.gustos div input {
  width: 1rem;
  height: 1rem;
}

.submit {
  display: flex;
  justify-content: center;

  width: 100%;
  margin-top: 1.75rem;
}

.submit button {
  font-size: 1.1rem;

  padding: 1rem 1.5rem;

  cursor: pointer;

  border: 2px solid #696969;
  border-radius: 4px;
  background-color: lightcyan;
}
</style>