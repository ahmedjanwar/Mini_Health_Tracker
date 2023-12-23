package fi.vamk.Data;


import java.util.Date;

import fi.vamk.user.User;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class HealthData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long dataId;

    @ManyToOne
    private User user;
    private int activityCalories;
    private int heartRate;
    private Date submissionDate;
    
    public Long getDataId() {
    	return dataId;
    }
    public void setDataId() {
    	this.dataId = dataId;
    }
	public int getActivityCalories() {
		return activityCalories;
	}
	public void setActivityCalories(int activityCalories) {
		this.activityCalories = activityCalories;
	}
	public int getHeartRate() {
		return heartRate;
	}
	public void setHeartRate(int heartRate) {
		this.heartRate = heartRate;
	}
	public Date getSubmissionDate() {
		return submissionDate;
	}
	public void setSubmissionDate(Date submissionDate) {
		this.submissionDate = submissionDate;
	}


}

