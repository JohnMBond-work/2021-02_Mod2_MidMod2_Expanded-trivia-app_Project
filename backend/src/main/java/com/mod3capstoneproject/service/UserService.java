package com.mod3capstoneproject.service;
import java.util.Optional;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

	public ResponseEntity<UserRecord> deleteUser(Integer userId)
	{    
//		UserRecord existingUser= userRepository.findById(userId);
		userRepository.deleteById(userId);
		return ResponseEntity.ok().build();
	}

	public Optional<UserRecord> findById(Integer id) {
		return userRepository.findById(id);
	}

	public ResponseEntity updateUser(UserRecord user, Integer id) {
		System.out.println("updateUser");
		Optional<UserRecord> existingUser = userRepository.findById(id);
		if (existingUser.isPresent()) {
		UserRecord eu = (UserRecord) existingUser.get();
		eu.setName(user.getName());
		eu.setCurrentScore(user.getCurrentScore());
		eu.setTotalScore(user.getTotalScore());
		eu.setTotalQuizesCompleted(user.getTotalQuizesCompleted());
		UserRecord updatedUser = userRepository.save(eu);
		return new ResponseEntity<>(updatedUser, HttpStatus.OK);
	} else {
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}   
	}
}
