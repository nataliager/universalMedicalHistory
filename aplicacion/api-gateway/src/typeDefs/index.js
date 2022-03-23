//Se llama al typedef (esquema) de cada submodulo
const userTypeDefs = require('./user_type_defs');
const patientTypeDefs = require('./patient_type_defs');
const medicalhistoryTypeDefs = require('./medicalHistory_type_defs');
const entityTypeDefs = require('./entity_type_defs');
//Se unen
const schemasArrays = [userTypeDefs, patientTypeDefs, medicalhistoryTypeDefs, entityTypeDefs];
//Se exportan
module.exports = schemasArrays;