const usersResolver = {
    Query: {

        //Obtener usuario por numero_documento
        userDetailById: (_, { numero_documento }, { dataSources }) => {
            if (numero_documento === null){
                // No esta autorizado
                throw new ApolloError('No autorizado', 401);
            }
            else
                return dataSources.userAPI.getUser(numero_documento)
        },

        //Obtener todos los usuarios
        allUserDetail: (_, {}, { dataSources }) => {
            return dataSources.userAPI.allUser();
        },

        //Obtener paciente por numero_documento
        patientDetailById: (_, { numero_documento }, { dataSources }) => {
            return dataSources.userAPI.getPatient(numero_documento);
        },

        //Obtener todos los pacientes
        allPatientDetail: (_, {}, { dataSources }) => {
            return dataSources.userAPI.getAllPatient();
        },

        //Obtener entidad por nombre
        entityDetailById: (_, { name }, { dataSources }) => {
            return dataSources.userAPI.getEntity(name);
        },

        //Obtener todos las entidades
        allEntityDetail: (_, {}, { dataSources }) => {
            return dataSources.userAPI.getAllEntity();
        },
    },


    Mutation: {

        //Crear usuario
        createUser: async(_, { userInput }, { dataSources }) => {

            const user_Input = {
                tipo_documento: userInput.tipo_documento,
                numero_documento: userInput.numero_documento,
                fullname: userInput.fullname,
                sex: userInput.sex,
                age: userInput.age,
                dateBirth: userInput.dateBirth,
                address: userInput.address,
                phone: userInput.phone,
                email: userInput.email,
                username: userInput.username,
                password: userInput.password,
                professionalCard: userInput.professionalCard,
                entity: userInput.entity,

            }
            return await dataSources.userAPI.createUser(user_Input);
        },

        //update user
        updateUser: async(_, { numero_documento, user}, { dataSources}) => {
                return await dataSources.userAPI.updateUser(numero_documento, user);
           },

        //delete user
        deleteUser: async(_, {numero_documento}, { dataSources }) => {
            return await dataSources.userAPI.deleteUser(numero_documento);
        },

        //Login user
        logIn: (_, { credentials }, { dataSources }) =>
            dataSources.userAPI.authRequest(credentials),
        refreshToken: (_, { refresh }, { dataSources }) =>
            dataSources.userAPI.refreshToken(refresh),

        //Create patient
        createPatient: async(_, { patientInput }, { dataSources }) => {

            const patient_Input = {
                tipo_documento: patientInput.tipo_documento,
                numero_documento: patientInput.numero_documento,
                fullname: patientInput.fullname,
                sex: patientInput.sex,
                age: patientInput.age,
                dateBirth: patientInput.dateBirth,
                bloodType: patientInput.bloodType,
                EPS: patientInput.EPS,
                address: patientInput.address,
                phone: patientInput.phone,
                email: patientInput.email,
                ocupation: patientInput.ocupation,
                maritalStatus: patientInput.maritalStatus,

            }
            return await dataSources.userAPI.createPatient(patient_Input);
        },

        //update patient
        updatePatient: async(_, { numero_documento, patientInput }, { dataSources }) => {
            /*/const patient_Input = {
                tipo_documento: patientInput.tipo_documento,
                numero_documento: patientInput.numero_documento,
                fullname: patientInput.fullname,
                sex: patientInput.sex,
                age: patientInput.age,
                dateBirth: patientInput.dateBirth,
                bloodType: patientInput.bloodType,
                eps: patientInput.eps,
                address: patientInput.address,
                phone: patientInput.phone,
                email: patientInput.email,
                ocupation: patientInput.ocupation,
                maritalStatus: patientInput.maritalStatus,
            } */
            return await dataSources.userAPI.updatePatient(numero_documento, patientInput);
        },

        //delete patient
        deletePatient: async(_, {numero_documento}, { dataSources }) => {
            return await dataSources.userAPI.deletePatient(numero_documento);
        },

        //Create entity
        createEntity: async(_, { entityInput }, { dataSources }) => {

            const entity_Input = {
                nit: entityInput.nit,
                name: entityInput.name,
                address: entityInput.address,
                phone: entityInput.phone,
                email: entityInput.email,
            }
            return await dataSources.userAPI.createEntity(entity_Input);
        },

        //update entity
        updateEntity: async(_, { name, entityInput}, { dataSources }) => {
            /*const entity_Input = {
                nit: entityInput.nit,
                name: entityInput.name,
                address: entityInput.address,
                phone: entityInput.phone,
                email: entityInput.email,
            }*/
            return await dataSources.userAPI.updateEntity(name, entityInput);
        },

        //delete entity
        deleteEntity: async(_, {name}, { dataSources }) => {
            return await dataSources.userAPI.deleteEntity(name);
            //return 'El usuario ha sido eliminado'
        },

    }
};
module.exports = usersResolver;