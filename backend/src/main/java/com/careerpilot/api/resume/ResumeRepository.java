package com.careerpilot.api.resume;

import java.util.List;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResumeRepository extends JpaRepository<ResumeDocument, UUID> {
  List<ResumeDocument> findTop12ByUserEmailOrderByCreatedAtAsc(String email);
}
