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
class UserRestControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private UserRepository userRepository;
    List<User> users;

    @Test
    void addItemToDatabase() throws Exception {
        User newUser = new User();
        newUser.setUsername("testUser");
        newUser.setPassword("testPassword");
        newUser.setEmail("test@example.com");

        mockMvc.perform(MockMvcRequestBuilders.post("/api/users/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"username\":\"testUser\",\"password\":\"testPassword\",\"email\":\"test@example.com\"}")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

        //users = userRepository.findAll();
        //assertEquals(1, users.size());
    }

    @Test
    void getOneFromDatabaseBasedOnId() throws Exception {
        

        mockMvc.perform(MockMvcRequestBuilders.get("/api/users/" + "1")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    void getAllFromDatabaseAndCompareAmount() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/users/all")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(greaterThanOrEqualTo(0))));
    }

    @Test
    void testRestfulApiGetOne() throws Exception {
        User newUser = new User();
        newUser.setUsername("testUser");
        newUser.setPassword("testPassword");
        newUser.setEmail("test@example.com");
        User savedUser = userRepository.save(newUser);

        mockMvc.perform(MockMvcRequestBuilders.get("/api/users/" + savedUser.getUserId())
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.username", is(savedUser.getUsername())))
                .andExpect(jsonPath("$.email", is(savedUser.getEmail())));
    }

    @Test
    void testRestfulApiPost() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/api/users/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"username\":\"testUser\",\"password\":\"testPassword\",\"email\":\"test@example.com\"}")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }
}

