package com.mod3capstoneproject.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user")
public class UserRecord {
	
	@Id
	@GeneratedValue
	private int id;
	@Column(name = "uname")
	private String name;
	@Column(name = "pw")
	
	private String password;
	@Column(name = "current_progress_score")
	private int currentScore;
	@Column(name = "total_progress_score")
	private int totalScore;
	@Column(name = "total_quizes_completed")
	private int totalQuizesCompleted;
	
	public UserRecord() {

	}
	
	//Constructor

	
	//Getters & Setters
	public int getId() {
		return id;
	}
public UserRecord(int id, String name, String password, int currentScore, int totalScore,
			int totalQuizesCompleted) {
		super();
		this.id = id;
		this.name = name;
		this.password = password;
		this.currentScore = currentScore;
		this.totalScore = totalScore;
		this.totalQuizesCompleted = totalQuizesCompleted;
	}

public String getName() {
	return name;
}

public void setName(String name) {
	this.name = name;
}

public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password = password;
}

public int getCurrentScore() {
	return currentScore;
}

public void setCurrentScore(int currentScore) {
	this.currentScore = currentScore;
}

public int getTotalScore() {
	return totalScore;
}

public void setTotalScore(int totalScore) {
	this.totalScore = totalScore;
}

public int getTotalQuizesCompleted() {
	return totalQuizesCompleted;
}

public void setTotalQuizesCompleted(int totalQuizesCompleted) {
	this.totalQuizesCompleted = totalQuizesCompleted;
}

public void setId(int id) {
	this.id = id;
}

@Override
public String toString() {
	return "UserRecord [id=" + id + ", name=" + name + ", currentScore=" + currentScore + ", totalScore=" + totalScore
			+ ", totalQuizesCompleted=" + totalQuizesCompleted + "]";
}


	

	

}
