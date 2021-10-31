import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { FacultyComponent } from './faculty.component';
import { ProgramComponent } from './program.component';
import { ContactComponent } from './contact.component';
import { NewsletterComponent } from './newsletter.component';
import { AdmissionComponent } from './admission.component';


const routes: Routes = [ 
  { path : '' ,component : HomeComponent },
  { path : 'faculty', component : FacultyComponent},
  { path : 'contact', component : ContactComponent},
  { path : 'newsletter', component : NewsletterComponent},
  { path : 'program', component : ProgramComponent},
  { path : 'admission', component : AdmissionComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
