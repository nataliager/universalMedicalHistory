package umh.medical_history_ms.repositories;

import org.springframework.data.mongodb.repository.Query;
import umh.medical_history_ms.models.MedicalHistory;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MedicalHistoryRepository extends MongoRepository <MedicalHistory, String> {

}
