import { Component } from "@angular/core";
import { LocalStorageService } from "./local-storage.service";

@Component({
    selector : 'admission',
    templateUrl : './admission.component.html',
    styleUrls : ['./admission.component.css']
})
export class AdmissionComponent{
    constructor(public localStorageService : LocalStorageService){}
    username : string = "";
    email : string ="";
    course : string ="";
    age : number = 0;
    i : number = 0;
    public addItem(user: string, cours : string){
        this.localStorageService.setItem('name',user);
        this.localStorageService.setItem('course',cours);
    }
    public retreive(key : string){
        if(key == "name")
           return this.username;
        return this.course;
    }
    log(form:any){
        this.username = form.controls.user.value;
        this.email = form.controls.email.value;
        this.age = form.controls.age.value;
        this.course = form.controls.course.value;
        this.addItem(this.username,this.course);
        //alert(this.username+"\n"+this.email+"\n"+this.age+"\n"+this.course_type+"\n"+this.course);
    }
}