import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student/student.service';
import { Student } from './student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  displayStudentDetails = false;
  displayEnrolmentDetails = false;
  displayUnitDetails = false;
  errorMessageBlock = false;
  studentIdC : String = "";
  studentIdE : String = "";
  unitCode : String = "";
  public student;
  public unit;
  public enrolment =[];
  public errorMessage :String = "";
  constructor(private studentService : StudentService) { }

  ngOnInit() {
  }

  getContactDetails(){
    this._hideAllBlocks();
    console.log(this.studentIdC);
    this.studentService.getContactDetails(this.studentIdC)
          .subscribe(data =>{
            this.displayStudentDetails = true;
            if(data.studentId!=null){
              this.student = data;
              console.log(this.student);
            }else{
              this.errorMessageBlock = true;
              this.errorMessage = data.errorMessage;
              console.log(this.errorMessage);
            }
          });
  }

  getEnrolmentDetails(){
    this._hideAllBlocks();
    console.log(this.studentIdE);
    this.studentService.getEnrolemtDetails(this.studentIdE)
          .subscribe(data =>{
            this.displayEnrolmentDetails = true;
            this.enrolment = data;
            console.log(this.enrolment);
          });
  }
  
  getUnitDetails(){
    this._hideAllBlocks();
    console.log(this.unitCode);
    this.studentService.getUnitDetails(this.unitCode)
          .subscribe(data =>{
            this.displayUnitDetails = true;
            if(data.unitCode!=null){
              this.unit = data;
            }else{
              this.errorMessageBlock = true;
              this.errorMessage = data.errorMessage;
            }
          });
  }

  _hideAllBlocks(){
    this.displayStudentDetails = false;
    this.displayEnrolmentDetails = false;
    this.displayUnitDetails = false;
    this.errorMessageBlock = false;
  }
}
