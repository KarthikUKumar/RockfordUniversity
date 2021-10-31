import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { FacultyComponent } from './faculty.component';
import { ProgramComponent } from './program.component';
import { ContactComponent } from './contact.component';
import { NewsletterComponent } from './newsletter.component';
import { AdmissionComponent } from './admission.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdmissionComponent,
    NewsletterComponent,
    ProgramComponent,
    FacultyComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StorageServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
