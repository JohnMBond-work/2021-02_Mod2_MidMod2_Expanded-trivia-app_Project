package com.mod3capstoneproject.controller;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
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

	@RequestMapping(value="/add-user", method=RequestMethod.POST)
	public void addUser(@RequestBody UserRecord userRecord)  
	{  
		System.out.println("adding user from user controller");
		userService.addUser(userRecord);    
	}       
}  
