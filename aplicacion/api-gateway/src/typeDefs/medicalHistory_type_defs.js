const { gql } = require('apollo-server');
const medicalhistoryTypeDefs = gql `

    input MedicalHistorypInput {
        document: String!
        fullname: String!
        sex: String!
        age: Int!
        dateBirth: String!
        bloodType: String!
        eps: String!
        address: String!
        phone: String!
        email: String!
        occupation: String!
        maritalStatus: String!
        hc: String!
        weight: Int!
        height: Int!
        diseases: String!
        hdiseases: String!
        medication: String!
        surgeries: String!
        nabortion: Int!
        planification: String!
        allergies: String!
        nemergencyContact: String!
        pemergencyContact: String!
        motive: String!
        dateConsult: String!
        typeConsult: String!
        entity: String!
        doctor: String!
        nmedication: String!
        prescription: String!
        evolution: String!
        consultation: String!
    }
    type MedicalHistoryDetail {
        document: String!
        fullname: String!
        sex: String!
        age: Int!
        dateBirth: String!
        bloodType: String!
        eps: String!
        address: String!
        phone: String!
        email: String!
        occupation: String!
        maritalStatus: String!
        hc: String!
        weight: Int!
        height: Int!
        diseases: String!
        hdiseases: String!
        medication: String!
        surgeries: String!
        nabortion: Int!
        planification: String!
        allergies: String!
        nemergencyContact: String!
        pemergencyContact: String!
        motive: String!
        dateConsult: String!
        typeConsult: String!
        entity: String!
        doctor: String!
        nmedication: String!
        prescription: String!
        evolution: String!
        consultation: String!
    }
    input MedicalHistoryUpdate {
        document: String!
        fullname: String!
        sex: String!
        age: Int!
        dateBirth: String!
        bloodType: String!
        eps: String!
        address: String!
        phone: String!
        email: String!
        occupation: String!
        maritalStatus: String!
        hc: String!
        weight: Int!
        height: Int!
        diseases: String!
        hdiseases: String!
        medication: String!
        surgeries: String!
        nabortion: Int!
        planification: String!
        allergies: String!
        nemergencyContact: String!
        pemergencyContact: String!
        motive: String!
        dateConsult: String!
        typeConsult: String!
        entity: String!
        doctor: String!
        nmedication: String!
        prescription: String!
        evolution: String!
        consultation: String!
    }


    extend type Query {
        getMedicalHistory(document: String!): MedicalHistoryDetail!
        
    }

    extend type Mutation {
        createMedicalHistory(medicalhistoryInput : MedicalHistorypInput!): MedicalHistoryDetail!
        updateMedicalHistory(document: String!, medicalhistoryInput : MedicalHistoryUpdate!): MedicalHistoryDetail!
        deleteMedicalHistory(document: String!): String!
    }
    
`;

module.exports = medicalhistoryTypeDefs;