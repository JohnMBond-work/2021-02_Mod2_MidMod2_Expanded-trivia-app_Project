package com.mod3capstoneproject.controller;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.mod3capstoneproject.model.*;
import com.mod3capstoneproject.service.UserService;



@RestController 
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/users")
public class UserController  
{    
	@Autowired    
	private UserService userService;     

	@GetMapping    
	public List<UserRecord> getAllUser()  {  
		System.out.println("testing get all users-from user controller");
		System.out.println(userService.getAllUsers());	//test
		return userService.getAllUsers();    
	} 

	@GetMapping("/{id}")
	public UserRecord getUserById(@PathVariable (value = "id") Integer id) {
		return this.userService.findById(id).get();
	}	
	
	@RequestMapping(value="/add-user", method=RequestMethod.POST)
	public void addUser(@RequestBody UserRecord userRecord)  
	{  
		System.out.println("adding user from user controller");
		userService.addUser(userRecord);    
	}       
	
	@DeleteMapping("/{id}")
	public void deleteUser(@PathVariable ("id") Integer id){
		 userService.deleteUser(id);		
	}
	
	@PutMapping("/{id}")
	public ResponseEntity updateUser(@RequestBody UserRecord user, @PathVariable ("id") Integer id) {
		return userService.updateUser(user, id);
	}	
	
}  









