package com.careerpilot.api.storage;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import java.io.IOException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class CloudinaryStorageService implements FileStorageService {
  private final String cloudinaryUrl;

  public CloudinaryStorageService(@Value("${app.cloudinary.url}") String cloudinaryUrl) {
    this.cloudinaryUrl = cloudinaryUrl;
  }

  @Override
  public String upload(MultipartFile file) {
    if (cloudinaryUrl == null || cloudinaryUrl.isBlank()) {
      return "local-demo://" + file.getOriginalFilename();
    }
    try {
      var result = new Cloudinary(cloudinaryUrl).uploader().upload(file.getBytes(), ObjectUtils.asMap("resource_type", "auto", "folder", "careerpilot/resumes"));
      return String.valueOf(result.get("secure_url"));
    } catch (IOException ex) {
      throw new IllegalArgumentException("Unable to upload file");
    }
  }
}
