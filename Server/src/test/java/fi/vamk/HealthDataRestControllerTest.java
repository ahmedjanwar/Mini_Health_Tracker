package fi.vamk;

import fi.vamk.Data.*;
import fi.vamk.user.*;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.List;

import static org.hamcrest.Matchers.*;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class HealthDataRestControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private HealthDataRepository healthDataRepository;

    @Test
    void addItemToDatabase() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/api/healthdata/submit")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"activityCalories\":150,\"heartRate\":75}")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

        List<HealthData> healthDataList = healthDataRepository.findAll();
        assertEquals(1, healthDataList.size());
    }

    @Test
    void getOneFromDatabaseBasedOnId() throws Exception {
        HealthData newHealthData = new HealthData();
        newHealthData.setActivityCalories(150);
        newHealthData.setHeartRate(75);
        HealthData savedHealthData = healthDataRepository.save(newHealthData);

        mockMvc.perform(MockMvcRequestBuilders.get("/api/healthdata/" + savedHealthData.getDataId())
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.activityCalories", is(savedHealthData.getActivityCalories())))
                .andExpect(jsonPath("$.heartRate", is(savedHealthData.getHeartRate())));
    }

    @Test
    void getAllFromDatabaseAndCompareAmount() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/healthdata/all")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(greaterThanOrEqualTo(0))));
    }

    @Test
    void testRestfulApiGetOne() throws Exception {
        HealthData newHealthData = new HealthData();
        newHealthData.setActivityCalories(150);
        newHealthData.setHeartRate(75);
        HealthData savedHealthData = healthDataRepository.save(newHealthData);

        mockMvc.perform(MockMvcRequestBuilders.get("/api/healthdata/" + savedHealthData.getDataId())
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.activityCalories", is(savedHealthData.getActivityCalories())))
                .andExpect(jsonPath("$.heartRate", is(savedHealthData.getHeartRate())));
    }

    @Test
    void testRestfulApiPost() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/api/healthdata/submit")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"activityCalories\":150,\"heartRate\":75}")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }
}
