import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from './student';
import { Observable } from 'rxjs';
import { Unit } from './Unit';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  getUnitDetails(unitCode: String) :Observable<Unit> {

    const getUnitDetailsURL ='http://localhost:8080/StudentManagementSystem/unitDetails/';
  
    return this.http.get<Unit>(getUnitDetailsURL+unitCode);
  }
  getEnrolemtDetails(studentIdE: String) :Observable<String []> {

    const getEnrolmentDetailsURL ='http://localhost:8080/StudentManagementSystem/enrolledUnits/';
  
    return this.http.get<String []>(getEnrolmentDetailsURL+studentIdE);
  }
  getContactDetails(studentIdC: String) :Observable<Student>{

    const getContactDetailsURL ='http://localhost:8080/StudentManagementSystem/contactDetails/';
  
    return this.http.get<Student>(getContactDetailsURL+studentIdC);
  }

  constructor(private http : HttpClient) { }
}
