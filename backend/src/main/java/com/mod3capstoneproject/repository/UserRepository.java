package com.mod3capstoneproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mod3capstoneproject.model.UserRecord;

public interface UserRepository extends JpaRepository<UserRecord, Integer> {

}
