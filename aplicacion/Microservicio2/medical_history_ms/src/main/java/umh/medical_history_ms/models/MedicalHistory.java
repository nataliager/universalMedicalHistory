package umh.medical_history_ms.models;

import org.springframework.data.annotation.Id;


public class MedicalHistory {

    @Id
    //Datos usuario
    private String document;
    private String fullname;
    private String sex;
    private Integer age;
    private String dateBirth;
    private String bloodType;
    private String eps;
    private String address;
    private String phone;
    private String email;
    private String occupation;
    private String maritalStatus;

    //Datos exploratorios
    private String hc;
    private Integer weight;
    private Integer height;
    private String diseases;
    private String hdiseases;
    private String medication;
    private String surgeries;
    private Integer nabortion;
    private String planification;
    private String allergies;
    //Contacto de emergencia
    private String nemergencyContact;
    private String pemergencyContact;

    //Datos de consulta
    private String motive;
    private String dateConsult;
    private String typeConsult;
    private String entity;
    private String doctor;

    //Orden medica
    private String nmedication;
    private String prescription;

    private String evolution;
    private String consultation;


    public MedicalHistory(String document, String fullname, String sex, Integer age, String dateBirth, String bloodType, String eps, String address, String phone, String email, String occupation, String maritalStatus, String hc, Integer weight, Integer height, String diseases, String hdiseases, String medication, String surgeries, Integer nabortion, String planification, String allergies, String nemergencyContact, String pemergencyContact, String motive, String dateConsult, String typeConsult, String entity, String doctor, String nmedication, String prescription, String evolution, String consultation) {

        this.document = document;
        this.fullname = fullname;
        this.sex = sex;
        this.age = age;
        this.dateBirth = dateBirth;
        this.bloodType = bloodType;
        this.eps = eps;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.occupation = occupation;
        this.maritalStatus = maritalStatus;
        this.hc = hc;
        this.weight = weight;
        this.height = height;
        this.diseases = diseases;
        this.hdiseases = hdiseases;
        this.medication = medication;
        this.surgeries = surgeries;
        this.nabortion = nabortion;
        this.planification = planification;
        this.allergies = allergies;
        this.nemergencyContact = nemergencyContact;
        this.pemergencyContact = pemergencyContact;
        this.motive = motive;
        this.dateConsult = dateConsult;
        this.typeConsult = typeConsult;
        this.entity = entity;
        this.doctor = doctor;
        this.nmedication = nmedication;
        this.prescription = prescription;
        this.evolution = evolution;
        this.consultation = consultation;
    }



    public String getDocument() {
        return document;
    }

    public String getFullname() {
        return fullname;
    }

    public String getSex() {
        return sex;
    }

    public Integer getAge() {
        return age;
    }

    public String getDateBirth() {
        return dateBirth;
    }

    public String getBloodType() {
        return bloodType;
    }

    public String getEps() {
        return eps;
    }

    public String getAddress() {
        return address;
    }

    public String getPhone() {
        return phone;
    }

    public String getEmail() {
        return email;
    }

    public String getOccupation() {
        return occupation;
    }

    public String getMaritalStatus() {
        return maritalStatus;
    }

    public String getHc() {
        return hc;
    }

    public Integer getWeight() {
        return weight;
    }

    public Integer getHeight() {
        return height;
    }

    public String getDiseases() {
        return diseases;
    }

    public String getHdiseases() {
        return hdiseases;
    }

    public String getMedication() {
        return medication;
    }

    public String getSurgeries() {
        return surgeries;
    }

    public Integer getNabortion() {
        return nabortion;
    }

    public String getPlanification() {
        return planification;
    }

    public String getAllergies() {
        return allergies;
    }

    public String getNemergencyContact() {
        return nemergencyContact;
    }

    public String getPemergencyContact() {
        return pemergencyContact;
    }

    public String getMotive() {
        return motive;
    }

    public String getDateConsult() {
        return dateConsult;
    }

    public String getTypeConsult() {
        return typeConsult;
    }

    public String getEntity() {
        return entity;
    }

    public String getDoctor() {
        return doctor;
    }

    public String getNmedication() {
        return nmedication;
    }

    public String getPrescription() {
        return prescription;
    }

    public String getEvolution() {
        return evolution;
    }

    public String getConsultation() {
        return consultation;
    }



    public void setDocument(String document) {
        this.document = document;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public void setDateBirth(String dateBirth) {
        this.dateBirth = dateBirth;
    }

    public void setBloodType(String bloodType) {
        this.bloodType = bloodType;
    }

    public void setEps(String eps) {
        this.eps = eps;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

    public void setMaritalStatus(String maritalStatus) {
        this.maritalStatus = maritalStatus;
    }

    public void setHc(String hc) {
        this.hc = hc;
    }

    public void setWeight(Integer weight) {
        this.weight = weight;
    }

    public void setHeight(Integer height) {
        this.height = height;
    }

    public void setDiseases(String diseases) {
        this.diseases = diseases;
    }

    public void setHdiseases(String hdiseases) {
        this.hdiseases = hdiseases;
    }

    public void setMedication(String medication) {
        this.medication = medication;
    }

    public void setSurgeries(String surgeries) {
        this.surgeries = surgeries;
    }

    public void setNabortion(Integer nabortion) {
        this.nabortion = nabortion;
    }

    public void setPlanification(String planification) {
        this.planification = planification;
    }

    public void setAllergies(String allergies) {
        this.allergies = allergies;
    }

    public void setNemergencyContact(String nemergencyContact) {
        this.nemergencyContact = nemergencyContact;
    }

    public void setPemergencyContact(String pemergencyContact) {
        this.pemergencyContact = pemergencyContact;
    }

    public void setMotive(String motive) {
        this.motive = motive;
    }

    public void setDateConsult(String dateConsult) {
        this.dateConsult = dateConsult;
    }

    public void setTypeConsult(String typeConsult) {
        this.typeConsult = typeConsult;
    }

    public void setEntity(String entity) {
        this.entity = entity;
    }

    public void setDoctor(String doctor) {
        this.doctor = doctor;
    }

    public void setNmedication(String nmedication) {
        this.nmedication = nmedication;
    }

    public void setPrescription(String prescription) {
        this.prescription = prescription;
    }

    public void setEvolution(String evolution) {
        this.evolution = evolution;
    }

    public void setConsultation(String consultation) {
        this.consultation = consultation;
    }
}
