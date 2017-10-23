import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormModule, ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent }  from './app.component';
import {MoodDashboardComponent} from './component/mood-dashboard/mood-dashboard.component';
import {MoodSearchComponent} from './component/mood-search/mood-search.component';
import {MoodFilterComponent} from './component/mood-filter/mood-filter.component';
import {GifService} from './service/gif.service';
import {ForbiddenValidatorDirective} from './validator/forbidden-chars.directive';

@NgModule({
  imports:      
    [ BrowserModule, FormsModule, HttpModule, AppRoutingModule,FormsModule, ReactiveFormsModule ],
  declarations: 
  [ 
    AppComponent,
    MoodDashboardComponent,
    MoodSearchComponent , 
    MoodFilterComponent,
    ForbiddenValidatorDirective
  ],
  bootstrap:   
   [ AppComponent ],
  providers:
   [GifService]
  
})
export class AppModule { }
