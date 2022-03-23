const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class UserAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = serverConfig.user_api_url;
    }

    //Metodos para user (doctor)
    async createUser(user) {
        user = new Object(JSON.parse(JSON.stringify(user)));
        return await this.post(`/user/`, user);
    }
    async allUser() {
        return await this.get(`/user/?numero_documento= `, {}, {
            headers: {
                'Authorization': this.context.token
            }
        });
    }

    async getUser(numero_documento) {
        return await this.get(`/user/${ numero_documento }/`, {}, {
            headers: {
                'Authorization': `${this.context.token}`
            }
        });
    }

    async updateUser(numero_documento, user) {
        let usuario = new Object(JSON.parse(JSON.stringify(user)));
        return await this.patch(`/user/${numero_documento}/`, usuario);
    }
    async deleteUser(numero_documento) {
        return await this.delete(`/user/${numero_documento}/`);
    }
    async authRequest(credentials) {
        credentials = new Object(JSON.parse(JSON.stringify(credentials)));
        return await this.post(`/login/`, credentials);
    }
    async refreshToken(token) {
        token = new Object(JSON.parse(JSON.stringify({ refresh: token })));
        return await this.post(`/refresh/`, token);
    }

    //Metodos patient
    async createPatient(patient) {
        patient = new Object(JSON.parse(JSON.stringify(patient)));
        return await this.post(`/patient/`, patient);
    }
    async getPatient(numero_documento) {
        return await this.get(`/patient/${numero_documento}`);
    }
    async getAllPatient() {
        return await this.get(`/patient/?numero_documento= `);
    }
    async updatePatient(numero_documento, patientInput) {
        let patient = new Object(JSON.parse(JSON.stringify(patientInput)));
        return await this.patch(`/patient/${numero_documento}`, patient);
    }
    async deletePatient(numero_documento) {
        return await this.delete(`/patient/${numero_documento}`);
    }

    //Metodos para entity
    async createEntity(entity) {
        entity = new Object(JSON.parse(JSON.stringify(entity)));
        return await this.post(`/entity/`, entity);
    }
    async getAllEntity(name) {
        return await this.get(`/entity/?name=`);
    }
    async getEntity(name) {
        return await this.get(`/entity/${name}`);
    }
    async updateEntity(name, entityInput) {
        let entidad = new Object(JSON.parse(JSON.stringify(entityInput)));
        return await this.patch(`/entity/${name}`, entidad);
    }
    async deleteEntity(name) {
        return await this.delete(`/entity/${name}`);
    }

}
module.exports = UserAPI;