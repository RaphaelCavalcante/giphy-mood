import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent }  from './app.component';
import {MoodDashboardComponent} from './component/mood-dashboard/mood-dashboard.component';
import {Globals} from './globals';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, AppRoutingModule ],
  declarations: [ AppComponent, MoodDashboardComponent ],
  bootstrap:    [ AppComponent ],
  providers: [Globals]
  
})
export class AppModule { }
