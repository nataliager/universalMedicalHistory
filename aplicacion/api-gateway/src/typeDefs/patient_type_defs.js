const { gql } = require('apollo-server');
const patientTypeDefs = gql `

    input PatientpInput {
        tipo_documento: String!
        numero_documento: String!
        fullname: String!
        sex: String!
        age: Int!
        dateBirth: String!
        bloodType: String!
        EPS: String!
        address: String!
        phone: String!
        email: String!
        ocupation: String!
        maritalStatus: String!
    }
    type PatientDetail {
        tipo_documento: String!
        numero_documento: String!
        fullname: String!
        sex: String!
        age: Int!
        dateBirth: String!
        bloodType: String!
        EPS: String!
        address: String!
        phone: String!
        email: String!
        ocupation: String!
        maritalStatus: String!
    }
    input PatientUpdate {
        tipo_documento: String!
        numero_documento: String!
        fullname: String!
        sex: String!
        age: Int!
        dateBirth: String!
        bloodType: String!
        EPS: String!
        address: String!
        phone: String!
        email: String!
        ocupation: String!
        maritalStatus: String!
    }

    type Patients {
        pacientes: [PatientDetail]!
    }

    extend type Query {
        
        patientDetailById(numero_documento: String!): PatientDetail!
        allPatientDetail: Patients!
    }

    extend type Mutation {

        createPatient(patientInput: PatientpInput): String!
        updatePatient(numero_documento: String, patientInput: PatientUpdate): PatientDetail!
        deletePatient(numero_documento: String!): String!
    }`;

module.exports = patientTypeDefs;