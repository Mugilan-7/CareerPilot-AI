package com.careerpilot.api.storage;

import org.springframework.web.multipart.MultipartFile;

public interface FileStorageService {
  String upload(MultipartFile file);
}
