package com.mod3capstoneproject.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mod3capstoneproject.model.UserRecord;
import com.mod3capstoneproject.repository.UserRepository;

@Service
public class UserService {
	@Autowired    
	private UserRepository userRepository;   
	
	public List<UserRecord> getAllUsers()  
	{    
		List<UserRecord> userRecords = new ArrayList<>();    
		userRepository.findAll().forEach(userRecords::add);  
		System.out.println(userRecords);	//test
		return userRecords;    
	} 
	
	
	public void addUser(UserRecord userRecord)  
	{    
		System.out.println("calling new add user method");
		userRepository.save(userRecord);    
	}  
}
