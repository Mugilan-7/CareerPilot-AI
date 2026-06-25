package com.careerpilot.api;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(properties = {
  "spring.datasource.url=jdbc:h2:mem:careerpilot;MODE=PostgreSQL;DB_CLOSE_DELAY=-1",
  "spring.datasource.driver-class-name=org.h2.Driver",
  "spring.jpa.hibernate.ddl-auto=create-drop",
  "app.jwt.secret=test-secret-test-secret-test-secret-test-secret"
})
class CareerPilotApiApplicationTests {
  @Test
  void contextLoads() {
  }
}
