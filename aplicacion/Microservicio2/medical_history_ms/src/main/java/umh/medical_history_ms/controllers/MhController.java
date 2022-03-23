package umh.medical_history_ms.controllers;

import umh.medical_history_ms.exceptions.MhNotFoundException;
import umh.medical_history_ms.models.MedicalHistory;
import umh.medical_history_ms.repositories.MedicalHistoryRepository;
import org.springframework.web.bind.annotation.*;

//INFO GENERAL
//POST funciona correctamente
//GET funciona correctamente
//DELETE funciona correctamente
//PATCH funciona correctamente

@RestController
public class MhController {

    private final MedicalHistoryRepository medicalHistoryRepository;

    public MhController(MedicalHistoryRepository medicalHistoryRepository) {
        this.medicalHistoryRepository = medicalHistoryRepository;
    }

    @GetMapping("/medicalHistory/{document}")
    MedicalHistory getMedicalHistory(@PathVariable String document){
        return medicalHistoryRepository.findById(document)
                .orElseThrow(() -> new MhNotFoundException("No se encontro una historia clinica con el número de documento: " + document));
    }

    @PostMapping("/medicalHistory")
    MedicalHistory newMedicalHistory(@RequestBody MedicalHistory medicalHistory){
        return medicalHistoryRepository.save(medicalHistory);
    }

    @DeleteMapping("/medicalHistory/{document}")
    void deleteMedicalHistory(@PathVariable String document) {
        this.medicalHistoryRepository.deleteById(document);
    }

    @PatchMapping("/medicalHistory/{document}")
    MedicalHistory updateMedicalHistory(@RequestBody MedicalHistory medicalHistory){
        return medicalHistoryRepository.save(medicalHistory);
    }

}
