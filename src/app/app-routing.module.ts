import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoodDashboardComponent} from './component/mood-dashboard/mood-dashboard.component';

const routes:Routes = [
    {path:'', redirectTo: '/mood-dashboard', pathMatch:'full'},
    {path:'mood-dashboard', component:MoodDashboardComponent}
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}