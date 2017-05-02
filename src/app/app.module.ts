import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CovalentCoreModule } from '@covalent/core';
import { CovalentLayoutModule } from '@covalent/core';
import { AppComponent } from './app.component';
import { RequestedCoursesComponent } from './requested-courses/requested-courses.component';
import { UniversityOptionsComponent } from './university-options/university-options.component';

import { StudentService } from './services/student.service';
import { SelectedTermComponent } from './selected-term/selected-term.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestedCoursesComponent,
    UniversityOptionsComponent,
    SelectedTermComponent
  ],
  imports: [
    CovalentCoreModule,
    BrowserAnimationsModule,
    CovalentLayoutModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
