import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent}  from './app.component';
import {MoodDashboardComponent} from './component/mood-dashboard/mood-dashboard.component';
import {MoodSearchComponent} from './component/mood-search/mood-search.component';
import {MoodFilterComponent} from './component/mood-filter/mood-filter.component';
import {ForbiddenValidatorDirective} from './validator/forbidden-chars.directive';

import {GifService} from './service/gif.service';

@NgModule({
  imports:
  [BrowserModule, FormsModule, HttpModule, AppRoutingModule, ReactiveFormsModule],
  declarations:
  [
    AppComponent,
    MoodDashboardComponent,
    MoodSearchComponent ,
    MoodFilterComponent,
    ForbiddenValidatorDirective
  ],
  bootstrap:
   [AppComponent],
  providers:
   [GifService]
})
export class AppModule { }
