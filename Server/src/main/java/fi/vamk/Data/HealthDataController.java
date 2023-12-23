package fi.vamk.Data;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/healthdata")
public class HealthDataController {

    @Autowired
    private HealthDataRepository healthDataRepository;

    @GetMapping("/all")
    public List<HealthData> getAllHealthData() {
        return healthDataRepository.findAll();
    }

    @GetMapping("/{dataId}")
    public Optional<HealthData> getHealthDataById(@PathVariable Long dataId) {
        return healthDataRepository.findById(dataId);
    }

    @PostMapping("/submit")
    public HealthData submitHealthData(@RequestBody HealthData healthData) {
        return healthDataRepository.save(healthData);
    }

}

