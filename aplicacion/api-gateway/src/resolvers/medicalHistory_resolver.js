const medicalHistoryResolver = {
    Query: {

        //Obtener hc por numero_documento
        getMedicalHistory: (_, {document}, { dataSources }) => {
            return dataSources.mhAPI.getMedicalHistory(document)
        },

    },

    Mutation: {

        //Crear hc
        createMedicalHistory: async(_, { medicalhistoryInput }, { dataSources }) => {

            const mh_Input = {
                document: medicalhistoryInput.document,
                fullname: medicalhistoryInput.fullname,
                sex: medicalhistoryInput.sex,
                age: medicalhistoryInput.age,
                dateBirth: medicalhistoryInput.dateBirth,
                bloodType: medicalhistoryInput.bloodType,
                eps: medicalhistoryInput.eps,
                address: medicalhistoryInput.address,
                phone: medicalhistoryInput.phone,
                email: medicalhistoryInput.email,
                occupation: medicalhistoryInput.occupation,
                maritalStatus: medicalhistoryInput.maritalStatus,
                hc: medicalhistoryInput.hc,
                weight: medicalhistoryInput.weight,
                height: medicalhistoryInput.height,
                diseases: medicalhistoryInput.diseases,
                hdiseases: medicalhistoryInput.hdiseases,
                medication: medicalhistoryInput.medication,
                surgeries: medicalhistoryInput.surgeries,
                nabortion: medicalhistoryInput.nabortion,
                planification: medicalhistoryInput.planification,
                allergies: medicalhistoryInput.allergies,
                nemergencyContact: medicalhistoryInput.nemergencyContact,
                pemergencyContact: medicalhistoryInput.pemergencyContact,
                motive: medicalhistoryInput.motive,
                dateConsult: medicalhistoryInput.dateConsult,
                typeConsult: medicalhistoryInput.typeConsult,
                entity: medicalhistoryInput.entity,
                doctor: medicalhistoryInput.doctor,
                nmedication: medicalhistoryInput.nmedication,
                prescription: medicalhistoryInput.prescription,
                evolution: medicalhistoryInput.evolution,
                consultation: medicalhistoryInput.consultation,
            }
            return await dataSources.mhAPI.createMedicalHistory(mh_Input);
        },

        //update hc
        updateMedicalHistory: async(_, {document, medicalhistoryInput  }, { dataSources}) => {
            /*const mh_Input = {
                document: mhInput.document,
                fullname: mhInput.fullname,
                sex: mhInput.sex,
                age: mhInput.age,
                dateBirth: mhInput.dateBirth,
                bloodType: mhInput.bloodType,
                eps: mhInput.eps,
                address: mhInput.address,
                phone: mhInput.phone,
                email: mhInput.email,
                occupation: mhInput.occupation,
                maritalStatus: mhInput.maritalStatus,
                hc: mhInput.hc,
                weight: mhInput.weight,
                height: mhInput.height,
                diseases: mhInput.diseases,
                medication: mhInput.medication,
                surgeries: mhInput.surgeries,
                nabortion: mhInput.nabortion,
                planification: mhInput.planification,
                allergies: mhInput.allergies,
                nemergencyContact: mhInput.nemergencyContact,
                pemergencyContact: mhInput.pemergencyContact,
                motive: mhInput.motive,
                dateConsult: mhInput.dateConsult,
                typeConsult: mhInput.typeConsult,
                entity: mhInput.entity,
                doctor: mhInput.doctor,
                nmedication: mhInput.nmedication,
                prescription: mhInput.prescription,
                evolution: mhInput.evolution,
                consultation: mhInput.consultation,
            } */
            return await dataSources.mhAPI.updateMedicalHistory(document, medicalhistoryInput);
        },

        //delete hc
        deleteMedicalHistory: async(_, {document}, { dataSources }) => {
            return await dataSources.mhAPI.deleteMedicalHistory(document);
        },

    }
};
module.exports = medicalHistoryResolver;