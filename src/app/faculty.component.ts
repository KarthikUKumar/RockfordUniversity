import { Component } from "@angular/core";

@Component({
    selector : 'faculty',
    styleUrls : ['./faculty.component.css'],
    templateUrl : './faculty.component.html'
})
export class FacultyComponent{
    name = ["Akshay Rao","Ruthik Shetty","Danish Sheikh","Sharan R","Karan U"];
    faculty = [
        { desg : "Principal",qual : "Qualification - Ph.d in CSE,MTech in CSE,BE in E&C", exp : "Experience - Professor in NMAMIT for 7 years.\nPrincipal in NMAMIT from 2012-till date."},
        { desg : "Professor & Head", qual : "Qualification - Ph.d in CSE,MTech in CSE,BE in CSE", exp: "Experience - Professor in NMAMIT for 4 years.\nProfessor at Srinivasa Eng. College."},
        {desg : "Associate Professor", qual : "Qualification - Ph.d in CSE,,M.Phill in CSE,MTech in CSE,BE in CSE", exp: "Experience - Professor in NMAMIT from 2016-till dates.\nAssociate Professor at Karavali Eng. College."},
        {desg : "Professor", qual : "Qualification - Ph.d in CSE,MTech in CSE,BE in C&C", exp: "Experience - Professor in NMAMIT for 2 years.\nAssociate Professor at MIT, Manipal for 3 years"},
        {desg : "Associate Professor", qual : "Qualification - Ph.d in CSE,MTech in CSE,BE in IS", exp: "Experience - Professor in NMAMIT from 2019-till date.\nProfessor at Sahyadri Eng. College."}
    ]
    desc="";
    designation="";
    qualification="";
    experience="";
    display(id : string){
        switch(id){
            case "btn1":this.desc = this.name[0];
                        this.designation = this.faculty[0].desg;
                        this.qualification = this.faculty[0].qual;
                        this.experience = this.faculty[0].exp;
                        break;
            case "btn2":this.desc = this.name[1];
            this.designation = this.faculty[1].desg;
                        this.qualification = this.faculty[1].qual;
                        this.experience = this.faculty[1].exp;
                        break;
            case "btn3":this.desc = this.name[2];
            this.designation = this.faculty[2].desg;
                        this.qualification = this.faculty[2].qual;
                        this.experience = this.faculty[2].exp;
                        break;
            case "btn4":this.desc = this.name[3];
            this.designation = this.faculty[3].desg;
                        this.qualification = this.faculty[3].qual;
                        this.experience = this.faculty[3].exp;
                        break;
            case "btn5":this.desc = this.name[4];
            this.designation = this.faculty[4].desg;
                        this.qualification = this.faculty[4].qual;
                        this.experience = this.faculty[4].exp;
                        break;
            default : this.desc = "";
        }
    }
}