const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');
class MedicalHistoryAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.medicalHistory_api_url;
    }

    //Metodos para medical History
    async createMedicalHistory(hc) {
        hc = new Object(JSON.parse(JSON.stringify(hc)));
        return await this.post(`/medicalHistory`, hc);
    }
    async getMedicalHistory(document) {
        return await this.get(`/medicalHistory/${document}`);
    }
 
    async updateMedicalHistory(document, medicalhistoryInput) {
        let mh = new Object(JSON.parse(JSON.stringify(medicalhistoryInput)));
        return await this.patch(`/medicalHistory/${document}`, mh);
    }
    async deleteMedicalHistory(document) {
        return await this.delete(`/medicalHistory/${document}`);
    }

}
module.exports = MedicalHistoryAPI;